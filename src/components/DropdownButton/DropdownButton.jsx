import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./DropdownButton.css";

const DropdownButton = ({ children, open, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={`dropdown-btn ${open ? "button-open" : null}`}
    >
      {children}
      <span className="toggle-icon">
        {open ? <SlArrowDown /> : <SlArrowUp />}
      </span>
    </div>
  );
};

export default DropdownButton;
