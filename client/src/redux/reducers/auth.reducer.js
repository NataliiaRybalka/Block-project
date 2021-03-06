import { REGISTRATION_SUCCESS, LOGIN_SUCCESS } from "../types/auth.types";

const initialState = {
  user: {},
  userTokens: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {...state, user: action.payload.user, userTokens: action.payload.userTokens};

    case LOGIN_SUCCESS:
      return {...state, user: action.payload.user, userTokens: action.payload.userTokens};
  
    default:
      return state;
  }
};