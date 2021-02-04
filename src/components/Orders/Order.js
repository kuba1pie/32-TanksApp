import React, { Component } from 'react'
import OrderTanks from './OrderTanks'
import Delete from '../Functional/Delete'
import { Link } from 'react-router-dom'
import Get from '../Functional/Get'
let host = 'http://localhost:4000/orders/'

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
      <div id="Order">
        <Get
          path={'orders/' + this.props.match.params.id}
          handleData={this.handleDatas}
        />
        {this.state.datas.map((item) => {
          return (
            <div className="Wrapper">
              <div className="Item">
                <h2 className="Head Item">Order name: {item.name}</h2>
                <p>Order name: {item.name}</p>
                <p>Order city: {item.city}</p>
              </div>

              <p>Tanks: </p>
              <div className="Head Item Row-3">
                <div>city</div>
                <div>city</div>
                <div>city</div>
              </div>
              {/* <OrderTanks order={this.props.match.params.id} /> */}

              <div className="Row Item">
                <Delete type="Order" path={"orders/" + this.props.match.params.id} />
                <Link
                  to={{
                    pathname: '/orderedit',
                    state: {
                      order: datas[0],
                    },
                  }}
                >
                  <button> Edit order</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Order
