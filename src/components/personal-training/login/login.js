import PropTypes from 'prop-types';
import { useState } from 'react';
import "./login.css"
import { GrFingerPrint } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import HomeButton from '../HomeButton';





async function loginUser(credentials) {

  return fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

function Login({ setToken }) {
  

  // document.querySelector(".nav-container").style.opacity="0"
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    console.log(token.id)
  }

    return(
      <div className='main-login'>
   
           <div className="login">
          <div className='finger-print-icon'>
              <div>
                  <GrFingerPrint size={100} />
              </div>
          </div>
          <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='sign'>
            <IoPerson />
            <h1>Sign in</h1>
          </div>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Sing in</button>
          </div>
        </form>
          </div>
        
      </div>
      </div>
       
    )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;