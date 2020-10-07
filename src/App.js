import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./view/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          render={(props) => <Home {...props} />}
          path={["/conversion", "/sale", "/recoup"]}
        />
      </Switch>
    </Router>
  );
}

export default App;
