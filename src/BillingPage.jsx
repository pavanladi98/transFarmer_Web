import React from "react";
import { Card, Button, Table } from "antd";
import { Link } from "react-router-dom";

export default class BillingPage extends React.Component {
  render() {
    const { type } = this.props;
    const data = this.props.location.state;
    const dataSource = data.filter(item => item.qty !== 0);
    dataSource.map(item => (item.total = item.qty * item.price));
    let totalPrice = 0;
    let totalQuantity = 0;
    dataSource.forEach(item => {
      totalPrice += item.total;
      totalQuantity += parseInt(item.qty);
    });
    dataSource.push({ total: totalPrice, qty: totalQuantity, title: "Total" });
    const columns = [
      {
        title: "Item",
        dataIndex: "title",
        key: "item",
        render: item => (item === "Total" ? <b>{item}</b> : item)
      },
      {
        title: "Quantity",
        dataIndex: "qty",
        key: "qty"
      },
      {
        title: "Rate",
        dataIndex: "price",
        key: "price",
        render: text => (text ? <>&#8377;{text}</> : null)
      },
      {
        title: "Price",
        dataIndex: "total",
        key: "total",
        render: text => <>&#8377;{text}</>
      }
    ];
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Card
          title="Order summary"
          bordered={false}
          style={{
            width: "50%",
            margin: "auto",
            height: "380px",
            overflowY: "scroll"
          }}
        >
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </Card>
        <Link to={{ pathname: "/sell", state: data }}>
          <Button
            type="secondary"
            size="large"
            style={{ margin: "3% 5% 0% 40%" }}
          >
            Back
          </Button>
        </Link>
        <Link to={type === "sell" ? "/sell/success" : "/buy/success"}>
          <Button
            type="primary"
            size="large"
            style={{ margin: "3% 25% 0% 5%" }}
            disabled={!totalQuantity}
          >
            Confirm
          </Button>
        </Link>
      </div>
    );
  }
}
