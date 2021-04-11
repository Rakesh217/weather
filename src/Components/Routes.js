import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./Index/About";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default class Routes extends Component {
  state = {
    unitName: "",
  };
  render() {
    return (
      <Router receive={(value) => this.setState({ unitName: value })}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} send={this.state.unitName} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}
