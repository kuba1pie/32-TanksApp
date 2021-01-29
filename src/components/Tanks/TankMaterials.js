import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class TankMaterials extends Component {
  state = {
    materials: [],
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/tanks/materials/` + this.props.tank)
      .then((res) => {
        const materials = res.data
        this.setState({ materials })
      })
      .catch(function (error) {
        return null
      })
  }

  render() {
    let { materials } = this.state
    if (Object.keys(materials).length !== 0) {
      return (
        <div className="TankMaterials Wrapper Item">
          <h3>Tank Materials:</h3>
          <div className="Row-3 Item Head">
            <div>MaterialID</div>
            <div>Name</div>
            <div>Quantity</div>
          </div>
          {materials.map((item) => (
            <Link to={'/materials/' + item.MaterialID} key={item.MaterialID}>
              <div className="Row-3 Item Hover">
                <div>{item.MaterialID}</div>
                <div>{item.name}</div>
                <div>{item.quantity}</div>
              </div>
            </Link>
          ))}
        </div>
      )
    } else {
      return <div className="TanksList-content">No Orders</div>
    }
  }
}

export default TankMaterials
