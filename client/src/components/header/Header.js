import { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Header.css';
import { Login } from '../auth/Login';
import { UserPowerbank } from '../block/UserPowerbank';

export const Header = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <header>
      {!localStorage.getItem('refresh_token')
        ?<button onClick={() => setToLogin(true)} id={'toLogin'}>login</button>
        : <div id={'takenBlocks'}>
            <UserPowerbank />
          </div>
      }

      {toLogin && <Redirect to='/login'> <Login /> </Redirect>}
    </header>
  )
};