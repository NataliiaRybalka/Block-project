import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/header/Header';
import { Login } from './components/auth/Login';
import { Registration } from './components/auth/Registration';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
