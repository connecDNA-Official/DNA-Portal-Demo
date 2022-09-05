import React, { useState, useEffect } from "react";

import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
import Main from "./Pages/main" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [check, setCheck] = useState("0");
  return (
    <Router>
      <Navbar  />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/OurStory">
          <OurStory />
        </Route>
        <Route path="/Main">
            <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
