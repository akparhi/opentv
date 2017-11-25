import React from 'react';

import MenuItem from 'material-ui/Menu/MenuItem';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import palette from '../../utils/palette';

const Suggestion = ({ suggestion, query, isHighlighted }) => {
  const matches = match(suggestion.original_name, query);
  const parts = parse(suggestion.original_name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
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
      </div>
    </MenuItem>
  );
};

export default Suggestion;
