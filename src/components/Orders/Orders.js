import React, { Component } from 'react'
import Order from './OrderListItem'
import Get from '../Functional/Get'
import CreateOrder from './CreateOrder'

class Orders extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }
  render() {
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
          <Get path="orders" handleData={this.handleDatas} />
          {this.state.datas.map((order) => {
            return <Order key={order.OrderID} order={order} />
          })}
        </div>

        <CreateOrder />
      </div>
    )
  }
}

export default Orders
