import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateTank from './CreateTank'
import _ from 'lodash'
import Get from '../Functional/Get'
class Tanks extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }
  render() {
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
          <Get path="tanks" handleData={this.handleDatas} />
          {this.state.datas.map((tank) => (
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
