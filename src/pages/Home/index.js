import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Categories from '../../components/Categories';

class Home extends Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <Categories />
      </div>
    );
  }
}

export default Home;
