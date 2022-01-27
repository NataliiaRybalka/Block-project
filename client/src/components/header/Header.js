import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Header.css';
import { Login } from '../auth/Login';
import { User } from '../user/User';

export const Header = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <header>
      {(!!localStorage.getItem('refresh_token') && !toLogin) ? <User /> : <button onClick={() => setToLogin(true)} id={'toLogin'}>login</button>}
      {toLogin && <Redirect to='/login'> <Login /> </Redirect>}
    </header>
  )
};