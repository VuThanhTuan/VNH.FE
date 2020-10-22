import { LOGIN } from './constants';

export const login = data => ({
  type: LOGIN,
  payload: data,
});

export const loginResponse = data => ({
  type: LOGIN,
  payload: data,
});
