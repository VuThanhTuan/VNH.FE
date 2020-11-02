import { createSelector } from 'reselect';
import { loginInitState } from './reducer';

const selectLogin = state => state.loginState || loginInitState;

export const loginForm = () =>
  createSelector(
    selectLogin,
    state => state.form,
  );

export const isLogged = () =>
  createSelector(
    selectLogin,
    state => state.isLoggedIn,
  );