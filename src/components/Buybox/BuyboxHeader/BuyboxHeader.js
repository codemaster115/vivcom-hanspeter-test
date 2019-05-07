import React, { Component } from 'react';
import './BuyboxHeader.css';
import { Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

class BuyboxHeader extends Component {
  render() {
    const { summaryOption } = this.props;
    return (
      <div className="header-container">
        <div>
          <span>
            {summaryOption==="product"? 'Buybox Tracking': 'Buybox Sellers'}
          </span>
        </div>
        <div className="date-box">
          <RangePicker />
          <div className="date-box-options">
            <Button>D</Button>
            <Button>M</Button>
            <Button>W</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default BuyboxHeader;