import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../../containers/Auth';
import Getaways from '../../containers/Getaways';
import GetawaysDetail from '../../containers/GetawaysDetail';
import styles from '../../styles/app.css';

export default function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={Getaways} />
          <Route exact path="/auth" component={Auth} />
          <Route path="/:id" component={GetawaysDetail} />
        </Switch>
      </Router>
    </div>
  );
}
