import React from "react";
import { Modal, Button } from "antd";
import "../App.css";
import { Animated } from "react-animated-css";

function DetailsVendor(props) {
  const images = require.context("../assets/avatar3", true);
  const avatar = props.vendor ? props.vendor.avatar : 1;

  return (
    <Modal
      centered
      visible={props.show}
      cancelText="sd"
      closable={false}
      footer={false}
    >
      <div className="modalBody">
        <img src={images("./" + avatar + ".png")} alt="avatar" />
        <div className="details">
          <Animated animationIn="fadeInDown">
            <div className="name">
              {props.vendor ? props.vendor.name : null}
            </div>
            <div className="value">
              {props.vendor ? "$" + props.vendor.value.toFixed(2) : null}
            </div>
          </Animated>
          <Button
            className="back"
            type="primary"
            icon="arrow-left"
            onClick={() => props.close()}
          >
            Atras
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DetailsVendor;
