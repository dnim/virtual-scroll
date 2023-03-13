import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VirtualScrollContainer from "./VirtualScrollContainer";

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Header
        </a>
      </header>
      <VirtualScrollContainer />

      <div>THE END</div>
    </div>
  );
}

export default App;
