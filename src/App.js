import "./App.css";
import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";

// Component
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";
import IndividualVideoPage from "./component/IndividualVideoPage"


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
            <p>Youtube</p>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          {/* Routes */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage team={team} />} />
            <Route path="/videos/:id" element={<IndividualVideoPage {...this.props}/>}/>
          </Routes>
        </div>
    
    );
  }
}

export default App;