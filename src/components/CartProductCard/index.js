import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartProductCard extends Component {
  render() {
    const { product: { title } } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default CartProductCard;
