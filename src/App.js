import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./view/Main";
import Home from "./view/Home";

function App() {
  return (
    <Router>
      <Switch>
      <Route component={Main} exact path="/" />
        <Route
          render={(props) => <Home {...props} />}
          path={["/conversion", "/sale", "/recoup"]}
        />
        <Route exact path="/:id">
          <Home />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
