import React, { Component } from "react";

import {
  Logo,
  DashboardIcon,
  MonitorIcon,
  AnalyticsIcon,
  ResearchIcon,
  ReviewIcon,
  ProductIcon,
  InventoryIcon,
  AdvertisingIcon,
  SettingsIcon
} from "assets";

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
          <div className="menu-item">
            <img src={InventoryIcon} alt="logo" />
          </div>
          <div className="menu-item">
            <img src={AdvertisingIcon} alt="logo" />
          </div>
        </div>
        <div className="menu-bottom">
          <div className="menu-item">
            <img src={SettingsIcon} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
