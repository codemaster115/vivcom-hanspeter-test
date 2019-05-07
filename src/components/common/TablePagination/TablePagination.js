import React, { Component } from 'react';
import { Pagination } from 'antd';

import './TablePagination.css';



class TablePagination extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 1
    }
  }

  onChange = (pageNum) =>{
    this.setState({
      currentPage: pageNum
    })
    console.log('currentpage---->>>', pageNum)
  }

  render() {
    const { dataSize } = this.props;
    return (
      <div>
        <Pagination size="small" total={dataSize} pageSize={7} onChange={this.onChange} />
      </div>
    )
  }
}

export default TablePagination;