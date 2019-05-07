import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SideBar } from 'components';
import {
  Advertising,
  Buybox,
  Anaytics,
  ProductManagment,
  Dashboard,
  Inventory,
  Research,
  Review,
  Settings
} from 'containers';
import Navbar from 'components/common/Navbar';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page">
          <div className="page-navbar">
            <SideBar />
          </div>
          <div className="content">
            <Navbar />
            <Switch>
              <Route path="/" component={Buybox} exact />
              <Route path="/buybox" component={Buybox} exact />
              <Route path="/dashboard" component={Dashboard} exact />
              <Route path="/analytics" component={Anaytics} exact />
              <Route path="/research" component={Research} exact />
              <Route path="/review" component={Review} exact />
              <Route path="/production" component={ProductManagment} exact />
              <Route path="/inventory" component={Inventory} exact />
              <Route path="/advertising" component={Advertising} exact />
              <Route path="/settings" component={Settings} exact />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
