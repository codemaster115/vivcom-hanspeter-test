import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./Label.css";

export default function Label(props) {
  const { primary, lg, sm, danger, ...rest } = props;
  const labelClasses = cx({
    "default": rest,
    "primary": primary,
    "danger": danger,
    "lg": lg,
    "sm": sm
  });
  return (
    <div className={labelClasses}>
      {props.children}
    </div>
  );
}

Label.propTypes = {
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool
};