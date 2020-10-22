import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import clientRoutes from './routes';
import HomePage from '../Home';
import SideBar from '../SideBar/Sidebar';

const switchRoutes = (
  <Switch>
    {clientRoutes.map((prop, key) => (
      <Route path={prop.path} component={prop.component} key={key} />
    ))}
    {/* <Redirect from="/" to="/trang-chu" /> */}
  </Switch>
);

function ClientLayout() {
  return (
    <div>
      {/* Side Bar */}
      <SideBar />
      <div>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>

      {/* Footer */}
    </div>
  );
}

export default ClientLayout;
