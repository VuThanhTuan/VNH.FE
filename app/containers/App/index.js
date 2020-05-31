/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import ClientLayout from '../Client/ClientLayout';
import GlobalStyle from '../../global-styles';
import them from './appTheme';
import Admin from '../Admin/AdminLayout';

export default function App() {
  return (
    <ThemeProvider theme={them}>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={ClientLayout} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </ThemeProvider>
  );
}
