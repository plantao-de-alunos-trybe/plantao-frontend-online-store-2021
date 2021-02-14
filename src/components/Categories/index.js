import React, { Component } from 'react';

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
    return (
      <ul>
        { categories.map(({ name, id }) => (
          <li
            key={ id }
            data-testid="category"
          >
            { name }
          </li>)) }
      </ul>
    );
  }
}

export default Categories;
