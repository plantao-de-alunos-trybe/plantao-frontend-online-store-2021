import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
    );
  }
}

export default CartButton;
