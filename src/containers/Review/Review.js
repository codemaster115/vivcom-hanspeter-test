import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Review extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="review"
        />
        <div>
          Review Content
        </div>
      </div>
    )
  }
}
