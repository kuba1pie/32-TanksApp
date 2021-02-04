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
        <Get
          path={'client/orders/' + this.props.ClientID}
          handleData={this.handleDatas}
        />
        {this.state.datas.map((item) => {
/*           if (item.lenght > 0) {
            return (
              <Link to={'/order/' + item.OrderID} key={item.OrderID}>
                <div className="Row-2 Item Hover">
                  <div>{item.name}</div>
                  <div>{item.city}</div>
                </div>
              </Link>
            )
          }
          else {
            return (<div className="null">null</div>)
          } */
        })}
      </div>
    )
  }
}

export default ClientOrders
