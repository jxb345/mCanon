import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App.jsx'

const Redirect = () => {
  return (
  <Router>
    <Route>
      <div>
      <Link to='/home'>Home</Link>
      </div>
      <Switch>
        <Route path="/home">
          <App />
        </Route>
      </Switch>
    </Route>
    </Router>
  )
}

export default Redirect