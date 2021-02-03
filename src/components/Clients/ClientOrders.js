import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Get from '../Functional/Get'
class ClientOrders extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }

  render() {
      return (
        <div id="ClientOrders ">
           <Get path={"client/orders/" + this.props.ClientID} handleData={this.handleDatas} />
          {this.state.datas.map((order) => (
            <Link to={'/order/' + order.OrderID} key={order.OrderID}>
              <div className="Row-2 Item Hover">
                <div>{order.name}</div>
                <div>{order.city}</div>
              </div>
            </Link>
          ))}
        </div>
      )
  }
}

export default ClientOrders
