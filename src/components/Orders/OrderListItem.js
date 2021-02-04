import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OrderTanks from './OrderTanks'

class OrderListItem extends Component {
  render() {
    let order = this.props.order
    return (
      <div id="OrderLisItem" className="OrdersList-Item Item Hover Row-3" key={order.OrderID}>
        <div className="Number">
          <div key={order.OrderID}>{order.OrderID}</div>
        </div>
        <Link  to={'/order/' + order.OrderID}>
          <div key={order.OrderID} className="Row-3">
            <div key={"name"}  className="Name">{order.name}</div>
            <div key={"city"} >{order.city}</div>
            <div key={"client"} >{order.OrderClient}</div>
          </div>
        </Link>
        <div className="OrdersList-Item-Tanks Column">
        {/*   <OrderTanks key={order.OrderID} order={order.OrderID} /> */}
        </div>
      </div>
    )
  }
}

export default OrderListItem
