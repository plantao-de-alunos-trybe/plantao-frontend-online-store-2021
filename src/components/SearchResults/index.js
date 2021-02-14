import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard';

import styles from './styles.module.css';

class SearchResults extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className={ styles.searchResults }>
        { results.map((product) => (
          <ProductCard key={ product.id } product={ product } />)) }
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
