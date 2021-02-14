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
    const { cart, increaseQuantity, decreaseQuantity } = this.props;
    return (
      Object.values(cart)
        // .sort(({ product: { id: idA } }, { product: { id: idB } }) => (
        //   idA.localeCompare(idB)))
        .map(({ product, quantity }) => (
          <CartProductCard
            key={ product.id }
            product={ product }
            quantity={ quantity }
            { ...{ increaseQuantity, decreaseQuantity } }
          />))
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
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default Cart;
