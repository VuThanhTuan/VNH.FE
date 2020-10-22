import { all, call, put, takeLeading } from 'redux-saga/effects';
import * as actions from './action';
import * as constants from './constants';
import request, { createRequest } from '../../../../utils/request';
const APIs = {
  login: `api/account/Login`,
};

function* loginSaga(action) {
  const body = {
    userName: action.payload.userName,
    password: action.payload.password,
  };

  const options = createRequest('POST', body);
  const login = yield call(request, APIs.login, options);

  yield put(actions.loginResponse(login));
}

export default function* sagaWatcher() {
  yield takeLeading(constants.LOGIN, loginSaga);
}
