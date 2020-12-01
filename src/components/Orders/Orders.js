import React, { Component } from 'react'
import axios from 'axios'
import Order from './OrderListItem'
import { Link } from 'react-router-dom'

class Orders extends Component {
  state = {
    orders: [],
  }
  componentDidMount() {
    axios.get(`http://localhost:4000/orders`).then((res) => {
      const orders = res.data
      this.setState({ orders })
    })
  }
  render() {
    let { orders } = this.state
    return (
      <div id="Orders" className="Wrapper">
        <h2>Orders:</h2>
        <div className="OrdersList">
          <div id="OrdersHeader" className="OrdersList-Item Head Item Row-3">
            <div className="Number">
              <div>No</div>
            </div>
            <div className="Row-3">
              <div>Name</div>
              <div>City</div>
              <div>Client</div>
            </div>
            <div className="Row-3">
              <div>Capacity</div>
              <div>Height</div>
              <div>Diameter</div>
            </div>
          </div>

          {orders.map((order) => {
            return <Order key={order.OrderID} order={order} />
          })}
        </div>

        <button id="Btn-AddOrder">
          <Link to="/orders/create">Add Order</Link>
        </button>
      </div>
    )
  }
}

export default Orders
