import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Logged from './components/beranda-login/headerLogin';
import ProfileAndPayment from './components/beranda-login/profileAndPayment';
import AppAdmin from './components/beranda-admin/main';
import Detail from './components/beranda-mdetail/detail';
import AddEpisode from './components/beranda-mdetail/x-add_episode';
import AddFilm from './components/beranda-admin/x-add_film';

import { Provider } from "react-redux";
import store from "./components/redux/store";

import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <>
    <Provider store={store}>
      <Router>

        <Switch>

          <Route exact path="/" component={App} />
          <Route path="/logged" component={Logged} />
          <Route path="/logpay/:type/:status" component={ProfileAndPayment} />
          <Route path="/admin/:user" component={AppAdmin} />

          <Route path="/detail/:id/:genre/:status" component={Detail} />
          <Route path="/add_episode/:id/:genre/:status" component={AddEpisode} />
          <Route path="/add_film/:status/:id" component={AddFilm} />


        </Switch>
      </Router>
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
