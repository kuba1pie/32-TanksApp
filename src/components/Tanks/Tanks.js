import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import CreateTank from './CreateTank'
import _ from 'lodash'

class Tanks extends Component {
  state = {
    tanks: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/tanks`).then((res) => {
      const tanks = res.data
      this.setState({ tanks })
      return res.data
    })
  }
  render() {
    let { tanks } = this.state

    return (
      <div id="Tanks" className="Wrapper">
        <h2>Tanks:</h2>
        <div className="TanksList Wrapper">
          <div className="TanksList-Item Column">
            <div className="Item Head Row-3">
              <div>Capacity</div>
              <div>Order</div>
              <div>ID</div>
            </div>
          </div>
          {tanks.map((tank) => (
            <Link
              to={'/tank/' + tank.TankID}
              key={tank.OrderName + '_' + tank.TankID}
            >
              <div className="Item Row-3 Hover">
                <div>{tank.TankCapacity}</div>
                <div>{tank.OrderName}</div>
                <div>{tank.TankID}</div>
              </div>
            </Link>
          ))}
        </div>

        <CreateTank />
      </div>
    )
  }
}

export default Tanks
