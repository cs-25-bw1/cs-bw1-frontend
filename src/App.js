import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import AuthRoute from "./util/AuthRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <AuthRoute path="/" component={Home} />
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
      </Switch>
    </div>
  );
}

export default App;
