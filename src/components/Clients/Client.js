import React, { Component } from 'react'
import axios from 'axios'
import ClientOrders from './ClientOrders'
import { Redirect } from 'react-router-dom'
import Delete from '../Delete'
let host = 'http://localhost:4000/client/'

class Client extends Component {
  state = {
    datas: [],
  }
  componentDidMount() {
    axios.get(host + this.props.match.params.id).then((res) => {
      const datas = res.data
      this.setState({ datas })
    })
  }
  render() {
    let { datas } = this.state
    return (
      <div className="Client">
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
                <ClientOrders client={this.props.match.params.id} />
              </div>
              <div className="Item">
                <Delete type="Client" url={host + this.props.match.params.id} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Client
