// React & React Routing-Dom
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

// CSS
import "./App.css";

// Components
import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";
import IndividualVideoPage from "./component/videos/IndividualVideoPage"

class App extends Component {
  render() {  
    return (
      <div>
        {/* NavBar */}
        <nav>
          <p><strong>Youtube</strong></p>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <a className="nav-link" href="https://clone-d812e.firebaseapp.com/">SportsMode</a>
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