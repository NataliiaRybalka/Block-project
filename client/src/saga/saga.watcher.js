import { takeEvery } from "redux-saga/effects";

import { registrationWorker, loginWorker } from "./auth.saga";
import { getPowerbanksWorker, changePowerbankInStockWorker } from './block.saga';
import { LOGIN, REGISTRATION } from "../redux/types/auth.types";
import { REQUEST_POWERBANKS, CHANGE_POWERBANK_IN_STOCK } from '../redux/types/block.types';

export function* sagaWatcher() {
  yield takeEvery(REGISTRATION, registrationWorker);
  yield takeEvery(LOGIN, loginWorker);
  yield takeEvery(REQUEST_POWERBANKS, getPowerbanksWorker);
  yield takeEvery(CHANGE_POWERBANK_IN_STOCK, changePowerbankInStockWorker);
}
