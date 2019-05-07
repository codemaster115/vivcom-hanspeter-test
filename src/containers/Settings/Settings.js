import React, { Component } from 'react';
import CollapsibleSider from 'components/common/CollapsibleSider';

export default class Settings extends Component {
  render() {
    return (
      <div className="main-container">
        <CollapsibleSider 
          selectedOption="settings"
        />
        <div>
          Settings Content
        </div>
      </div>
    )
  }
}
