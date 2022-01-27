import { takeEvery } from "redux-saga/effects";

import { registrationWorker, loginWorker } from "./auth.saga";
import { LOGIN, REGISTRATION } from "../redux/types/auth.types";

export function* sagaWatcher() {
  yield takeEvery(REGISTRATION, registrationWorker);
  yield takeEvery(LOGIN, loginWorker);
}
