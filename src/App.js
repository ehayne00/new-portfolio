import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home"
import Project from "./components/Project";
import { Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/project"
          render={(props) => <Project {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
