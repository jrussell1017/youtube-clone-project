import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

// Component
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";
import IndividualVideoPage from "./component/IndividualVideoPage"



// NavBar
//    Youtube
//    Home
//    About

class App extends Component {
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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/videos/:id" component={IndividualVideoPage}/>
          </Switch>
        </div>
    
    );
  }
}

export default App;