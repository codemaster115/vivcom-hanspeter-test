import React from "react";
import PropTypes from "prop-types";

import "./Product.css";

export default function Product(props) {
  return (
    <div className="product-name">
      <div className="product-img">
        <img src={props.product_img} alt="" />
      </div>
      <div className="product-info">
        <p>{props.name}</p>
        <img src={props.flag_img} alt="" />
        <span>{props.code}</span>
      </div>
    </div>
  );
}

Product.propTypes = {
  product_img:  PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};
