import React, { Component } from "react";

// components
import { SideBar } from "components";

// style
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "900px"}}>
        <SideBar />
      </div>
    );
  }
}

export default App;
