import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { ArrowIcon } from 'assets';
import './CollapsibleSider.css';

import { routeURL } from 'constants/RouteConst';

class CollapsibleSider extends Component {
  static propTypes = {
    selectedOption: PropTypes.string,
    siderContent: PropTypes.node,
    siderName: PropTypes.string,
  }

  static defaultProps = {
    selectedOption: '',
    siderContent: '',
    siderName: '',
  }

  constructor(props) {
    super(props);

    this.state = {
       openSider: false,
    }

  }

  onCloseSidebar = () => {
    this.setState({
      openSider: false
    })
  };

  onOpenSidebar = () => {
    this.setState({
      openSider: true
    })
  }

  render() {
    const { selectedOption, siderName, siderContent } = this.props;

    const { openSider } = this.state;
    if (!openSider) {
      return (
        <div className="collapsible-sidebar__close">
          <div>
            {routeURL.map((itemName, key) => (
              <div
                role="button"
                tabIndex={key}
                dataindex={key}
                className={`collabsible-sidebar-btn__open ${selectedOption === itemName ? '' : 'hidden'}`}
                onClick={this.onOpenSidebar}
                key={itemName}
              />
            ))}
          </div>
        </div>
      )
    }
    return (
      <div className="collapsible-sidebar__open">
        <div className="flex-between-wrapper">
          <span>{siderName}</span>
          <div
            className="collabsible-sidebar-btn__close"
            onClick={this.onCloseSidebar}
            role="button"
            tabIndex={-1}
          >
            <img src={ArrowIcon} alt="arrow" />
          </div>
        </div>
        <div className="collapsible-sidebar-content">
          {siderContent}
        </div>
      </div>
    )
  }
}

export default withRouter(CollapsibleSider);
