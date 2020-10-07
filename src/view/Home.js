import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import List from "../components/list";
import { Row, Col } from "antd";
import { Animated } from "react-animated-css";

function Home(props) {
  let { id } = useParams();
  let history = useHistory();

  function handleChange(value) {
    history.push(`/${value}`);
    window.location.reload()
  }

  return (
    <div className="App">
      <Animated animationIn="fadeInDown">
        <div className="title">
          TISSINI RANKING{" "}
          <span>{props.location.pathname.replace("/", "")}</span>{" "}
        </div>
      </Animated>
      <Row style={{ padding: "20px" }} type="flex" justify="center">
        <select
          onChange={(event) => handleChange(event.target.value)}
          name="teams"
          id="team-select"
        >
          <option value="">Teams</option>
          <option value="conversion">Conversion</option>
          <option value="sale">Sale</option>
          <option value="recoup">recoup</option>
        </select>
      </Row>
      <Row className="container" type="flex" justify="center">
        <Col className="col" xs={22} sm={20} md={22} lg={22} xl={18}>
          <List location={props.location} idVendor={id} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
