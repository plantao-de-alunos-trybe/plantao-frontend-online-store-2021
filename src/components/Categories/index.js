import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCategories } from '../../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const { handleSearchCategory } = this.props;

    return (
      categories.map(({ name, id }) => (
        <input
          type="button"
          key={ id }
          data-productid={ id }
          data-testid="category"
          value={ name }
          onClick={ handleSearchCategory }
        />
      ))
    );
  }
}

Categories.propTypes = {
  handleSearchCategory: PropTypes.func.isRequired,
};

export default Categories;
