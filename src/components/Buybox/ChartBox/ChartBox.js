import React, { Component } from 'react';
import { ChartOne, ChartTwo } from 'assets';

import './ChartBox.css';

class ChartBox extends Component {
  render() {
    return (
      <div className="chartbox-container">
        <div>
          <img src={ChartOne} alt="chart-1" />
        </div>
        <div>
          <img src={ChartTwo} alt="chart-1" />
        </div>
      </div>
    )
  }
}

export default ChartBox;