import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Header.css';
import { Login } from '../auth/Login';
import { User } from '../user/User';

export const Header = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <header>
      <button onClick={() => setToLogin(true)} id={'toLogin'} className={!!localStorage.getItem('refresh_token') ? 'notVisible' : ''}>login</button>
      {toLogin && <Redirect to='/login'> <Login /> </Redirect>}

      <div id={'takenBlocks'}>
        <User />
      </div>
    </header>
  )
};