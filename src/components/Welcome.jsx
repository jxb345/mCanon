import React, { useState } from 'react';
import App from './App.jsx';
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;
// const { Switch } = require('react-router-dom');
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Login.jsx'
// import Redirect from './Redirect.jsx';


const Welcome = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ redirect, setRedirect ] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    console.log('e.id', e.target.id)
    if (e.target.id === 'login-username' || e.target.id === 'signup-username') {
      setUsername(e.target.value, ...username)
      console.log('username', username);
    } else {
      setPassword(e.target.value, ...password)
      console.log('password', password);

    }
  }


  const verifyLogin = () => {
    const credentials = {
      username: username,
      password: password
    }
    console.log('creditials------', credentials)
    fetch('/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
    .then(data => {
      setRedirect(true)
      console.log('redirect', redirect)
    })
  }


  return (
    !redirect ?
      <Login
        handleChange={handleChange}
        verifyLogin={verifyLogin}
      />
    :
      <Router>
          <Redirect to="/home" />
          <Switch>
            <Route path="/home">
              <App />
            </Route>
          </Switch>
      </Router>
  )
}

export default Welcome