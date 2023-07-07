import React, {useState} from 'react';
import './SignupPage.css';
import {IsEmail} from "../../services";

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        console.log(IsEmail(email));
    };

    return (<div className='signup'>
            <form onSubmit={handleOnSubmit}>
                <div className='signup-field'>
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        name='username'
                        required
                    />
                </div>

                <div className='signup-field'>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name='email'
                    />
                </div>

                <div className='signup-field'>
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                        name='password'
                        required
                    />
                </div>

                <input
                    type="submit"
                    value="Signup"
                />
            </form>
        </div>);
}

export default SignupPage;
