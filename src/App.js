import React from "react";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <h1>Search Spanish Idioms</h1>
      <Search defaultValue="test" />
      <Favorites />
    </div>
  );
}

export default App;
