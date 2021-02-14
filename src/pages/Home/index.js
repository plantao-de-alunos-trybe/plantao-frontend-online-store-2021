import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Categories from '../../components/Categories';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

class Home extends Component {
  render() {
    const { handleChange, handleSearch, handleSearchCategory, results } = this.props;
    return (
      <div>
        <SearchBar
          handleChange={ handleChange }
          handleSearch={ handleSearch }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <Categories handleSearchCategory={ handleSearchCategory } />
        <SearchResults results={ results } />
      </div>
    );
  }
}

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSearchCategory: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
