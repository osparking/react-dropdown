import React from "react";
import { SlArrowDown } from "react-icons/sl";

const DropdownButton = ({ children }) => {
  return (
    <div>
      {children}
      <span>
        <SlArrowDown />
      </span>
    </div>
  );
};

export default DropdownButton;
