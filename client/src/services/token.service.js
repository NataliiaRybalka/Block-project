import { httpHelper } from '../helpers/http.helper';
import { LOCALHOST } from '../constants/contants';
import { POST } from '../constants/httpMethods';

export const setTokenAndRoleServiceWherLogin = (id, tokens) => {
  localStorage.setItem('id', id);
  localStorage.setItem('access_token', tokens.access_token);
  localStorage.setItem('refresh_token', tokens.refresh_token);
};

export const updateTokens = async () => {
  const { request } = httpHelper();
  const res = await request(`${LOCALHOST}auth/create-tokens`, null, POST, null, {}, localStorage.getItem('refresh_token'));

  localStorage.setItem('access_token', res.data.access_token);
  localStorage.setItem('refresh_token', res.data.refresh_token);
  // window.location.reload(); 
  return res;
};