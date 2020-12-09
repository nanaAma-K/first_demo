import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
function Login() {
    return (
        <div>
           
            <form>
            <h>WELCOME TO MY WEATHER APP</h> <br></br>
                <input type='text' placeholder='Username'/> <br/>
                <input type='text' placeholder='Password'/>  <br/>
              <Link to='/home'>  <button>Login</button></Link>
                <p>Don't have an account? <Link to='/signup'>SignUp</Link></p>
            </form>
        </div>
    )
}

export default Login
