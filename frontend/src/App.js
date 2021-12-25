import React from "react";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
