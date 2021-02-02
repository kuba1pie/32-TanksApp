import React, { Component } from 'react'
import axios from 'axios'

let host = 'http://localhost:4000/'

class Get extends Component {
  handleDataChange(par)  {
    this.props.handleData(par.datas)
    console.log(par)
  }
  componentDidMount() {
    axios.get(host + this.props.path).then((res) => {
      const datas = res.data
      //this.props.handleData(datas)

      this.handleDataChange({ datas });
    })
  }
  render() {
    return null
  }
}

export default Get
