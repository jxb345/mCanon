import React, { useState } from 'react';
import App from './App.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Login.jsx'


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


  const verifyLogin = (e) => {
    let endpoint = '';
    console.log('e.target.value', e.target.value)
    const credentials = {
      username: username,
      password: password
    }

    if (e.target.value === 'SignUp') {
      endpoint = '/signup';
    } else {
      endpoint = '/login';
    }
    console.log('creditials------', credentials)
    fetch(endpoint, {
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
              <App username={username} />
            </Route>
          </Switch>
      </Router>
  )
}

export default Welcome