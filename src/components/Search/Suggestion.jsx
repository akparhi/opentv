import React from 'react';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import MenuItem from 'material-ui/Menu/MenuItem';
import StarIcon from 'material-ui-icons/Star';

import palette from '../../utils/palette';
import TMDBImg from '../utils/TMDBImg';

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
  },
  star: {
    width: '1rem',
    height: '1rem',
    position: 'relative',
    top: 2
  }
});

const Suggestion = ({ classes, suggestion, query, isHighlighted }) => {
  const matches = match(suggestion.original_name, query);
  const parts = parse(suggestion.original_name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div" className={classes.root}>
      <TMDBImg
        className={classes.cover}
        path="w92"
        imgPath={suggestion.poster_path}
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
              <span key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            );
          })}{' '}
          <span style={{ fontWeight: 500 }}>
            {suggestion.first_air_date
              ? `(${suggestion.first_air_date.slice(0, 4)})`
              : null}
          </span>
        </Typography>
        <Typography type="subheading" color="secondary">
          <StarIcon className={classes.star} />{' '}
          {(suggestion.vote_average || 0.0).toFixed(1)}
        </Typography>
        <Typography paragraph color="secondary" className={classes.description}>
          {suggestion.overview.substr(0, 300)}
        </Typography>
      </div>
    </MenuItem>
  );
};

export default withStyles(styles)(Suggestion);
