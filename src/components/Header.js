import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    return (
      <header className="Header Column">
        <div className="Menu">
          <ul>
            <li className="Menu-Item">
              <Link to="/">Home</Link>
            </li>
            <li className="Menu-Item">
              <Link to="/clients">Clients</Link>
            </li>
            <li className="Menu-Item">
              <Link to="/orders">Orders</Link>
            </li>
            <li className="Menu-Item">
              <Link to="/tanks">Tanks</Link>
            </li>
            <li className="Menu-Item">
              <Link to="/supplies">Supplies</Link>
            </li>
            <li className="Menu-Item">
              <Link to="/materials">Materials</Link>
            </li>
            <li className="Menu-Item">
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
