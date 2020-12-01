import React, { Component } from 'react'
import axios from 'axios'

let host = 'http://localhost:4000/'

class Get extends Component {
  state = {
    datas: [],
  }
  componentDidMount() {
    axios.get(host + this.props.path).then((res) => {
      const datas = res.data
      this.setState({ datas })
      this.props.sendData(this.state.datas)
      return res.data
    })
  }
  render() {
    return null
  }
}

export default Get
