import "./App.css";
import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";

// Component
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";


// Data
import { team } from "./data/team.js" 

// NavBar
//    Youtube
//    Home
//    About

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team,
    }
    // console.log(team)
  }
  render() {
    const { team } = this.state;
    // console.log(team)
    return (
        <div>
          {/* NavBar */}
          <nav>
            <p><strong>Youtube</strong></p>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route className="about-page" path="/about" element={<AboutPage team={team} />} />
          </Routes>
        </div>
    
    );
  }
}

export default App;