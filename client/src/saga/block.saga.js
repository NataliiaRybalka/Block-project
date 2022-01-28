import { put, call } from "redux-saga/effects";

import { GET_POWERBANKS, GET_USER_POWERBANKS } from "../redux/types/block.types";
import { OK, Unauthorized } from '../constants/responseCodes.enum';
import { httpHelper } from '../helpers/http.helper';
import { LOCALHOST } from '../constants/contants';
import { PUT } from "../constants/httpMethods";
import { updateTokens } from "../services/token.service";

export function* getPowerbanksWorker() {
  try {
    const payload = yield call(getPowerbanks);
    if (payload.status === OK) {
      yield put({ type: GET_POWERBANKS, payload: payload.data });
    } else {
      throw payload;
    }
  } catch (e) {
    throw new Error(e);
  }
};
const getPowerbanks = async () => {
  const { request } = httpHelper();
  return await request(`${LOCALHOST}blocks`);
};

export function* changePowerbankInStockWorker(data) {
  try {
    const payload = yield call(changePowerbankInStock, data.payload);
    if (payload.status !== OK) {
      throw payload;
    }
  } catch (e) {
    if (e.status === Unauthorized && e.data === 'Wrong token') {
      yield put(updateTokens());
    }
  }
};
const changePowerbankInStock = async (powerbank) => {
  const { request } = httpHelper();
  return await request(`${LOCALHOST}blocks/${powerbank.id}`, localStorage.getItem('access_token'), PUT, powerbank);
};

export function* getUserPowerbankWorker() {
  try {
    const payload = yield call(getUserPowerbank);
    if (payload.status === OK) {
      yield put({ type: GET_USER_POWERBANKS, payload: payload.data.powerbank_id });
    } else {
      throw payload;
    }
  } catch (e) {
    if (e.status === Unauthorized && e.data === 'Wrong token') {
      yield put(updateTokens());
    }
  }
};
const getUserPowerbank = async () => {
  const { request } = httpHelper();
  return await request(`${LOCALHOST}blocks/${localStorage.getItem('id')}`, localStorage.getItem('access_token'));
};
