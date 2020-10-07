import React, { Component } from "react";
import { Col } from "antd";
import { Animated } from "react-animated-css";

class Positions extends Component {

  loadImage = id => {
      const images = require.context("../assets/avatar3", true);
        return images("./" + id + ".png");

  };
  loadImageNumber = index => {
    const images = require.context("../assets/top", true);
    return images("./" + index + ".png"); 
  };
  class = (idProps, idVendor, indexStart) => {
    let className = "";
    className += indexStart <= 3 ? "top-" + indexStart : "top-more";
    className += parseInt(idProps) === idVendor ? " vendor pulse" : "";
    return className;
  };
  render() {
    let { top, indexStart, id, showDetails, sale } = this.props;
    return (
      <Col xs={23} sm={23} md={20} lg={8} xl={8}>
        {top.map((vendor, index) => (
          <Animated
            key={vendor.id}
            animationIn={sale === vendor.id ? "bounceInLeft" : null}
          >
            <div
              className={this.class(id, vendor.id, indexStart)}
              onClick={
                vendor.id === parseInt(id) ? () => showDetails(vendor) : null
              }
            >
              {indexStart <= 3 ? (
                <img
                  className="top-number"
                  src={this.loadImageNumber(indexStart++)}
                  alt={indexStart}
                />
              ) : (
                <span className="top-number">{indexStart++}</span>
              )}

              <img
                className="top-avatar"
                src={this.loadImage(vendor.id)}
                // src="https://www.pinclipart.com/picdir/middle/99-992632_mario-clipart-face-cara-de-mario-bros-png.png"
                alt={index}
              />
              <span className="top-name">{vendor.name}</span>
              <span className="top-value">${vendor.amount == null ? vendor.amount = 0 : vendor.amount.toFixed(2) }</span>
            </div>
          </Animated>
        ))}
      </Col>
    );
  }
}
export default Positions;
