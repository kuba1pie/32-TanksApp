import React, { Component } from 'react'

class DrawTank extends Component {
  state = {
    height: 21,
    diameter: this.props.tank,
    tanks: 0,
  }

  render() {
    let { tanks } = this.state
    return (
      <div id="DrawTank" className="Wrapper">
        <h2>DrawTank: </h2>
        <div id="svg">
          <input
            type="text"
            value={this.state.diameter}
            onChange={(e) => this.setState({ diameter: e.target.value })}
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <g fill="#888">
              <circle cx="100" cy="100" r={this.state.diameter} />
              <rect x="50" y="100" width={this.state.diameter*10} height={this.state.height} />
              <polygon points="50,80 100,100 50,100" />
              <path d="M520.5 78.1z" />
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default DrawTank
