export const setTokenAndRoleServiceWherLogin = (id, tokens, role) => {
  localStorage.setItem('id', id);
  localStorage.setItem('access_token', tokens.access_token);
  localStorage.setItem('refresh_token', tokens.refresh_token);
};
