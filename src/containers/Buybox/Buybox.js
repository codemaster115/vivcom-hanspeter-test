import React, { Component } from 'react';
import { Select } from 'antd';

import { CollapsibleSider } from 'components/common';
import { 
  BuyboxHeader,
  ChartBox,
  ProductTable,
  CompetitionTable,
  BuyboxSider
} from 'components/Buybox';

import './Buybox.css';

const PRODUCT_DATA = [
  {
    key: '1',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 0,
    winRate: 50,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '2',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'Yes',
    stock: 8,
    winRate: 100,
    userRank: 8,
    amzRank: 5,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '3',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 3,
    winRate: 30,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '4',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'Yes',
    stock: 0,
    winRate: 50,
    userRank: 2,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '5',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 0,
    winRate: 50,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '6',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 0,
    winRate: 50,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '7',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 0,
    winRate: 50,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '8',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'Yes',
    stock: 8,
    winRate: 100,
    userRank: 8,
    amzRank: 5,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '9',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 3,
    winRate: 30,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '10',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'Yes',
    stock: 0,
    winRate: 50,
    userRank: 2,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '11',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 0,
    winRate: 50,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  },
  {
    key: '12',
    productItem: 'Carlson Extra Wide Walk Through Pet Gate With Small Pet Door',
    hasBuyBox: 'No',
    stock: 0,
    winRate: 50,
    userRank: 8,
    sellers: 3,
    userPrice: 50,
    amzPrice: 200,
    lowestPrice: 45,
    priceDifference: 30,
  }
];

const COMPETITION_DATA = [
  {
    key: '1',
    sellerName: 'Supply Co.',
    productNum: 12,
    avgPrice: -1.45,
    selectionShare: 40,
    buyboxWinrate: 100,
  },
  {
    key: '2',
    sellerName: 'Supply Co.',
    productNum: 12,
    avgPrice: -1.45,
    selectionShare: 40,
    buyboxWinrate: 100,
  },
  {
    key: '3',
    sellerName: 'Supply Co.',
    productNum: 12,
    avgPrice: -1.45,
    selectionShare: 40,
    buyboxWinrate: 100,
  },
  {
    key: '4',
    sellerName: 'Supply Co.',
    productNum: 12,
    avgPrice: -1.45,
    selectionShare: 40,
    buyboxWinrate: 100,
  },
  {
    key: '5',
    sellerName: 'Supply Co.',
    productNum: 12,
    avgPrice: -1.45,
    selectionShare: 40,
    buyboxWinrate: 100,
  },
  {
    key: '6',
    sellerName: 'Supply Co.',
    productNum: 12,
    avgPrice: -1.45,
    selectionShare: 40,
    buyboxWinrate: 100,
  }
];



class Buybox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryOption: 'product',
      tableData: PRODUCT_DATA,
    };
  }

  handleChange = value => {
    this.setState({
      summaryOption: value,
    })
    if(value === "product"){
      this.setState({
        tableData: PRODUCT_DATA
      })
    } else {
      this.setState({
        tableData: COMPETITION_DATA
      })
    }
  }

  render() {
    const { Option } = Select;
    const { summaryOption, tableData } = this.state;
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="buybox"
          siderName="Product Categories"
          siderContent={<BuyboxSider />}
        />
        <div className="buybox-content">
          <BuyboxHeader summaryOption={summaryOption} />
          <ChartBox />
          <div className="table-container">
            <div className="control-bar">
              <div>
                <Select
                  defaultValue="Product Summary"
                  style={{ width: 180 }}
                  onChange={this.handleChange}
                >
                  <Option value="product">Product Summary</Option>
                  <Option value="competition">Competition Summary</Option>
                </Select>
              </div>
            </div>
            <div className="table">
              {summaryOption === 'product' ? (
                <ProductTable data={tableData} />
              ) : (
                <CompetitionTable data={tableData} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buybox;
