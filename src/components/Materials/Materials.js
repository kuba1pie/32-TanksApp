import React, { Component } from 'react'
import Get from '../Functional/Get'
class Materials extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }

  render() {
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
        <Get path="materials" handleData={this.handleDatas} />
        {this.state.datas.map((material) => (
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
