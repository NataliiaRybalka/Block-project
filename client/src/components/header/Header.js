import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Header.css';
import { Login } from '../auth/Login';
import { UserLogo } from '../user/UserLogo';

export const Header = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <header>
      {(!!localStorage.getItem('refresh_token') && !toLogin) ? <UserLogo /> : <button onClick={() => setToLogin(true)} id={'toLogin'}>login</button>}
      {toLogin && <Redirect to='/login'> <Login /> </Redirect>}
    </header>
  )
};