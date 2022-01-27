import { takeEvery } from "redux-saga/effects";

import { registrationWorker, loginWorker } from "./auth.saga";
import { getPowerbanksWorker } from './block.saga';
import { LOGIN, REGISTRATION } from "../redux/types/auth.types";
import { REQUEST_POWERBANKS } from '../redux/types/block.types';

export function* sagaWatcher() {
  yield takeEvery(REGISTRATION, registrationWorker);
  yield takeEvery(LOGIN, loginWorker);
  yield takeEvery(REQUEST_POWERBANKS, getPowerbanksWorker);
}
