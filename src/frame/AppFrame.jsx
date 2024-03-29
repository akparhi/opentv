import React from 'react';

import withStyles from 'material-ui/styles/withStyles';
import Route from 'react-router-dom/Route';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import palette from '../utils/palette';
import Search from '../containers/Search';

import asyncComponent from '../utils/AsyncComponent';

const Home = asyncComponent(() => import('../pages/Home'));
const Show = asyncComponent(() => import('../pages/Show'));

const styles = theme => ({
  root: {
    width: '100%'
  },
  toolbar: {
    color: palette.primary
  },
  brandTitle: {
    margin: `0 ${theme.spacing.unit}px`
  },
  button: {
    margin: theme.spacing.unit
  },
  page: {
    width: '100%'
  }
});

const AppFrame = ({ classes }) => (
  <div className={classes.root}>
    <Toolbar className={classes.toolbar}>
      <Typography type="title" color="inherit" className={classes.brandTitle}>
        OMSE
      </Typography>
      <Search />

      <Button color="inherit" className={classes.button}>
        Sign In
      </Button>
    </Toolbar>

    <div className={classes.page}>
      <Route exact path="/" component={Home} />
      <Route exact path="/show/:showId" component={Show} />
    </div>
  </div>
);

export default withStyles(styles)(AppFrame);
