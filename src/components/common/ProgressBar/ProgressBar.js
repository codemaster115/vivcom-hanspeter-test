import React from "react";
import PropTypes from "prop-types";

import { Progress } from "antd";
import { Label } from "components/common";


export default function ProgressBar(props) {
  return (
    <div>
      {props.rate > 50 ? (
        <div>
          <Progress percent={props.rate} showInfo={false} />
          <Label primary sm>
            {props.rate}%
          </Label>
        </div>
      ) : (
        <div>
          <Progress percent={props.rate} showInfo={false} status="exception" />
          <Label danger sm>
            {props.rate}%
          </Label>
        </div>
      )}
    </div>
  );
}

ProgressBar.propTypes = {
  rate:  PropTypes.number.isRequired
};
