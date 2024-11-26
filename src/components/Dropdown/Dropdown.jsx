import React, { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css";

const Dropdown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
    // setOpen((open) => !open);
  };
  return (
    <div className="dropdown">
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent>{content}</DropdownContent>
    </div>
  );
};

export default Dropdown;
