import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class ProductManagement extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="production"
        />
        <div>
          Product Content
        </div>
      </div>
    )
  }
}
