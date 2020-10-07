import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import { useParams } from "react-router-dom";

// import List from "../components/list";
// import { Row, Col } from "antd";
// import { Animated } from "react-animated-css";

function Main() {
  return (
    <div className="App">
      <div className="container">
        <Link to="/conversion">
          <h2 className="title">Conversion</h2>
        </Link>
        <Link to="/sale">
          <h2 className="title">Sale</h2>
        </Link>
        <Link to="/recoup">
          <h2 className="title">Recoup</h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;
