import React from "react";
import { List, Avatar, Input, Button } from "antd";
import { Link } from "react-router-dom";

class SellPage extends React.Component {
  constructor(props) {
    super(props);
    if (props.location.state) {
      this.state = { data: props.location.state };
    } else {
      this.state = {
        data: [
          {
            id: 0,
            title: "Rice",
            quantity: "40 / kg",
            imgSrc:
              "https://bethlehemplace.org/wp-content/uploads/2013/06/81defb3758f2613d213f771d297601bd_salt-clipart-sack-rice-pencil-and-in-color-salt-clipart-sack-rice-rice-clipart-transparent_360-352.png",
            qty: 0,
            price: 40
          },
          {
            id: 1,
            title: "Wheat",
            quantity: "20 / kg",
            imgSrc:
              "http://desifoodkart.com/wp-content/uploads/2019/02/Chakki-Atta-Flour.jpg",
            qty: 0,
            price: 20
          },
          {
            id: 2,
            title: "Tomato",
            quantity: "30 / kg",
            imgSrc: "https://grist.files.wordpress.com/2009/09/tomato.jpg",
            qty: 0,
            price: 30
          }
        ]
      };
    }
  }

  addQuantity = id => {
    const dataClone = [...this.state.data];
    let dataPosition;
    dataClone.forEach((item, index) => {
      if (item.id === id) {
        dataPosition = index;
      }
    });
    dataClone[dataPosition].qty++;
    this.setState({ data: dataClone });
  };

  setQuantity = (e, id) => {
    const dataClone = [...this.state.data];
    let dataPosition;
    let totalQuantity = 0;
    dataClone.forEach((item, index) => {
      if (item.id === id) {
        dataPosition = index;
      }
      if (item.id !== id) {
        totalQuantity += parseInt(item.qty);
      }
    });
    totalQuantity +=
      e.target.value.trim() !== "" ? parseInt(e.target.value) : 0;
    dataClone[dataPosition].qty = e.target.value;
    this.setState({ data: dataClone, totalQuantity });
  };

  render() {
    const { data } = this.state;
    const { type } = this.props;
    return (
      <>
        <h1 style={{ margin: "2% 35% 1% 35%", width: "30%", textAlign: "center" }}>
          {type === "sell" ? "Sell items here" : "Choose items to buy"}
        </h1>
        <div style={{ margin: "0px 10%" }}>
          <List
            itemLayout="horizontal"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.imgSrc} style={{ marginRight: "20px" }} />
                  }
                  title={item.title}
                  description={<>&#8377;{item.quantity}</>}
                  style={{ marginLeft: "20px" }}
                />
                <div>
                  Qty:
                  <Input
                    style={{
                      width: "100px",
                      marginLeft: "10px",
                      marginRight: "30px"
                    }}
                    type="number"
                    onChange={e => this.setQuantity(e, item.id)}
                    value={item.qty}
                    placeholder="In Kgs"
                  />
                </div>
              </List.Item>
            )}
          />
        </div>
        <Link
          to={{
            pathname: type === "sell" ? "sell/billing" : "buy/billing",
            state: this.state.data
          }}
        >
          <Button
            type="primary"
            style={{ margin: "3% 45% 0% 45%", width: "100px", height: "50px" }}
          >
            <b>{type === "sell" ? "Sell" : "Buy"}</b>
          </Button>
        </Link>
      </>
    );
  }
}

export default SellPage;
