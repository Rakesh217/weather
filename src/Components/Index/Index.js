import React, { Component } from "react";
import About from "./About";

export default class Index extends Component {
  state = {
    cityName: "",
    data: [],
    filterData: [],
    vari: "",
  };
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({ cityName: e.target.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ vari: this.state.cityName });
    let myHeader = new Headers();
    let query = {
      query: `query{
        getCityByName(name: "${this.state.cityName}"){
          name
          weather{
            temperature{
              actual
              min
              max
            }
            wind{
              speed
            }
            summary{
              title
            }
          }
        }
      }`,
    };
    myHeader.append("Content-Type", "application/json");
    fetch("https://graphql-weather-api.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify(query),
      headers: myHeader,
    })
      .then((result) => result.json())
      .then((result1) => {
        console.log("Result", result1.data);
        if (result1.data.getCityByName === null) this.setState({ data: null });
        this.setState({ data: [{ ...result1.data.getCityByName }] });
      })
      .catch((error) => console.log(error));
    console.log("Submit", this.state.data);
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    console.log("Render", this.state.data);
    return (
      <div className="div-top1">
        <h1>What The Fahrenheit </h1>

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
        {this.state.data.length > 0 ? (
          <div>
            <div
              className="card hover-overlay ripple"
              data-mdb-ripple-color="dark"
              style={{ width: "18rem", marginLeft: "23%" }}
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/city/062.jpg"
                className="card-img-top"
                alt="..."
              />
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
                  Today's Highest:{" "}
                  {(
                    (this.state.data[0].weather.temperature.max - 273.15) *
                      (9 / 5) +
                    32
                  ).toFixed(1)}
                  F
                </li>
                <li className="list-group-item">
                  Today's Lowest:{" "}
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
          "No city Found"
        )}
      </div>
    );
  }
}
