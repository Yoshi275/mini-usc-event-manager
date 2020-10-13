import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import EventCards from './views/EventCards';
import CreateEvent from './views/CreateEvent'

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <br />
    <Switch>
      <Route path="/events" component={EventCards} />
      <Route path="/create" component={CreateEvent} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
