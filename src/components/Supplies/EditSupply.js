import React, { Component, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class EditSupply extends Component {
  state = {
    supply: this.props.location.state.supply,
  }
  updateCapacity(event) {
    this.setState((prevState) => {
      let supply = Object.assign({}, prevState.supply)
      supply.status = event
      axios
        .put('http://localhost:4000/supplies/' + this.state.supply.SupplyID, {
          status: supply.status,
          SupplyID: this.state.supply.SupplyID,
        })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })

      return { supply }
    })
  }

  handleSubmit(event) {
    alert('Podano następujące imię: ')
    console.log(this.fileInput.files[0].name)
    event.preventDefault()
  }
  render() {
    let { supply } = this.state

    return (
      <div className="Tank Wrapper">
        <h2>Tank</h2>
        <div className="TanksList-Item Item Row-2" key="header">
          <div className="Head Item">
            <div className="Name">Capacity</div>
            <div className="City">Order</div>
            <div className="Client">ID</div>
          </div>

          <div className="Item" key={supply.OrderID}>
            <div key={supply.status}>{supply.status}</div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Capacity:
                <input
                  type="number"
                  value={this.state.supply.status}
                  onChange={(event) => this.updateCapacity(event.target.value)}
                />
                <select
                  value={this.state.supply.status}
                  onChange={(event) => this.updateCapacity(event.target.value)}
                >
                  <option value="New">New</option>
                  <option value="Project">Project</option>
                  <option selected value="Send">
                    Send
                  </option>
                  <option value="Mango">Mango</option>
                </select>
              </label>
              <label>
                <input type="file" ref={(input) => (this.fileInput = input)} />
              </label>
              <input type="submit" value="Wyślij" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditSupply
