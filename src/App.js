import React from "react";
import EmailForm from "./EmailForm";
import SetPassword from "./SetPassword";
import { Switch, Route } from "react-router-dom";
// import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Firebase Practice</h1>
      <main>
        <Switch>
          <Route exact path="/" component={EmailForm} />
          <Route path="/set-password" component={SetPassword} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
