import React, { useState, useEffect } from "react";
import City from "../Cities/City";

export default function Hot(props) {
  const [State, setState] = useState({
    data: [],
  });
  let handleOnClick = (value) => {
    props.receive(value.Name);
  };
  useEffect(() => {
    setState({ data: props.hotData });
  }, [props]);
  return (
    <div className="div-top2">
      <h2>Hot Cities</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">State</th>
          </tr>
        </thead>
      </table>
      {State.data.length > 0
        ? State.data.map((value, index) => (
            <div>
              <table class="table table-striped">
                <tbody>
                  <tr onClick={() => handleOnClick(value)}>
                    <th scope="row">{index + 1}</th>
                    <td>{value.Name}</td>
                    <td>{value.State}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        : null}
    </div>
  );
}
