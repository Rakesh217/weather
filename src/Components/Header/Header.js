import React, { Component } from "react";
import About from "../Index/About";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          <Link className="navbar-brand" to="/">
            Weather
          </Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                @
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
