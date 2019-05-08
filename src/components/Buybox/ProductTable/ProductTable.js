import React, { Component } from "react";
import { Table, Select } from "antd";

import { Product, Label, ProgressBar, Blank } from "components/common";
import { SampleProduct, SampleFlag } from "assets";

import "./styles.css";

const { Option } = Select;



class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceDiffOption: "amz_lowest"
    };
  }

  handleChange = value => {
    this.setState({
      priceDiffOption: value
    })
  };
  render() {
    const columns = [
      {
        title: "Product Name",
        dataIndex: "productItem",
        render: val => {
          return {
            children: (
              <Product
                name={val}
                product_img={SampleProduct}
                flag_img={SampleFlag}
                code="BH234E"
              />
            )
          };
        }
      },
      {
        title: "Has BuyBox",
        dataIndex: "hasBuyBox",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.hasBuyBox.length - b.hasBuyBox.length,
        render: val => {
          return {
            children:
              val === "Yes" ? (
                <Label primary>{val}</Label>
              ) : (
                <Label danger>{val}</Label>
              )
          };
        }
      },
      {
        title: "Stock",
        dataIndex: "stock",
        sorter: (a, b) => a.stock - b.stock,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children:
              val !== 0 ? <Label primary>{val}</Label> : <Label danger>{val}</Label>
          };
        }
      },
      {
        title: "BuyBox Winrate",
        dataIndex: "winRate",
        sorter: (a, b) => a.winRate - b.winRate,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <ProgressBar rate={val} /> : <Blank />
          };
        }
      },
      {
        title: "Amz Rank",
        dataIndex: "amzRank",
        sorter: (a, b) => a.amzRank - b.amzRank,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <Label>{val}</Label> : <Blank />
          };
        }
      },
      {
        title: "User Rank",
        dataIndex: "userRank",
        sorter: (a, b) => a.userRank - b.userRank,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <Label>{val}</Label> : <Blank />
          };
        }
      },
      {
        title: "# Sellers",
        dataIndex: "sellers",
        sorter: (a, b) => a.sellers - b.sellers,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <Label>{val}</Label> : <Blank />
          };
        }
      },
      {
        title: "User Price",
        dataIndex: "userPrice",
        sorter: (a, b) => a.userPrice - b.userPrice,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <Label>${val}</Label> : <Blank />
          };
        }
      },
      {
        title: "Amz Price",
        dataIndex: "amzPrice",
        sorter: (a, b) => a.amzPrice - b.amzPrice,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <Label>${val}</Label> : <Blank />
          };
        }
      },
      {
        title: "Lowest Price",
        dataIndex: "lowestPrice",
        sorter: (a, b) => a.lowestPrice - b.lowestPrice,
        sortDirections: ["descend", "ascend"],
        render: val => {
          return {
            children: !!val ? <Label>${val}</Label> : <Blank />
          };
        }
      },
      {
        title: (
          <div className="priceDiff-tHead">
            <p>Price Difference</p>
            <Select
              defaultValue="AMZ v Lowest Price"
              style={{ width: 180 }}
              onChange={this.handleChange}
            >
              <Option value="amz_lowest">AMZ v Lowest Price</Option>
              <Option value="amz_user">AMZ v User Price</Option>
            </Select>
          </div>
        ),
        dataIndex: "priceDifference",
        render: (val, row) => {
          const { priceDiffOption } = this.state;
          let renderVal;
          if(priceDiffOption === 'amz_lowest'){
            renderVal = row.amzPrice - row.lowestPrice;
          } else {
            renderVal = row.amzPrice - row.userPrice;
          } 
          return {
            children: !!renderVal ? <Label>${renderVal}</Label> : <Blank />
          };
        }
      }
    ];
    const { data } = this.props;
    return (
      <Table
        className="product-table-container"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    );
  }
}

export default ProductTable;
