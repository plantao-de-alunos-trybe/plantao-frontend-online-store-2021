import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div className={ styles.productCard } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
