import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Analytics extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="analytics"
        />
        <div>
          Analytics Content
        </div>
      </div>
    )
  }
}
