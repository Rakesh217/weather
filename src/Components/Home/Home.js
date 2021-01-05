import React, { useState, useEffect } from "react";
import Cold from "../Cold/Cold";
import Index from "../Index/Index";
import Hot from "../Hot/Hot";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [Data, setData] = useState([]);
  const [Dummy, setDummy] = useState([
    {
      Name: "Las Vegas",
      State: "Arizona",
      Temp: 77.1,
    },
    {
      Name: "Phoenix",
      State: "Nevada",
      Temp: 70.7,
    },
    {
      Name: "San Antonio",
      State: "Texas",
      Temp: 65.4,
    },
    {
      Name: "Austin",
      State: "Texas",
      Temp: 74.3,
    },
    {
      Name: "Miami",
      State: "Florida",
      Temp: 75.9,
    },
    {
      Name: "Fairbanks",
      State: "Alaska",
      Temp: -3.7,
    },
    {
      Name: "Grand Forks",
      State: "North Dakota",
      Temp: 6.3,
    },
    {
      Name: "Minneapolis",
      State: "Minnesota",
      Temp: 19.1,
    },
    {
      Name: "Aberdeen",
      State: "South Dakota",
      Temp: 12.4,
    },
    {
      Name: "Detroit",
      State: "Michigan",
      Temp: 23.4,
    },
  ]);
  const [hotData, sethotData] = useState([]);
  const [coldData, setcoldData] = useState([]);
  const [Name, setName] = useState("");
  const [temp, settemp] = useState(0);
  const [link, setlink] = useState(
    "http://ccimgs-2017.s3.amazonaws.com/2017WinterTrends/2017WinterTrends_LoopableBackground.mp4"
  );
  let sendHotData = () => {
    var topValues = Dummy.sort((a, b) => b.Temp - a.Temp).slice(0, 5);
    console.log("Top", topValues);
    sethotData(topValues);
  };

  let sendColdData = () => {
    var lowValues = Dummy.sort((a, b) => a.Temp - b.Temp).slice(0, 5);
    console.log("Low", lowValues);
    setcoldData(lowValues);
  };

  let fetchCall = () => {
    if (Name !== "") {
      let myHeader = new Headers();
      let query = {
        query: `query{
        getCityByName(name: "${Name}"){
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
          if (result1.data.getCityByName === null) {
            setData([{ error: "No City Found !!" }]);
            return;
          } else {
            setData([{ ...result1.data.getCityByName }]);
            if (
              [{ ...result1.data.getCityByName }][0].weather.temperature
                .actual > 280
            ) {
              setlink(
                "http://ccimgs.s3.amazonaws.com/2015HeatStressIndex/2015HeatStressIndex_LoopingBackground.mp4"
              );
            } else if (
              [{ ...result1.data.getCityByName }][0].weather.summary.title ===
              "Mist"
            ) {
              setlink(
                "http://ccimgs.s3.amazonaws.com/2016WinterPrecip/2016WinterPrecip_LoopableBackground_1080.mp4"
              );
            } else {
              setlink(
                "http://ccimgs-2017.s3.amazonaws.com/2017FirstFrost/2017FirstFrost_LoopableBackground.mp4"
              );
            }
          }
        })
        .catch((error) => console.log(error));
      console.log("Submit", Data);
    }
  };
  useEffect(() => {
    sendHotData();
    sendColdData();
    fetchCall();
  }, [Name]);
  return (
    <div className="homeBack">
      <video id="background-video" src={link} muted loop autoPlay></video>
      <Container className="compCont">
        <Row>
          <Col style={{ background: "42f5e9" }}>
            <Cold coldData={coldData} receive={(value) => setName(value)} />
          </Col>
          <Col lg={6}>
            <Index receive={(value) => setName(value)} data={Data} />
          </Col>
          <Col style={{ background: "42f5e9" }}>
            <Hot hotData={hotData} receive={(value) => setName(value)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
