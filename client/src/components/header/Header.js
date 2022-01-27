import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Header.css';
import { Login } from '../auth/Login';

export const Header = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <header>
      <button onClick={() => setToLogin(true)} id={'toLogin'}>login</button>
      {toLogin && <Redirect to='/login'> <Login /> </Redirect>}
    </header>
  )
};