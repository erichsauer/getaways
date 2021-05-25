import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../containers/Auth';
import Getaways from '../../containers/Getaways';
import GetawaysDetail from '../../containers/GetawaysDetail';
import styles from '../../styles/app.css';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

export default function App() {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    setUser(getFromLocalStorage());
    setToken(true);
  }, []);

  const handleRegistration = (e) => {
    e.preventDefault();
    setUser({
      test: 'user',
      password: 'pass',
      name: 'name',
      spam: true,
    });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
  };

  const handleLogOut = () => {
    saveToLocalStorage('');
    setUser('');
  };

  return (
    <div className={styles.App}>
      <Router>
        <Auth
          user={user}
          token={token}
          onRegistration={handleRegistration}
          onLogIn={handleLogIn}
          onLogOut={handleLogOut}
        />
        <Switch>
          <Route exact path="/" component={Getaways} />
          <Route path="/:id" component={GetawaysDetail} />
        </Switch>
      </Router>
    </div>
  );
}
