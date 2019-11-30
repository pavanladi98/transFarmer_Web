import React from "react";
import { Button, Carousel } from "antd";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="buy-sell">
          <div>
            <Link to="/sell">
              <Button type="primary" className="buy-sell-button">
                <b>Sell</b>
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/buy">
              <Button type="secondary" className="buy-sell-button">
                <b>Buy</b>
              </Button>
            </Link>
          </div>
        </div>
        <Carousel
          autoplay
          style={{
            margin: "100px auto 10px auto",
            width: "350px",
            padding: "10px"
          }}
        >
          <div className="carousel-quote">
            <h3>"If the farmer is rich, then so is the nation."</h3>
          </div>
          <div className="carousel-quote">
            <h3>"Agriculture is healthful, useful and noble employment of man."</h3>
          </div>
          <div className="carousel-quote">
            <h3>"Farmers are backbone of a country."</h3>
          </div>
        </Carousel>
      </>
    );
  }
}
