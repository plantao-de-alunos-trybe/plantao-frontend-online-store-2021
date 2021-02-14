import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { id, handleAddToCart, ...props } = this.props;
    return (
      <button
        type="button"
        onClick={ () => handleAddToCart(id) }
        { ...props }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default AddToCartButton;
