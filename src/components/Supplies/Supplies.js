import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class Supplies extends Component {
  state = {
    supplies: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/supplies`).then((res) => {
      const supplies = res.data
      this.setState({ supplies })
      return res.data
    })
  }
  render() {
    let { supplies } = this.state

    return (
      <div className="Supplies Wrapper">
        <h2>Supplies:</h2>
        <div className="Column" key="header">
          <div className="Row-3 Head Item">
            <div className="Name">Created</div>
            <div className="City">Supply ID</div>
            <div className="Client">Materials</div>
          </div>
        </div>
        {supplies.map((supply) => (
          <Link to={'/supply/' + supply.SupplyID} key={supply.SupplyID}>
            <div className="Row-3 Item Hover" >
              <div >{supply.created}</div>
              <div >{supply.SupplyID}</div>
              <div >{supply.SupplyID}</div>
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default Supplies
