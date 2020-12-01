import React, { Component } from 'react'
import axios from 'axios'
import Get from '../Functional/Get'
class CreateOrder extends Component {
  state = {
    name: '',
    city: '',
    adress: '',
    person: '',
    ClientID: '',
    number: null,
    email: '',
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
      .post('http://localhost:4000/orders', this.state)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div id="CreateOrder" className="Wrapper">
        <h2>Create Order: </h2>
        <form className="Item Column">
          <select
            name="Client"
            value={this.state.ClientID}
            onChange={(e) => this.setState({ ClientID: e.target.value })}
          >
            {this.state.datas.map((item) => (
              <option key={item.ClientID} value={item.ClientID}>
                {item.name}
              </option>
            ))}
          </select>

          <input
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.city}
            onChange={(e) => this.setState({ city: e.target.value })}
            type="text"
            placeholder="City"
          />
          <Get path="clients" sendData={this.getData} />

          <input
            value={this.state.adress}
            onChange={(e) => this.setState({ adress: e.target.value })}
            type="text"
            placeholder="Adress"
          />
          <input
            value={this.state.person}
            onChange={(e) => this.setState({ person: e.target.value })}
            type="text"
            placeholder="Contact Person"
          />
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.number}
            onChange={(e) => this.setState({ number: e.target.value })}
            type="number"
            placeholder="Phone"
          />
          <button type="button" value="Submit" onClick={() => this.submit()}>
            Submit order
          </button>
        </form>
      </div>
    )
  }
}

export default CreateOrder
