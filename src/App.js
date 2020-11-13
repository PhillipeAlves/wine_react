import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SearchPage, NotFound } from "./Pages";
import WinesPage from "./Pages/WinesPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route path='/wines' component={WinesPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
