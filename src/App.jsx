import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const items = [1, 2, 3, 4];

  return (
    <div className="App">
      <div className="content">
        <Dropdown buttonText="드롭다운 버튼" content={<p>여러분 안녕!</p>} />
      </div>
    </div>
  );
}

export default App;
