import React from "react";
import { NullIcon } from "assets";

import "./Blank.css";

export default function Blank() {
  return (
    <div className="blank">
      <img src={NullIcon} alt="null" />
    </div>
  );
}
