import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate ()


axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios.post('http://localhost:3001/auth/login', {email, password})
    .then(res => {
      if (res.data.login){
        navigate('/home')
      }
  })
    .catch(err => console.log(err))

  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Log In To Your Account</h2> <br /> <br />
        <div className="form-group">
          <label htmlFor='email'>Email  </label>
          <input type='text' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} />
        </div> <br />
        <div className="form-group">
          <label htmlFor='password'>Password  </label>
          <input type='password' placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} />
        </div> <br />
        <button className='btn-login' onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  )
}

export default Login