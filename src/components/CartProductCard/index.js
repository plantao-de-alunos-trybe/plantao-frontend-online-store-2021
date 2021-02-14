import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class CartProductCard extends Component {
  render() {
    const { product: { title, id }, quantity, increaseQuantity,
      decreaseQuantity } = this.props;

    return (
      <div className={ styles.cartProductCard }>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>

        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => decreaseQuantity(id) }
        >
          Decrementar
        </button>

        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => increaseQuantity(id) }
        >
          Incrementar
        </button>
      </div>
    );
  }
}

CartProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default CartProductCard;
