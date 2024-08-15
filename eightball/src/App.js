import React from "react";
import "./App.css";
import EightBall from "./EightBall";

function App() {
  return (
    <div className="App">
      <h1 className="title">Magic Eightball</h1>
      <p className="subtitle">Click to ask a question</p>
      <EightBall />
    </div>
  );
}

export default App;
