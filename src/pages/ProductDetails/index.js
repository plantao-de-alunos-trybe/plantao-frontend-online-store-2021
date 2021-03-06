import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../../components/ProductCard';
import CartButton from '../../components/CartButton';
import AddToCartButton from '../../components/AddToCartButton';

class ProductDetails extends Component {
  render() {
    const { match: { params: { id } }, results, handleAddToCart } = this.props;
    const selectedProduct = results.find((product) => product.id === id);
    return (
      <div>
        <ProductCard
          product={ selectedProduct }
          showDetailsLink={ false }
          handleAddToCart={ handleAddToCart }
        >
          <AddToCartButton
            data-testid="product-detail-add-to-cart"
            handleAddToCart={ handleAddToCart }
            id={ id }
          />
        </ProductCard>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
