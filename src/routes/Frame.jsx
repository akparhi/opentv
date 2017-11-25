import React from 'react';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import palette from '../utils/palette';
import Search from '../containers/Search';

const styles = theme => ({
  root: {
    width: '100%'
  },
  toolbar: {
    color: palette.primary
  },
  brandTitle: {
    margin: `0 ${theme.spacing.unit}px 0 ${theme.spacing.unit}px`
  },
  button: {
    margin: theme.spacing.unit
  },
  children: theme.mixins.gutters({
    width: '100%',
    paddingTop: theme.spacing.unit * 3
  })
});

const Frame = ({ children, classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <Typography type="title" color="inherit" className={classes.brandTitle}>
          OMDB
        </Typography>
        <Search />

        <Button color="inherit" className={classes.button}>
          Sign In
        </Button>
      </Toolbar>
    </AppBar>

    <div className={classes.children}>{children}</div>
  </div>
);

export default withStyles(styles)(Frame);
