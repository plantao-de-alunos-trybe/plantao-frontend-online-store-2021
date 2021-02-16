import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id },
      showDetailsLink, children } = this.props;

    const detailsLink = (
      <Link
        to={ `/products/${id}` }
        data-testid="product-detail-link"
      >
        Mostrar detalhes
      </Link>
    );

    return (
      <div className={ styles.productCard } data-testid="product">
        <img className={ styles.productCardImage } src={ thumbnail.replace('I', 'O') } alt={ title } />
        <p data-testid="product-detail-name">{ title }</p>
        <p>
          R$
          { price }
        </p>
        { showDetailsLink && detailsLink }
        { children }
      </div>
    );
  }
}

ProductCard.defaultProps = {
  showDetailsLink: true,
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  showDetailsLink: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default ProductCard;
