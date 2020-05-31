import React from 'react';
import clientRoutes from './routes';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from '../Home';

const switchRoutes = (
  <Switch>
    {clientRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
    })}
    {/* <Redirect from="/" to="/trang-chu" /> */}
  </Switch>
);

function ClientLayout() {
  return (
    <div>
      {/* Side Bar */}
      <h1>Test</h1>
      <div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      </div>
    </div>
  );
}

export default ClientLayout;
