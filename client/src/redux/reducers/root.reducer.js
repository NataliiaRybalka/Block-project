import { combineReducers } from "redux";

import { authReducer } from "./auth.reducer";
import { blockReducer } from "./block.reducer";

export const rootReducer = combineReducers({
  authReducer,
  blockReducer
});