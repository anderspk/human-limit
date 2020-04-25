import React from "react";
import "./App.scss";
import SVG from "./images/svg";

const App = () => (
  <div className="app">
    <div className="container">
      <div className="landing-component">
        <SVG type="brain" className="brain" />
        <h1>Test the Human Limits</h1>
        <button className="start-button">Start</button>
      </div>
    </div>
  </div>
);

export default App;
