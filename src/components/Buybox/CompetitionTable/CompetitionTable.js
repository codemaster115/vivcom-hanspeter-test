import React, { Component } from 'react';
import { Table } from 'antd';
import { Label, ProgressBar, Blank } from 'components/common';

import './CompetitionTable.css';

const columns = [
  {
    title: 'Seller Name',
    dataIndex: 'sellerName',
    width: '50%',
    render: val => {
      return {
        children: val,
      };
    },
  },
  {
    title: 'Number of Products',
    dataIndex: 'productNum',
    sorter: (a, b) => a.productNum - b.productNum,
    sortDirections: ['descend', 'ascend'],
    render: val => {
      return {
        children: val >= 5 ? <Label primary>{val}</Label> : <Label danger>{val}</Label>,
      };
    },
  },
  {
    title: 'Avg Price',
    dataIndex: 'avgPrice',
    sorter: (a, b) => a.avgPrice - b.avgPrice,
    sortDirections: ['descend', 'ascend'],
    render: val => {
      return {
        children: val > 0 ? <Label primary>{val}%</Label> : <Label danger>{val}%</Label>,
      };
    },
  },
  {
    title: 'Selection Share',
    dataIndex: 'selectionShare',
    sorter: (a, b) => a.selectionShare - b.selectionShare,
    sortDirections: ['descend', 'ascend'],
    render: val => {
      return {
        children: !!val ? <ProgressBar rate={val} /> : <Blank />,
      };
    },
  },
  {
    title: 'Buybox Winrate',
    dataIndex: 'buyboxWinrate',
    sorter: (a, b) => a.buyboxWinrate - b.buyboxWinrate,
    sortDirections: ['descend', 'ascend'],
    render: val => {
      return {
        children: !!val ? <ProgressBar rate={val} /> : <Blank />,
      };
    },
  },
];

class CompetitionTable extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default CompetitionTable;
