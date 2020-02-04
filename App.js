import React, { Component } from "react";
import Routes from "./src/routes/index";

import "./App.css";
import { store } from "./src/redux";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
