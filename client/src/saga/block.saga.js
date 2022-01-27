import { put, call } from "redux-saga/effects";

import { GET_POWERBANKS } from "../redux/types/block.types";
import { OK } from '../constants/responseCodes.enum';
import { httpHelper } from '../helpers/http.helper';
import { LOCALHOST } from '../constants/contants';

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