import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "./Routes/Router";
import "./App.css";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <HashRouter>
        <div id="App">
          <Router />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
