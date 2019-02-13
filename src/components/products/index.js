import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Article from '../article';
import './style.scss';

require('es6-promise').polyfill(); // ie11

class Products extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    const url = process.env.PUBLIC_URL + '/data.json';
    fetch(url)
      .then(blob => blob.json())
      .then(data => {
        const temp = [...data].map((item, index) => {
          return { selected: false, id: index, ...item };
        });
        return temp;
      })
      .then(data => {
        this.setState({ data: [...data] });
      });
  }

  onSelectionChange = (index) => {
    const data = [...this.state.data];
    data[index].selected = !data[index].selected;
    this.setState({data: data})
  }

  renderList = () => {
    const array = [...this.state.data];
    return array.map((item, index) => (
      <li key={index} className="products__item">
        <Article data={item} onSelectionChange={this.onSelectionChange}/>
      </li>
    ));
  };

  render() {
    return (
      <div className="products__wrapper">
        <h2 className="products__title">Ты сегодня покормил кота?</h2>
        <ul className="products__list">{this.renderList()}</ul>
      </div>
    );
  }
}

export default Products;
