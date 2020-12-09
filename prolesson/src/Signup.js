import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
function Signup() {
    return (
        <div className='container'>
            <form>
            <h>WELCOME TO MY WEATHER APP</h> <br></br>
                <input type='text' placeholder='Username'/> <br/>
                <input type='text' placeholder='Email'/> <br/>
                <input type='text' placeholder='Password'/>  <br/>
                <button>Signup</button>
                <p>Already have an account? <Link to='/'>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup
