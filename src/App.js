import React, { Component} from 'react'
import {HashRouter, Link} from 'react-router-dom'
import House from './Components/House/House'

import './App.css'
import routes from './routes'

class App extends Component {
  constructor (){
    super()
    this.state = {
      currentView: 'Dashboard'
    }
  }
render (){
  let {currentView} = this.state
  return (
  
    <HashRouter>

    <div className="App">
    <Link to="/" className="Dashboard">Dashboard</Link>
    <Link to="/wizard" className="Wizard">Wizard</Link>

      {routes}
      <House />
    </div>

    </HashRouter>
    )
  }
}

export default App;
