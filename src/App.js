import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

import { getProductsFromCategoryAndQuery } from './services/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryInput: '',
      results: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchCategory = this.handleSearchCategory.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSearch() {
    const { queryInput } = this.state;
    getProductsFromCategoryAndQuery('', queryInput).then(({ results }) => (
      this.setState({ results })));
  }

  handleSearchCategory({ target: { dataset: { productid } } }) {
    const { queryInput } = this.state;
    getProductsFromCategoryAndQuery(productid, queryInput).then(({ results }) => (
      this.setState({ results })));
  }

  renderHome() {
    const { results } = this.state;
    return (
      <Route
        path="/"
        render={ (props) => (
          <Home
            { ...props }
            results={ results }
            handleChange={ this.handleChange }
            handleSearch={ this.handleSearch }
            handleSearchCategory={ this.handleSearchCategory }
          />
        ) }
      />
    );
  }

  renderProductDetails() {
    const { results } = this.state;
    return (
      <Route
        path="/products/:id"
        render={ (props) => (
          <ProductDetails
            { ...props }
            results={ results }
          />) }
      />
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/cart" component={ Cart } />
          { this.renderProductDetails() }
          { this.renderHome() }
        </Switch>
      </Router>
    );
  }
}

export default App;
