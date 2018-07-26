import React from "react";
import ReactDOM from "react-dom";
import BioPath from "../src/container/main_info";
import { bio } from "../assets/text";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BioPath bio={bio} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
