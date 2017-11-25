import React from 'react';
import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { denormalize } from 'normalizr';

import withStyles from 'material-ui/styles/withStyles';
import Autosuggest from 'react-autosuggest';
import Paper from 'material-ui/Paper';

import Schema from '../schemas';
import { searchTV } from '../actions/search';
import SearchBox from '../components/Search/SearchBox';
import Suggestion from '../components/Search/Suggestion';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    margin: `0 ${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px`
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: 0,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
});

class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: []
  };

  renderInput = inputProps => <SearchBox {...inputProps} />;

  renderSuggestion = (suggestion, { query, isHighlighted }) => (
    <Suggestion
      suggestion={suggestion}
      query={query}
      isHighlighted={isHighlighted}
    />
  );

  renderSuggestionsContainer = ({ containerProps, children }) => (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );

  getSuggestions = value =>
    this.props.searchTV(value).then(() =>
      this.setState({
        suggestions: this.props.suggestions.results.slice(0, 5)
      })
    );

  getSuggestionValue = suggestion => suggestion.original_name;

  handleSuggestionsFetchRequested = ({ value }) => this.getSuggestions(value);

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderInputComponent={this.renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          autoFocus: true,
          placeholder: 'Search a TV Show',
          value: this.state.value,
          onChange: this.handleChange
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  suggestions: denormalize(
    { results: state.tvShows },
    Schema.TV_SHOWS_SEARCH,
    state.entities
  )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchTV: query => searchTV(query)
    },
    dispatch
  );

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(IntegrationAutosuggest);
