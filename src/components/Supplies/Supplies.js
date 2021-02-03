import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Get from '../Functional/Get'
class Supplies extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }
  render() {

    return (
      <div className="Supplies Wrapper">
        <Get path={'supplies'} handleData={this.handleDatas} />
        <h2>Supplies:</h2>
        <div className="Column" key="header">
          <div className="Row-3 Head Item">
            <div className="Name">Created</div>
            <div className="City">Supply ID</div>
            <div className="Client">Materials</div>
          </div>
        </div>
        {this.state.datas.map((supply) => (
          <Link to={'/supply/' + supply.SupplyID} key={supply.SupplyID}>
            <div className="Row-3 Item Hover">
              <div>{supply.created}</div>
              <div>{supply.SupplyID}</div>
              <div>{supply.SupplyID}</div>
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default Supplies
