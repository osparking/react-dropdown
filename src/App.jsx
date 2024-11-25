import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const items = [1, 2, 3, 4];

  return (
    <div className="App">
      <div className="content">
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
