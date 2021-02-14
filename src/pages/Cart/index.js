import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CartProductCard from '../../components/CartProductCard';

class Cart extends Component {
  renderEmptyCartMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  renderCart() {
    const { cart } = this.props;
    return (
      Object.values(cart).map((product) => (
        <CartProductCard key={ product.id } product={ product } />))
    );
  }

  render() {
    const { cart } = this.props;
    return (
      Object.values(cart).length ? this.renderCart() : this.renderEmptyCartMessage()
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Cart;
