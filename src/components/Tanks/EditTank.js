import React, { Component, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class EditTank extends Component {
  state = {
    tank: this.props.location.state.tank,
  }
  updateCapacity(event) {
    this.setState((prevState) => {
      let tank = Object.assign({}, prevState.tank)
      tank.capacity = event
      axios
      .put('http://localhost:4000/tanks/'+this.state.tank.TankID, {
        capacity: tank.capacity,
        tankId: this.state.tank.TankID
      })
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
      return { tank }
    })

  }

  handleSubmit(event) {
    alert('Podano następujące imię: ')
    console.log(this.fileInput.files[0].name)
    event.preventDefault()
  }
  render() {
    let { tank } = this.state

    return (
      <div className="Tank Wrapper">
        <h2>Tank</h2>
        <div className="TanksList-Item Item Row-2" key="header">
          <div className="Head Item">
            <div className="Name">Capacity</div>
            <div className="City">Order</div>
            <div className="Client">ID</div>
          </div>

          <div className="Item" key={tank.TankID}>
            <div key={tank.TankCapacity}>{tank.capacity} m3</div>
            <div key={tank.OrderName}>{tank.height}m</div>
            <div key={tank.TankID}>{tank.TankID}</div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Capacity:
                <input
                  type="number"
                  value={this.state.tank.capacity}
                  onChange={(event) => this.updateCapacity(event.target.value)}
                />
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

export default EditTank
