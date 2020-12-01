import React, { Component } from 'react'
import axios from 'axios'
import Get from '../Functional/Get'
class CreateTank extends Component {
  state = {
    capacity: '',
    height: '',
    diameter: '',
    type: '',
    OrderID: '',
  }
  state = {
    datas: [],
  }
  getData = (array) => {
    this.setState((datas) => {
      return { datas: array }
    })
  }
  submit() {
    axios
      .post('http://localhost:4000/tanks', this.state)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    let types = ['VdS', 'PN-EN', 'FM', 'NFPA']
    return (
      <div id="CreateOrder" className="Wrapper">
        <h2>Create Tank: </h2>
        <form className="flex flex-column Item">
          <Get path="orders" sendData={this.getData} />
          <select
            name="Order"
            value={this.state.OrderID}
            onChange={(e) => this.setState({ OrderID: e.target.value })}
          >
            {this.state.datas.map((item) => (
              <option key={item.OrderID} value={item.OrderID}>
                {item.name}
              </option>
            ))}
          </select>

          <input
            value={this.state.capacity}
            onChange={(e) => this.setState({ capacity: e.target.value })}
            type="number"
            placeholder="Capacity"
          />
          <input
            value={this.state.height}
            onChange={(e) => this.setState({ height: e.target.value })}
            type="number"
            placeholder="Height"
          />

          <input
            value={this.state.diameter}
            onChange={(e) => this.setState({ diameter: e.target.value })}
            type="number"
            placeholder="Diameter"
          />
          <select
            name="Type"
            value={this.state.type}
            onChange={(e) => this.setState({ type: e.target.value })}
          >
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button type="button" value="Submit" onClick={() => this.submit()}>
            Submit Tank
          </button>
        </form>
      </div>
    )
  }
}

export default CreateTank
