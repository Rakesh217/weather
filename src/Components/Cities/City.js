import React, { useState, useEffect } from "react";

export default function City() {
  const [Data, setData] = useState([
    {
      Name: "Detroit",
      Temp: 32.1,
    },
    {
      Name: "Kansas",
      Temp: 26.7,
    },
    {
      Name: "Colorado",
      Temp: 15.4,
    },
    {
      Name: "Dallas",
      Temp: 48.3,
    },
    {
      Name: "New Jersey",
      Temp: 38.9,
    },
    {
      Name: "California",
      Temp: 52.4,
    },
  ]);
  const [Hot, setHot] = useState([]);

  let sendHotData = () => {
    var topValues = Data.sort((a, b) => b.Temp - a.Temp).slice(0, 3);
    console.log(topValues);
    return topValues;
  };

  let sendColdData = () => {
    var lowValues = Data.sort((a, b) => a.Temp - b.Temp).slice(0, 3);
    console.log(lowValues);
    return lowValues;
  };

  useEffect(() => {
    sendHotData();
    sendColdData();
  }, []);

  return <div></div>;
}
