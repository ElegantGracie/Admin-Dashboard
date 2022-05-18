import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='form'>
        <form>
          <h1 style={{textAlign:'center'}}>WELCOME!</h1>
          <label for='email'>Email</label><br/>
          <input type='text' id='username' /><br/><br/>

          <label for='password'>Password</label><br/>
          <input type='password' id='password' /><br/>
          <Link to='/Home'><button>Login</button></Link>
        </form>
    </div>
  )
}

export default Login