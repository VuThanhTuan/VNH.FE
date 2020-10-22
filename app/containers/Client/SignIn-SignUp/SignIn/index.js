import React from 'react';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import './index.css';
import { useFormik, Formik, Form, Field } from 'formik';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import Input from 'components/Form/Input';
import { login } from './action';
import loginReducer from './reducer';
import sagaWatcher from './saga';
import * as selector from './selectors';
import injectSaga from '../../../../utils/injectSaga';

function SignIn(props) {
  const { loginForm, isLoggedIn, loginFunc } = props;
  const makeFormAttr = pr => ({
    userName: {
      name: 'userName',
      label: 'Tài khoản',
      type: 'text',
      component: Input,
      value: pr.values.userName,
      onChange: pr.handleChange,
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    },
    password: {
      name: 'password',
      label: 'Mật khẩu',
      type: 'password',
      component: Input,
      value: pr.values.password,
      onChange: pr.handleChange,
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon />
        </InputAdornment>
      ),
    },
  });

  return (
    <Formik
      initialValues={{
        userName: loginForm.username,
        password: loginForm.password,
      }}
      onSubmit={async values => {
        // await new Promise(r => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        loginFunc(values);
      }}
    >
      {pr => {
        const formAttr = makeFormAttr(pr);
        return (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field {...formAttr.userName} />
              </Grid>
              <Grid item xs={12}>
                <Field {...formAttr.password} />
              </Grid>
              <Grid className="footer">
                <Button variant="contained" color="primary" type="submit">
                  Đăng Nhập
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

SignIn.propTypes = {
  loginFunc: PropTypes.func,
  loginForm: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loginForm: selector.loginForm(),
  isLoggedIn: selector.isLogged(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loginFunc: data => dispatch(login(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginState', reducer: loginReducer });
const withSaga = injectSaga({ key: 'loginState', saga: sagaWatcher });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
  // withImmutablePropsToJS,
)(SignIn);
