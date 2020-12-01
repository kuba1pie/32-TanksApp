import React, { Component } from 'react'
import axios from 'axios'

class CrateMaterial extends Component {
  state = {
    name: '',
    quantity: '',
    partnumber: '',
    TankID: this.props.tank,
  }
  submit(event) {
    axios
      .post('http://localhost:4000/materials/', this.state)
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="Item">
        <h3>Create Material:</h3>
        <form className="Item flex flex-column">
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <label>
            Partnumbuer:
            <input
              type="text"
              value={this.state.partnumber}
              onChange={(e) => this.setState({ partnumber: e.target.value })}
            />
          </label>
          <label>
            Quantity:
            <input
              type="text"
              value={this.state.quantity}
              onChange={(e) => this.setState({ quantity: e.target.value })}
            />
          </label>
          <button type="submit" value="Submit" onClick={() => this.submit()}>
            Submit material
          </button>
        </form>
      </div>
    )
  }
}
export default CrateMaterial
