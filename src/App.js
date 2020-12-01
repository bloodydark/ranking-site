import React from "react";
import Home from "./pages/Home";
import HotSpring from "./pages/HotSpring";
import Korea from "./pages/Korea";
import Konan from "./pages/Konan";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hotspring" component={HotSpring} />
        <Route exact path="/korea" component={Korea} />
        <Route exact path="/konan" component={Konan} />
      </Switch>
    </Router>
  );
}

export default App;
