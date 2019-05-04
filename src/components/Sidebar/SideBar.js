import React, { Component } from "react";
import Logo from "assets/images/logo.svg";
import "./styles.css";

class SideBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="menu-list">
          <div className="menu-item">
          
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
