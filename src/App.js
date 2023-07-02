import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Routeanimation from "../src/components/Routeanimation";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routeanimation />
      </Router>
    </>
  );
};

export default App;
