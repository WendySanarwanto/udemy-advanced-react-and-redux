import React, { Fragment } from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  label: {
    fontSize: '1.3rem',
  },
  inputField: {
    marginTop: '1.3em !important',
  }
});

const InputFieldMaterial = ({ classes, input, label, id, type, placeholder, autoComplete, style }) => {
  // console.log(`input: \n`, input);
  return (
    <Fragment>
      <FormControl margin="normal" required fullWidth>
        <InputLabel className={ classes.label } htmlFor={ id }>{ label }</InputLabel>
        <Input id={ id } {...input} type={ type } placeholder={ placeholder } 
               autoComplete={ autoComplete} style={ style } autoFocus
               className={ classes.inputField } />
      </FormControl>
    </Fragment>
  );
}

export default withStyles(styles)(InputFieldMaterial);
