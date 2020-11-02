/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../Client/SignIn-SignUp/SignIn/constants';
import { localStorageUtil } from '../../utils/localStorage';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  isLoggedIn: localStorageUtil.getAuthInfo()
    ? localStorageUtil.getAuthInfo().isLoggedIn.isLoggedIn
    : null,
  loginErrorMessage: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOGIN_SUCCESS:
        draft.isLoggedIn = true;
        // eslint-disable-next-line no-case-declarations
        const loginInfo = {
          ...action.payload,
          isLoggedIn: true,
        };
        localStorageUtil.saveLoginInfo(loginInfo);
        break;
      case LOGIN_FAIL:
        draft.loginErrorMessage = action.message;
        break;
    }
  });

export default appReducer;
