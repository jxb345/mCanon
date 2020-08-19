import React from 'react';
import App from './App.jsx';
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
const { Switch } = require('react-router-dom');


const Login = () => {

  return (
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
      <form action="/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username"/>
        </div>
        <div>
        <label>Password:</label>
          <input type="text" name="password"/>
        </div>
        <div>
          <input type="submit" value="LogIn"/>
        </div>

      </form>

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
    <Route>
      <div>
      <Link to='/home'>App</Link>
      </div>
      <Switch>
        <Route path="/home">
          <App />
        </Route>
      </Switch>
    </Route>
    </div>
    </div>
  )
}

export default Login