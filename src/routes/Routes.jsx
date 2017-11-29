import React from 'react';
import Route from 'react-router-dom/Route';
import withRouter from 'react-router-dom/withRouter';

import Frame from './Frame';
import asyncComponent from './AsyncComponent';

const Home = asyncComponent(() => import('../pages/Home'));
const Show = asyncComponent(() => import('../pages/Show'));

const Routes = props => (
  <Frame location={props.location}>
    <div className="routes">
      <Route exact path="/" component={Home} />
      <Route exact path="/show/:showId" component={Show} />
    </div>
  </Frame>
);

export default withRouter(Routes);
