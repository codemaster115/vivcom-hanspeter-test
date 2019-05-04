import React, { Component } from "react";

import Logo from "assets/images/logo.svg";
import DashboardIcon from "assets/images/dashboard.svg";
import MonitorIcon from "assets/images/monitor.svg";
import AnalyticsIcon from "assets/images/analytics.svg";
import ResearchIcon from "assets/images/research.svg";
import ReviewIcon from "assets/images/review.svg";
import ProductIcon from "assets/images/product.svg";

import "./styles.css";

class SideBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <img src={DashboardIcon} alt="logo" />
          </div>
          <div className="menu-item">
            <img src={MonitorIcon} alt="logo" />
          </div>
          <div className="menu-item">
            <img src={AnalyticsIcon} alt="logo" />
          </div>
          <div className="menu-item">
            <img src={ResearchIcon} alt="logo" />
          </div>
          <div className="menu-item">
            <img src={ReviewIcon} alt="logo" />
          </div>
          <div className="menu-item">
            <img src={ProductIcon} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
