import { Component } from 'react'
import axios from 'axios'

let host = 'https://tanksvueapi.azurewebsites.net/'

class Get extends Component {
  handleDataChange(par)  {
    this.props.handleData(par.datas)
  }
  componentDidMount() {
    axios.get(host + this.props.path).then((res) => {
      const datas = res.data
      this.handleDataChange({ datas });
    })
  }
  render() {
    return null
  }
}

export default Get
