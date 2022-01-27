import { put, call } from "redux-saga/effects";

import { GET_BLOCKS } from "../redux/types/block.types";
import { OK } from '../constants/responseCodes.enum';
import { httpHelper } from '../helpers/http.helper';
import { LOCALHOST } from '../constants/contants';

export function* getBlocksWorker() {
  try {
    const payload = yield call(getBlocks);
    if (payload.status === OK) {
      yield put({ type: GET_BLOCKS, payload: payload.data });
    } else {
      throw payload;
    }
  } catch (e) {
    throw new Error(e);
  }
};
const getBlocks = async () => {
  const { request } = httpHelper();
  return await request(`${LOCALHOST}blocks`);
};