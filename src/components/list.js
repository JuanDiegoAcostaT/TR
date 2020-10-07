import React, { Component } from "react";
import { Row } from "antd";
import axios from "axios";
import Pusher from "pusher-js";
import Positions from "./positions";
import DetailsVendor from "./detailsVendor";

class List extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location;
    this.state = {
      mp3: [
        "here-we-go-hoo.mp3",
        "mario-bros-vida.mp3",
        "mario-kart-64.mp3",
        "mario-bros-mamma-mia.mp3",
        "mario-bros-wonderful.mp3",
      ],
      top: [],
      idVendor: props.idVendor,
      vendor: null,
      showModal: false,
      sale: null,
      url: `https://octoplus.app/api/v1/ranking/employees${location.pathname}`,
    };
    this.getTopOrder();
    this.handleShowDetails = this.handleShowDetails.bind(this);
    this.handleCloseDetails = this.handleCloseDetails.bind(this);
  }
  getTopOrder = () => {
    return new Promise((res, rej) => {
      axios
        .get(this.state.url)
        // .get("http://127.0.0.1:8000/api/v1/ranking")
        .then((response) => {
          console.log(response)
          const ranking = response.data.rankings;
          this.setState({ top: ranking });
        })
        .catch((error) => console.error(error));

      let pusher = new Pusher("ee2aeaa045223c5cd1c5", {
        cluster: "us2",
        forceTLS: true,
      });
      let channel = pusher.subscribe("rankingUpdateTissini");
      channel.bind("App\\Providers\\RankingUpdate", (data) => {
        console.log(data);
        this.update(data.item.id, data.item.amount);
      });
    });
  };
  update(id, amount) {
    let mp3 = require.context("../assets/mp3/", true);
    let audio = new Audio(
      mp3(
        "./" + this.state.mp3[Math.floor(Math.random() * this.state.mp3.length)]
      )
    );
    audio.play();

    let sale = this.state.top;
    sale.map((vendor, index) => {
      if (vendor.id === id) {
        // return
        vendor.value = amount;
      }
      return vendor;
    });

    this.setState({
      top: sale.sort((a, b) => b.value - a.value),
      sale: id,
    });
  }

  handleShowDetails(vendor) {
    this.setState({ showModal: true, vendor: vendor });
    
  }

  handleCloseDetails() {
    this.setState({ showModal: false });
  }

  render() {
    const { top, idVendor, showModal, vendor, sale } = this.state;
    return (
      <div>
        <Row gutter={10} type="flex" justify="space-around">
          <Positions
            top={top.slice(0, 14)}
            indexStart={1}
            id={idVendor}
            showDetails={this.handleShowDetails}
            sale={sale}
          />
          <Positions
            top={top.slice(14, 32)}
            indexStart={15}
            id={idVendor}
            showDetails={this.handleShowDetails}
            sale={sale}
          />
          <Positions
            top={top.slice(32, 50)}
            indexStart={33}
            id={idVendor}
            showDetails={this.handleShowDetails}
            sale={sale}
          />
        </Row>

        <DetailsVendor
          show={showModal}
          close={this.handleCloseDetails}
          vendor={vendor}
        />
      </div>
    );
  }
}

export default List;
