import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, CssBaseline,  FormHelperText, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import InputFieldMaterial from '../InputFieldMaterial';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '35vw',
    marginLeft: theme.spacing.unit * 2,
  },
  title: {
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  errorMsg: {
    fontSize: '1.1rem',
    marginBottom: '0.75em',
    color: 'red',    
  }
});

const AuthForm = props => {
  const _onSubmit = (formValues) => {
    console.log(`[debug]<AuthFormMaterial@_onSubmit> formValues: \n`, formValues);
    props.onSubmit(formValues);
  }
  const { classes } = props;

  const renderErrorMessage = () => {
    if (!props.errorMessage) return null;
    
    return (
      <FormHelperText className={ classes.errorMsg }>{ props.errorMessage }</FormHelperText>
    );
  }

  // console.log(`[debug]<AuthFormMaterial@render> props: \n`, props);
  return (
    <Fragment>
      <Typography className={ classes.title } component="h4" variant="h5">
        { props.title }
      </Typography>
      <CssBaseline />
      <Paper className={ classes.paper } elevation={ 1 }>
        <form className={ classes.container } autoComplete="off" onSubmit={ props.handleSubmit( _onSubmit ) }>
          <Field id="inputEmail" name="email" component={ InputFieldMaterial } label="Email" 
                type="email" placeholder="e.g. john.smith@gmail.com" autoComplete="none" />
          <Field id="inputPassword" name="password" component={ InputFieldMaterial } 
                label="Password" type="password" autoComplete="none" />
          { renderErrorMessage() }
          <Button variant="contained" type="submit" color="primary">Submit</Button>
        </form>
      </Paper>
    </Fragment>
  );
}

export default reduxForm({
  form: 'authForm',
})(withStyles(styles)(AuthForm));