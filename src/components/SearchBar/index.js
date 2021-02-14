import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleChange, handleSearch } = this.props;
    return (
      <form onSubmit={ (event) => event.preventDefault() }>
        <input
          data-testid="query-input"
          type="text"
          name="queryInput"
          placeholder="O que gostaria de pesquisar?"
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ handleSearch }
          data-testid="query-button"
        >
          Pesquisar

        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
