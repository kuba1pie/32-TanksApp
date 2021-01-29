import React, { Component } from 'react'
import axios from 'axios'

class Materials extends Component {
  state = {
    materials: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/materials`).then((res) => {
      const materials = res.data
      this.setState({ materials })
      return res.data
    })
  }
  render() {
    let { materials } = this.state
    return (
      <div className="MaterialsList-content Wrapper ">
        <h2>Materials:</h2>
        <div className="MaterialsList-Item Column" key="header">
          <div className="Row-3 Head Item">
            <div className="Name">Capacity</div>
            <div className="City">Order</div>
            <div className="Client">ID</div>
          </div>
        </div>
        {materials.map((material) => (
          <div className="Row-3 Item Hover" key={material.MaterialID}>
            <div>{material.name}</div>
            <div>{material.TankID}</div>
            <div>{material.quantity}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Materials
