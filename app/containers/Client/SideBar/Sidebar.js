/* eslint-disable react/button-has-type */
import React from 'react';
import SignInSignUp from '../SignIn-SignUp';

const styles = () => ({
  button: {
    backgroundColor: 'red',
  },
});

export default function SideBar(props) {
  const myStyle = styles();
  const [open, setOpen] = React.useState(false);

  const login = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button style={myStyle.button} onClick={login}>
        Login
      </button>
      <SignInSignUp open={open} onClose={handleClose} />
    </div>
  );
}
