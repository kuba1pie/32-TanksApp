import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class CreateClient extends Component {
  state = {
    name: '',
    city: '',
    adress: '',
    person: '',
    number: '',
    email: '',
  }
  submit() {
    axios
      .post('http://localhost:4000/clients', this.state)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    return <Redirect to="/clients/" />
  }
  render() {
    return (
      <div id="CreateClient" className="Wrapper">
        <h2>Create Client: </h2>
        <form className="Item Column">
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
            Submit client
          </button>
        </form>
      </div>
    )
  }
}

export default CreateClient
