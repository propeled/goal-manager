import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './pages/App/App';
import MainPage from './pages/MainPage/MainPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function Routes() {
  return (<Route path="/" component={App}>
    <Route path="/other" component={MainPage} />
  </Route>)
};
