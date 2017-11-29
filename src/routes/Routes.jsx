import React from 'react';
import Route from 'react-router-dom/Route';
import withRouter from 'react-router-dom/withRouter';

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
