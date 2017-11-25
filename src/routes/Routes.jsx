import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Frame from './Frame';
import asyncComponent from './AsyncComponent';

const Home = asyncComponent(() => import('../pages/Home'));

const Routes = props => (
  <Frame location={props.location}>
    <div className="routes">
      <Route exact path="/" component={Home} />
    </div>
  </Frame>
);

export default withRouter(Routes);
