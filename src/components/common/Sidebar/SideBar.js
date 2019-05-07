import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

import "./Sidebar.css";

const SideBar = (props) => {
  
  const passIsActive = (navItem) => {
    const { location: { pathname } } = props;
    const currentPath = pathname.split('/')[1] || '';
    if (navItem === currentPath || navItem === 'buybox' && currentPath === '') {
      return 'active';
    }
    return '';
  }
  return (
    <div className="sidebar-container">
      <a className="logo" href="/">
        <img src={Logo} alt="logo" />
      </a>
      <div className="sidebar-menu__container">
        <div className="menu-list">
          <Link className={`menu-item ${passIsActive('dashboard')}`} to="/dashboard">
            <img src={DashboardIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('buybox')}`} to="/buybox">
            <img src={MonitorIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('analytics')}`} to="/analytics">
            <img src={AnalyticsIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('research')}`} to="/research">
            <img src={ResearchIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('review')}`} to="/review">
            <img src={ReviewIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('production')}`} to="/production">
            <img src={ProductIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('inventory')}`} to="/inventory">
            <img src={InventoryIcon} alt="logo" />
          </Link>
          <Link className={`menu-item ${passIsActive('advertising')}`} to="/advertising">
            <img src={AdvertisingIcon} alt="logo" />
          </Link>
        </div>
        <div className="menu-list">
          <Link className={`menu-item ${passIsActive('settings')}`} to="/settings">
            <img src={SettingsIcon} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SideBar);
