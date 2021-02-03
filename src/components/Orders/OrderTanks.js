import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Get from '../Functional/Get'
class OrderTanks extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }

  render() {
    return (
      <div id="OrderTank">
        <Get
          path={'order/tanks/' + this.props.order}
          handleData={this.handleDatas}
        />
        {this.state.datas.map((item) => (
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
  }
}

export default OrderTanks
