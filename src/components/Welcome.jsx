import React, { useState, useEffect, useCallback} from 'react';
import App from './App.jsx';
import Info from './Info.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Login from './Login.jsx'


const Welcome = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ redirect, setRedirect ] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const form = e.target.id;
    const value = e.target.value;
    if (form === 'login-username' || form === 'signup-username') {
      setUsername(value, ...username)
    } else if(form === 'email' ) {
      setEmail(value, ...email)
    } else {
      setPassword(value, ...password)
    }
  }

  let history = useHistory();
  // let location = useLocation();

  const changeRedirect = () => {
    setRedirect(true)
  };

  const verifyAuth = (e) => {

    let endpoint = '/' + e.target.value;
    const credentials = {
      username: username,
      password: password,
      email: email || ''
    }

    fetch(endpoint, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
    .then(data => {
      console.log('data', data)
      changeRedirect();
      console.log('redirect ------res', redirect)
    })
}

  useEffect(() =>{
    console.log('redirect ---- uE', redirect)
  }, [redirect])


  return (
    <div>
    {
      !redirect ?
        <Login
          handleChange={handleChange}
          verifyAuth={verifyAuth}
        />
      :
        <Router>
            <Redirect to="/home" />
              <Switch>
              <Route path="/home">
                <App
                username={username}
                redirect={redirect} />
              </Route>
              <Route path="info">
                <Info />
              </Route>
              </Switch>
        </Router>
    }
    </div>
  )
}

export default Welcome