import React, { Component } from 'react'
import { View } from 'react-native'
import Svg, { Rect, Circle, Text } from 'react-native-svg'
import { SVG } from '@svgdotjs/svg.js'

class DrawTank extends Component {
  state = {
    capacity: '',
    height: '',
    diameter: '',
    type: '',
    OrderID: '',
  }
  state = {
    datas: [],
  }
  render() {
    var draw = SVG().addTo('svg').size(300, 300)
    var rect = draw.rect(100, 100).attr({ fill: '#f06' })
    return (
      <div id="DrawTank" className="Wrapper">
        <h2>DrawTank: </h2>
        <div id="svg"></div>
      </div>
    )
  }
}

export default DrawTank
