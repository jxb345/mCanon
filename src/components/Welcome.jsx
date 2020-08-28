import React, { useState, useEffect, useCallback} from 'react';
import App from './App.jsx';
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
  const [ redirect, setRedirect ] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    console.log('e.id', e.target.id)
    if (e.target.id === 'login-username' || e.target.id === 'signup-username') {
      setUsername(e.target.value, ...username)
    } else {
      setPassword(e.target.value, ...password)
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
      password: password
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
              {/* <Switch> */}
              <Route path="/home">
                <App username={username} redirect={redirect} />
              </Route>
              {/* </Switch> */}
        </Router>
    }
    </div>
  )
}

export default Welcome