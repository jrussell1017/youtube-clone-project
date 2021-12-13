import "./App.css";
import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";

// Component
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";


// Data
import { team } from "./data/team.js" 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team,
    }
  }
  render() {
    const { team } = this.state;
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
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage team={team} />} />
          </Routes>
        </div>
    );
  }
}

export default App;