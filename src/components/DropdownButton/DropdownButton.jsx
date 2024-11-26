import React from "react";
import { SlArrowDown } from "react-icons/sl";
import "./DropdownButton.css";

const DropdownButton = ({ children }) => {
  return (
    <div className="dropdown-btn">
      {children}
      <span className="toggle-icon">
        <SlArrowDown />
      </span>
    </div>
  );
};

export default DropdownButton;
