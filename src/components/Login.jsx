import React from 'react';
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


const Login = () => {

  const redirectToHome = false;

  const login = () => {
    fetch('/login', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(),
    })
    .then(data => {
      console.log('data')
    })
  }


  return (
    <Router>
    <div>
      <div className="title">
        mCanon
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
          <input type="text" name="username"/>
        </div>
        <div>
        <label>Password:</label>
          <input type="text" name="password"/>
        </div>
        <div>
          <button onSubmit={login} type="submit" value="LogIn"/>
        </div>

      </div>

      <form action="/signup" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username"/>
        </div>
        <div>
        <label>Password:</label>
          <input type="text" name="password"/>
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
    </Router>
  )
}

export default Login