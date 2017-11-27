import React from 'react';

import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({});

const Loader = ({ classes }) => {
  return <div className={classes.root}>Loading</div>;
};

export default withStyles(styles)(Loader);
