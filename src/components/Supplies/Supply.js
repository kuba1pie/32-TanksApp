import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EditSupply from './EditSupply'


class Order extends Component {
  state = {
    datas: [],
  }
  componentDidMount() {
    axios.get('http://localhost:4000/supplies/' + this.props.match.params.id).then((res) => {
      const datas = res.data
      this.setState({ datas })
    })
  }
  render() {
    let { datas } = this.state
    return (
      <div className="Order">
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
