import React, { Component, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class EditOrder extends Component {
  state = {
    order: this.props.location.state.order,
  }
  updateCapacity(event) {
    this.setState((prevState) => {
      let order = Object.assign({}, prevState.order)
      order.status = event
      axios
        .put('http://localhost:4000/orders/' + this.state.order.OrderID, {
          status: order.status,
          orderId: this.state.order.OrderID,
        })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })

      return { order }
    })
  }

  handleSubmit(event) {
    alert('Podano następujące imię: ')
    console.log(this.fileInput.files[0].name)
    event.preventDefault()
  }
  render() {
    let { order } = this.state

    return (
      <div id="Tank" className="Wrapper">
        <h2>Tank</h2>
        <div className="TanksList-Item Item Row-2">
          <div className="Head Item">
            <div>Capacity</div>
            <div>Order</div>
            <div>ID</div>
          </div>

          <div className="Item" key={order.OrderID}>
            <div key={order.TankCapacity}>{order.capacity} m3</div>
            <div key={order.OrderName}>{order.status}</div>
            <div key={order.OrderID}>{order.OrderID}</div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Capacity:
                <input
                  type="number"
                  value={this.state.order.status}
                  onChange={(event) => this.updateCapacity(event.target.value)}
                />
                <select
                  value={this.state.order.status}
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

export default EditOrder
