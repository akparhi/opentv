import React from 'react';

import withStyles from 'material-ui/styles/withStyles';
import SearchIcon from 'material-ui-icons/Search';
import { fade } from 'material-ui/styles/colorManipulator';

const styles = theme => ({
  wrapper: {
    position: 'relative',
    flex: 1,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25)
    }
  },
  search: {
    width: theme.spacing.unit * 6,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 6}px ${theme
      .spacing.unit + 1}px ${theme.spacing.unit * 6}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0,
    color: 'inherit',
    width: `calc(100% - ${theme.spacing.unit * 12}px)`,
    '&:focus': {
      outline: 0
    }
  }
});

const SearchBox = ({ classes, ...rest }) => (
  <form className={classes.wrapper}>
    <div className={classes.search}>
      <SearchIcon />
    </div>
    <input className={classes.input} {...rest} />
  </form>
);

export default withStyles(styles)(SearchBox);
