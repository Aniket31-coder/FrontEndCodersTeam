import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/screens/Home";
import About from "./components/screens/About";
import Navbar from "./components/screens/Navbar";
import Footer from "./components/screens/Footer";


const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
