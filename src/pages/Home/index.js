import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Categories from '../../components/Categories';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import CartButton from '../../components/CartButton';

class Home extends Component {
  render() {
    const { handleChange, handleSearch, handleSearchCategory,
      handleAddToCart, results } = this.props;
    return (
      <div>
        <SearchBar
          handleChange={ handleChange }
          handleSearch={ handleSearch }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CartButton />
        <Categories handleSearchCategory={ handleSearchCategory } />
        <SearchResults handleAddToCart={ handleAddToCart } results={ results } />
      </div>
    );
  }
}

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSearchCategory: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
