import React, { Component } from 'react';

import './Navbar.css';
import {
  BellIcon,
} from 'assets';

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-header">
        <div className="nav-header__notification">
          <img src={BellIcon} alt="logo" />
        </div>
        <div className="nav-header__username">
          <span>Customer Name</span>
        </div>
      </div>
    )
  }
}
