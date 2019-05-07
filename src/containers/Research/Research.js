import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Research extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="research"
        />
        <div>
          Research Content
        </div>
      </div>
    )
  }
}
