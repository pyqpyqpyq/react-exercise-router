import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MyProfile from "./myprofile";
import Home from "./home";
import AboutUs from "./aboutus.js";
import product from "./product";
import detail from "./detail";
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
              <Link to="/product">Products</Link>
            </div>
            <div className="headerInfo">
              <Link to="/">Home</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/product" component={product} />
            <Route exact path="/products/:id" component={detail} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route path='/goods' component={product} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
