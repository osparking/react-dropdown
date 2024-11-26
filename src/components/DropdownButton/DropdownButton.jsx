import React, { forwardRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./DropdownButton.css";

const DropdownButton = forwardRef((props, ref) => {
  const { children, open, toggle } = props;
  return (
    <div
      onClick={toggle}
      className={`dropdown-btn ${open ? "button-open" : null}`}
      ref={ref}
    >
      {children}
      <span className="toggle-icon">
        {open ? <SlArrowUp /> : <SlArrowDown />}
      </span>
    </div>
  );
});

export default DropdownButton;
