import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
// Components
import Clients from './Clients/Clients'
import CreateClient from './Clients/CreateClient'
import Client from './Clients/Client'

import Orders from './Orders/Orders'
import CreateOrder from './Orders/CreateOrder'
import Order from './Orders/Order'
import EditOrder from './Orders/EditOrder'

import Tanks from './Tanks/Tanks'
import Tank from './Tanks/Tank'
import EditTank from './Tanks/EditTank'

import Supplies from './Supplies/Supplies'
import Supply from './Supplies/Supply'
import EditSupply from './Supplies/EditSupply'

import Materials from './Materials/Materials'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/clients/create" component={CreateClient} />
          <Route exact path="/client/:id" component={Client} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/orders/create" component={CreateOrder} />
          <Route exact path="/order/:id" component={Order} />
          <Route exact path="/tanks" component={Tanks} />
          <Route exact path="/tank/:id" component={Tank} />
          <Route exact path="/supplies" component={Supplies} />
          <Route exact path="/supply/:id" component={Supply} />
          <Route exact path="/tankedit" component={EditTank} />
          <Route exact path="/orderedit" component={EditOrder} />
          <Route exact path="/supplyedit" component={EditSupply} />
          <Route exact path="/materials" component={Materials} />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
