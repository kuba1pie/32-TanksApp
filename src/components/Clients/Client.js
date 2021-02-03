import React, { Component } from 'react'
import axios from 'axios'
import ClientOrders from './ClientOrders'
import Delete from '../Functional/Delete'
import Get from '../Functional/Get'
import CreateOrder from '../Orders/CreateOrder'
class Client extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }

  render() {
    let { datas } = this.state
    return (
      <div className="Client">
        <Get path={"client/"+ this.props.match.params.id} handleData={this.handleDatas} />
        {datas.map((item) => {
          return (
            <div className="Wrapper Column">
              <h2>Client: </h2>
              <div className="Item Row-2">
                <div className="Head Item">
                  <div className="Name">Name</div>
                  <div className="City">City</div>
                  <div className="Client">ID</div>
                </div>
                <div className="Item">
                  <div className="">{item.name}</div>
                  <div className="">{item.city}</div>
                  <div className="">{item.ClientID}</div>
                </div>
              </div>
              <h2>Orders:</h2>
              <div className="Item">
                <div className="Head Item Row-2">
                  <div>Name</div>
                  <div>City</div>
                </div>
                
                <ClientOrders ClientID={this.props.match.params.id} />
                <CreateOrder ClientID={this.props.match.params.id}/>
              </div>
              <div className="Item">
                <Delete type="Client" path={"client/"+ this.props.match.params.id} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Client
