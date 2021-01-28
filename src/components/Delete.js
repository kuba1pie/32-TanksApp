import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Delete extends Component {
  deleteItem = () => {
    axios.delete(this.props.url).then((res) => {
      console.log(this.props.type + ' ' + this.props.url + ' deleted')
    })
    return <Redirect to="/clients" />
  }
  render() {
    return (
      <div className="Delete Item">
        <button className="Red" onClick={this.deleteItem}>
          Delete
        </button>
      </div>
    )
  }
}

export default Delete
