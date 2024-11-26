import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItem from "./components/DropdownItem/DropdownItem";

function App() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="App">
      <div className="content">
        <Dropdown
          buttonText="드롭다운 버튼"
          content={
            <>
              {items.map((item) => (
                <DropdownItem key={item}>{`항목 ${item}`}</DropdownItem>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
}

export default App;
