import React from 'react';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MenuItem from 'material-ui/Menu/MenuItem';
import { CardMedia } from 'material-ui/Card';

import palette from '../../utils/palette';

const IMG_PATH = 'https://image.tmdb.org/t/p/';

const styles = theme => ({
  root: {
    height: 'auto'
  },
  cover: {
    minWidth: 92,
    height: 138
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2
  },
  description: {
    whiteSpace: 'normal'
  }
});

const Suggestion = ({ classes, suggestion, query, isHighlighted }) => {
  const matches = match(suggestion.original_name, query);
  const parts = parse(suggestion.original_name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div" className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`${IMG_PATH}w92${suggestion.poster_path}`}
        title="Live from space album cover"
      />
      <div className={classes.content}>
        <Typography type="headline">
          {parts.map((part, index) => {
            return part.highlight ? (
              <span
                key={index}
                style={{ fontWeight: 500, color: palette.primary }}
              >
                {part.text}
              </span>
            ) : (
              <strong key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>
            );
          })}
        </Typography>
        <Typography type="subheading" color="secondary">
          Mac Miller
        </Typography>
        <Typography paragraph color="secondary" className={classes.description}>
          {suggestion.overview.substr(0, 300)}
        </Typography>
      </div>
    </MenuItem>
  );
};

export default withStyles(styles)(Suggestion);
