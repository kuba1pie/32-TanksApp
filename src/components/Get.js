import React, { Component } from 'react'
import axios from 'axios'

class Get extends Component {
  state = {
    datas: [],
  }
  componentDidMount = () => {
    axios.get(this.props.url).then((res) => {
      console.log(this.props.type + ' ' + this.props.url + ' get')
      const datas = res.data
      this.setState({ datas })
      this.props.data=this.state.datas
    })
  }
  render() {
    const data = this.state.datas
    return '234'
  }
}

export default Get
