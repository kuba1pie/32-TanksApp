import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Get from '../Functional/Get'
class TankMaterials extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }

  render() {
      return (
        <div className="TankMaterials Wrapper Item">
                  <Get
          path={'orders/' + this.props.TankId}
          handleData={this.handleDatas}
        />
          <h3>Tank Materials:</h3>
          <div className="Row-3 Item Head">
            <div>MaterialID</div>
            <div>Name</div>
            <div>Quantity</div>
          </div>
          {this.state.datas.map((item) => (
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
  }
}

export default TankMaterials
