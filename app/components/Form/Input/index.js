import React from 'react';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

const Input = props => {
  const { field, form, meta, startAdornment, onChange } = props;
  const { onBlur, name, value } = field;
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      {...props}
      InputProps={{
        startAdornment,
      }}
      style={{ width: '100%' }}
    />
  );
};

export default Input;
