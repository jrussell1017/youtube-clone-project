import "./App.css";
import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./component/HomePage";
import AboutPage from "./component/AboutPage";
import IndividualVideoPage from "./component/IndividualVideoPage";

// NavBar
//    Youtube
//    Home
//    About

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      
        <div>
          {/* NavBar */}
          <nav>
            <p>Youtube</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route exact path="/" element= {<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Routes>
        </div>
    
    );
  }
}

export default App;

