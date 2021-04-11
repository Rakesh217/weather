import React, { Component } from "react";
import About from "./About";
import md5 from "md5";
export default class Index extends Component {
  state = {
    cityName: "",
    data: null,
    error: "",
    link: "",
    // unit: "fahrenheit",
  };
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ cityName: e.target.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.receive(this.state.cityName);
  };
  convertUnitToVal = (num) => {
    switch (this.props.uName) {
      case "fahrenheit":
        let fahr = ((num - 273.15) * (9 / 5) + 32).toFixed(1);
        return fahr + " F";
      case "celsius":
        let cel = (num - 273.15).toFixed(1);
        return cel + " C";
      default:
        let val = ((num - 273.15) * (9 / 5) + 32).toFixed(1);
        return val + " F";
    }
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== this.state.data && this.props.data.length > 0) {
      if (this.props.data[0].error !== this.state.error) {
        this.setState({ error: this.props.data[0].error });
        return;
      }
      if (!this.props.data[0].hasOwnProperty("error"))
        this.setState({ data: this.props.data, error: "" });
    }
  }
  render() {
    console.log("Render", this.state.data);
    return (
      <div className="div-top1">
        <h1 style={{ color: "white" }}>What The Fahrenheit </h1>

        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <i className="fas fa-search" aria-hidden="true"></i>
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="search"
            placeholder="Enter City Name"
            aria-label="Search"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            value={this.state.cityName}
            name="cityName"
            onChange={this.handleOnChange}
          />

          <button
            style={{ color: "white" }}
            className="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2"
            type="submit"
            onClick={this.handleOnSubmit}
          >
            Search
          </button>
        </form>
        {this.state.data !== null && this.state.error === "" ? (
          <div style={{ opacity: "0.6" }}>
            <div
              className="card mb-4 animation zoomIn"
              style={{ width: "25rem", marginLeft: "15%" }}
            >
              <div className="card-body">
                <h5 className="card-title">{this.state.data[0].name}</h5>
                <p className="card-text">
                  Overcast: {this.state.data[0].weather.summary.title}
                </p>
                <p className="card-text">
                  Wind Speed:{" "}
                  {(this.state.data[0].weather.wind.speed / 1.609).toFixed(1)}
                  m/h
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Temperature:{" "}
                  {(
                    (this.state.data[0].weather.temperature.actual - 273.15) *
                      (9 / 5) +
                    32
                  ).toFixed(1)}
                  F
                </li>
                <li className="list-group-item">
                  Today's Highest:{"  "}
                  {(
                    (this.state.data[0].weather.temperature.max - 273.15) *
                      (9 / 5) +
                    32
                  ).toFixed(1)}
                  F
                </li>
                <li className="list-group-item">
                  Today's Lowest:{"  "}
                  {(
                    (this.state.data[0].weather.temperature.min - 273.15) *
                      (9 / 5) +
                    32
                  ).toFixed(1)}
                  F
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.error ? (
          <div
            className="alert alert-dismissible alert-warning"
            style={{ opacity: "0.6" }}
          >
            <h4 className="alert-heading">Warning!</h4>
            <p className="mb-0">No City Name Found.</p>
          </div>
        ) : null}
      </div>
    );
  }
}
