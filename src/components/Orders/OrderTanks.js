import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class OrderTanks extends Component {
  state = {
    orders: [],
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/order/tanks/` + this.props.order)
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
    if (Object.keys(orders).length != 0) {
      return (
        <div id="OrderTank">
          {orders.map((item) => (
            <Link to={'/tank/' + item.TankID} key={item.TankID}>
              <div className="Row-3 Item Hover">
                <div>{item.capacity}</div>
                <div>{item.TankID}</div>
                <div>{item.diameter}</div>
              </div>
            </Link>
          ))}
        </div>
      )
    } else {
      return <div className="TanksList-content">No Tanks</div>
    }
  }
}

export default OrderTanks
