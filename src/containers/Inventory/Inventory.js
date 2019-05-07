import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Inventory extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="inventory"
        />
        <div>
          Inventory Content
        </div>
      </div>
    )
  }
}
