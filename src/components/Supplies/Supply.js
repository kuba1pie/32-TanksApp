import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Get from '../Functional/Get'
import Delete from '../Functional/Delete'

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
                <h2 className="Head Item">Supply name: {item.name}</h2>
                <p>SupplID: {item.SupplyID}</p>
                <p>Material: {item.MaterialID}</p>
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
                <div className="Item">
                <Delete path={"supplies/"+ this.props.match.params.id} />
              </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Order
