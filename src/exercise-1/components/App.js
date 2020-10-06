import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="header">
            <div className="headerInfo">
              <Link to="/aboutus">About us</Link>
            </div>
            <div className="headerInfo">
              <Link to="/myprofile">My profile</Link>
            </div>
            <div className="headerInfo">
              <Link to="/">Home</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/aboutus" component={AboutUs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
