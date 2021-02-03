import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import CreateMaterial from '../Materials/CreateMaterial'
import TankMaterials from './TankMaterials'
import DrawTank from './DrawTank'
import Delete from '../Functional/Delete'
import Get from '../Functional/Get'
let host = 'http://localhost:4000/tanks/'

class Tank extends Component {
  state = {
    datas: [],
  }
  handleDatas = (datasArray) => {
    this.setState({ datas: datasArray })
  }
  render() {
    return (
      <div id="Tank" className="Wrapper">
        <Get
          path={'tanks/' + this.props.match.params.id}
          handleData={this.handleDatas}
        />
        <h2>Tank</h2>
        <div className="TanksList-Item Item Row-2" key="header">
          <div className="Head Item">
            <div className="Capacity">Capacity</div>
            <div className="Height">Height</div>
            <div className="Diameter">Diameter</div>
            <div className="ID">ID</div>
          </div>
          {this.state.datas.map((item) => (
            <div className="Item" key={item.TankID}>
              <div>{item.capacity} m3</div>
              <div>{item.height} m</div>
              <div>{item.diameter} m</div>
              <div>{item.TankID}</div>
              <DrawTank tank={item.height} />
              <Link
                to={{
                  pathname: '/tankedit',
                  state: {
                    tank: this.state.datas[0],
                  },
                }}
              >
                <button> Edit tank</button>
              </Link>
            </div>
          ))}
        </div>
        <h2>Materials:</h2>
        <TankMaterials TankId={this.props.match.params.id} />
        <CreateMaterial tank={this.props.match.params.id} />
        <Delete type="Tank" url={host + this.props.match.params.id} />
      </div>
    )
  }
}

export default Tank
