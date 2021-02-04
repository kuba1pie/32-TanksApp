import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ClientOrders from './ClientOrders'

class ClientListItem extends Component {
  render() {
    let client = this.props.client
    return (
      <div className="Client Item Row-2 Hover" key={client.ClientID}>
        <Link to={'/client/' + client.ClientID}>
          <div className="Row-2">
            <div >{client.name}</div>
            <div >{client.city}</div>
          </div>
        </Link>

        {/* <ClientOrders key={client.ClientID} ClientID={client.ClientID} /> */}
      </div>
    )
  }
}

export default ClientListItem
