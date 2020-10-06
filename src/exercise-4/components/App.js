import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from "react-router";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:user(\d+)' component={User} />
            <Route exact path='/about' component={User} />
            <Route component={NotMatch} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
