import { useState } from 'react'
import './App.css'
import {BrowserRouter as Route,Switch,Router} from 'react-router-dom'
import Navbar from '../navbar/navbar'
import SignUp from '../signUp/signUp'
import BlankRoute from '../blankRoute/blankRoute'
import BlankSeccondary from '../blankRoute/blankRouteSeccondary'


import LoginPage from '../loginPage/login'

import { createBrowserHistory } from "history"

const newHistory = createBrowserHistory();

function App() {
  return(
    <div id="body-container">
      <Router history={newHistory} >
        {/* router start */}
      <Navbar/>
      <Switch>
        {/* switch start */}
          {/* login start */}
            <Route exact path="/Login" >
              <LoginPage/>
            </Route>
          {/* login end */}
          {/* signup start */}
          <Route exact path='/Signup'>
            <SignUp/>
          </Route>
          {/* signup end */}
          {/* blank start */}
          <Route exact path='/'>
            <BlankRoute/>
            <BlankSeccondary/>
          </Route>
          {/* blank end */}
        {/* switch */}
      </Switch>
      {/* router end */}
      </Router>
    </div>
  )

}

export default App
