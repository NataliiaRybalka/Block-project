import { put, call } from "redux-saga/effects";

import { LOCALHOST } from "../constants/contants";
import { POST } from "../constants/httpMethods";
import { Created, OK } from '../constants/responseCodes.enum';
import { LOGIN_SUCCESS, REGISTRATION_SUCCESS } from "../redux/types/auth.types";
import { httpHelper } from "../helpers/http.helper";
import { setTokenAndRoleServiceWherLogin } from "../services/token.service";

export function* registrationWorker(data) {
  try {
    const payload = yield call(registration, data.payload);
    if (payload.status === Created) {
      yield put({ type: REGISTRATION_SUCCESS, payload: payload.data });
      yield put(setTokenAndRoleServiceWherLogin(payload.data.user.id, payload.data.userTokens));
    } else {
      throw payload;
    }
  } catch (e) {
    throw new Error(e);
  }
};
const registration = async (data) => {
  const { request } = httpHelper();
  return await request(`${LOCALHOST}auth/registration`, null, POST, data);
};

export function* loginWorker(data) {
  try {
    const payload = yield call(login, data.payload);
    if (payload.status === OK) {
      yield put({ type: LOGIN_SUCCESS, payload: payload.data });
      yield put(setTokenAndRoleServiceWherLogin(payload.data.user.id, payload.data.userTokens));
    } else {
      throw payload;
    }
  } catch (e) {
    throw new Error(e);
  }
};
const login = async (data) => {
  const { request } = httpHelper();
  return await request(`${LOCALHOST}auth/login`, null, POST, data);
};
