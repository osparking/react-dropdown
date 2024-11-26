import React, { useEffect, useRef, useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css";

const Dropdown = ({ buttonText, content }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const toggleDropdown = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handler = (event) => {
      console.log("cal 됨");
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open}>
        {buttonText}
      </DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  );
};

export default Dropdown;
