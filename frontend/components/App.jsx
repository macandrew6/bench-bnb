import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';
import BenchShowContainer from './bench_show/bench_show_container';

import { AuthRoute, ProtectedRoute } from '../util/routes_util';

const App = () => (
  <div>
    <header className="nav-bar">
      <h1 className="app-title">Bench BnB</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
