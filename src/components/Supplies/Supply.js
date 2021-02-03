import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Get from '../Functional/Get'
class Order extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }
  render() {
    let { datas } = this.state
    return (
      <div className="Order">
        <Get
          path={'supplies/' + this.props.match.params.id}
          handleData={this.handleDatas}
        />
        {datas.map((item) => {
          return (
            <div className="Wrapper">
              <div className="Item">
                <h2 className="Head Item">Order name: {item.name}</h2>
                <p>SupplID: {item.SupplyID}</p>
                <p>Order city: {item.MaterialID}</p>
              </div>

              <p>Tanks: </p>
              <div className="Head Item Row-3">
                <div>city</div>
                <div>city</div>
                <div>city</div>
              </div>
              <Link
                to={{
                  pathname: '/supplyedit',
                  state: {
                    supply: datas[0],
                  },
                }}
              >
                <button> Edit supply</button>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Order
