import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
        <form>
          <label for='email'>Email</label><br/>
          <input typeof='text' id='username' /><br/><br/>

          <label for='password'>Password</label><br/>
          <input typeof='password' id='password' /><br/>
          <button><Link to='/Home'>Login</Link></button>
        </form>
    </div>
  )
}

export default Login