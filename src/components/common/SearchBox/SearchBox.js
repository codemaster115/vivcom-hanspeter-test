import React, { Component } from 'react';
import { Input } from 'antd';

import './SearchBox.css';

const { Search } = Input;

class SearchBox extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  onSearch = (val) => {
    
  };

  render () {

    return (
      <Search
        key="search"
        placeholder="Search"
        onSearch={value => this.onSearch(value)}
        onChange={this.onChange}
        className="search-box"
      />
    )
  }
}

export default SearchBox;
