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
  Link
} from "react-router-dom";
import passport from 'passport';


const Login = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const redirectToHome = false;

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


  const login = () => {
    fetch('/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(state),
    })
    .then(data => {
      console.log('data',)
      state.redirectToHome = true;
    })
  }


  return (
    <Router>
    <div>
      <div className="title">
        mCanon

      </div>
      <br/>
      <div className="tabs-new-entry">
      <div className="form">
      <div className="tabs-new-entry-links">
                <button type="button" id="login">
                  LOGIN
                </button>
                <button type="button" id="sign-up" >
                  SIGN UP
                </button>
              </div>
      <div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" id="login-username" onChange={handleChange}/>
        </div>
        <div>
        <label>Password:</label>
          <input type="text" name="password" id="lgoin-password" onChange={handleChange} />
        </div>
        <div>
          <button onSubmit={login} type="submit" value="LogIn"/>
        </div>

      </div>

      <form action="/signup" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username" id="signup-username" onChange={handleChange}/>
        </div>
        <div>
        <label>Password:</label>
          <input type="text" name="password" id="signup-password" onChange={handleChange}/>
        </div>
        <div>
          <input type="submit" value="SignUp"/>
        </div>

      </form>
    </div>
    </div>
    <div>
    </div>
    </div>
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

export default Login