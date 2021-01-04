import React, { useState, useEffect } from "react";
import Cold from "../Cold/Cold";
import Index from "../Index/Index";
import Hot from "../Hot/Hot";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const [Data, setData] = useState([]);
  const [Dummy, setDummy] = useState([
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
  const [hotData, sethotData] = useState([]);
  const [coldData, setcoldData] = useState([]);
  let sendHotData = () => {
    var topValues = Dummy.sort((a, b) => b.Temp - a.Temp).slice(0, 3);
    console.log("Top", topValues);
    sethotData(topValues);
  };

  let sendColdData = () => {
    var lowValues = Dummy.sort((a, b) => a.Temp - b.Temp).slice(0, 3);
    console.log("Low", lowValues);
    setcoldData(lowValues);
  };

  useEffect(() => {
    sendHotData();
    sendColdData();
    //<Hot hotData={sendHotData()} />
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Cold coldData={coldData} />
          </Col>
          <Col lg={6}>
            <Index />
          </Col>
          <Col>
            <Hot hotData={hotData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
