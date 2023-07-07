import React from 'react';
import './SignupPage.css'

function SignupPage() {
    return (<div className='signup'>
        <form action="">
            <div className='signup-field'>
                <label htmlFor="username">Username or Email</label>
                <input type="text" name='username' required/>
            </div>

            <div className='signup-field'>
                <label htmlFor="email">Username or Email</label>
                <input type="text" name='email'/>
            </div>

            <div className='signup-field'>
                <label htmlFor="password">Password</label>
                <input type="text" name='password' required/>
            </div>

            <button type={"submit"}>Signup</button>
        </form>
    </div>);
}

export default SignupPage;