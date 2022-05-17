import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='form'>
        <form>
          <label for='email'>Email</label><br/>
          <input typeof='text' id='username' /><br/><br/>

          <label for='password'>Password</label><br/>
          <input type='password' id='password' /><br/>
          <button><Link to='/Home' className='text-link'>Login</Link></button>
        </form>
    </div>
  )
}

export default Login