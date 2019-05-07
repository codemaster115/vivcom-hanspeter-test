import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Advertising extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="advertising"
        />
        <div>
          Advertising Content
        </div>
      </div>
    )
  }
}
