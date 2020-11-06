import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faqs';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}
