import React from 'react';
import { Radio } from 'antd';
import SearchBox from 'components/common/SearchBox';


import './BuyboxSider.css';

const RadioGroup = Radio.Group;

export default class BuyboxSider extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div className="buybox-sider-container">
        <SearchBox />
        <RadioGroup className="radio-wrapper" onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>All Products</Radio>
          <Radio value={2}>Dog Products</Radio>
          <Radio value={3}>Cat Products</Radio>
          <Radio value={4}>Bird Products</Radio>
          <Radio value={5}>Rodent Products</Radio>
          <Radio value={6}>Reptile Products</Radio>
        </RadioGroup>
      </div>
    );
  }
}
