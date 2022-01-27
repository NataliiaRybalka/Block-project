import { LOGIN, REGISTRATION } from "../types/auth.types";

export const registration = userData => {
  return {
    type: REGISTRATION,
    payload: userData
  }
};

export const login = userData => {
  return {
    type: LOGIN,
    payload: userData
  }
};