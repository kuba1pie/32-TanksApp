import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ClientOrders extends Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/client/orders/` + this.props.client)
      .then((res) => {
        const orders = res.data
        this.setState({ orders })
      })
      .catch(function (error) {
        return null
      })
  }

  render() {
    let { orders } = this.state
    if ((Object.keys(orders).length !== 0)) {
      return (
        <div id="ClientOrders ">
          {orders.map((order) => (
            <Link to={'/order/' + order.OrderID} key={order.OrderID}>
              <div className="Row-2 Item Hover">
                <div>{order.name}</div>
                <div>{order.city}</div>
              </div>
            </Link>
          ))}
        </div>
      )
    } else {
      return (
        <div className="ClientOrders">
          No orders
        </div>
      )
    }
  }
}

export default ClientOrders
