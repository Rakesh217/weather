import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div className="down">
        <footer className="bg-light text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <Link class="text-dark" to="/">
              WTFWeather.com
            </Link>
          </div>
        </footer>
      </div>
    );
  }
}
