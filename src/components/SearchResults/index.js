import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard';
import AddToCartButton from '../AddToCartButton';

import styles from './styles.module.css';

class SearchResults extends Component {
  render() {
    const { handleAddToCart, results } = this.props;
    return (
      <div className={ styles.searchResults }>
        { results.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
            handleAddToCart={ handleAddToCart }
          >
            <AddToCartButton
              data-testid="product-add-to-cart"
              handleAddToCart={ handleAddToCart }
              id={ product.id }
            />
          </ProductCard>
        )) }
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default SearchResults;
