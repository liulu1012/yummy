import React from 'react'
import './App.css'
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Loginin from './ui/pages/Loginin/Loginin.js'
import Sidebar from './ui/shared/Sidebar/Sidebar.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/loginin' component={Loginin} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
