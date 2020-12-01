import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClientListItem from './ClientListItem'
import Get from '../Functional/Get'

class Clients extends Component {
  state = {
    datas: [],
  }
  getData = (array) => {
    this.setState(() => {
      return { datas: array }
    })
  }
  render() {
    return (
      <div id="Clients" className="Wrapper">
        <h2>Clients List: </h2>
        <div id="ClientsList">
          <div id="ClientsHeader" className="Item Head Row-4">
            <div >Client Name</div>
            <div >Client City</div>
            <div>Order Name</div>
            <div>Order City</div>
          </div>
          <Get path="clients" sendData={this.getData} />
          {this.state.datas.map((client) => (
            <ClientListItem client={client} key={client.ClientID} />
          ))}
        </div>

        <button id="Btn-AddClient">
          <Link to="/clients/create">Add Client</Link>
        </button>
      </div>
    )
  }
}

export default Clients
