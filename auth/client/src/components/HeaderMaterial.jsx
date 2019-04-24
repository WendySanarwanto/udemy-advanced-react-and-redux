import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  buttonGap: {
    marginRight: '1em',
  },
  header: {
    marginTop: '-1em',
    marginBottom: '1em'
  }
});

const HeaderMaterial = props => {
  const renderLinks = () => {
    const isAuthenticated = props.isAuthenticated;

    if (isAuthenticated) {
      return (
        <Fragment>
          <Button component={ Link } className={ classes.buttonGap } to="/feature" variant="contained" >Feature</Button>
          <Button component={ Link } to="/signout" variant="contained" >Sign Out</Button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Button component={ Link } className={ classes.buttonGap }  to="/signup" variant="contained" >Sign Up</Button>
        <Button component={ Link } to="/signin" variant="contained" >Sign In</Button>
      </Fragment>
    );
  
  };

  const { classes } = props;
  return (
    <div className={ classes.root }>
      <AppBar className={ classes.header } position="static">
        <Toolbar>
          <Typography component={ Link } to="/" variant="h6" color="inherit" className={classes.grow}>Redux Auth</Typography>
          { renderLinks() }
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
   isAuthenticated: state.auth && ((typeof state.auth.token) === 'string') && (state.auth.token.trim() !== '')
  };
};

export default connect(mapStateToProps)(withStyles(styles)(HeaderMaterial));