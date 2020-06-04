import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Logged from './components/beranda-login/headerLogin';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>

    <Router>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/logged" component={Logged} />
      </Switch>
    </Router>

  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
