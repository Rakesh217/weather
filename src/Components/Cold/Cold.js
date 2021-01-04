import React, { Component } from "react";

export default class Cold extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.setState({ data: this.props.coldData });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.coldData != prevState.data)
      this.setState({ data: prevProps.coldData });
  }
  render() {
    return (
      <div className="div-top2">
        <h2>Cold Cities</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Temp</th>
            </tr>
          </thead>
        </table>
        {this.state.data.length > 0
          ? this.state.data.map((value, index) => (
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{value.Name}</td>
                    <td>{value.Temp}</td>
                  </tr>
                </tbody>
              </table>
            ))
          : null}
      </div>
    );
  }
}
