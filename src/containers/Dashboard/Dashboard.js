import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="dashboard"
        />
        <div>
          Dashboard content
        </div>
      </div>
    )
  }
}
