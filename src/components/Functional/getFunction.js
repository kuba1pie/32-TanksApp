import axios from 'axios'

let host = 'http://localhost:4000/'

function getFunction(path) {
  return axios.get(host + path).then((res) => {
    const datas = res.data
    return datas
  })
}
export default getFunction
