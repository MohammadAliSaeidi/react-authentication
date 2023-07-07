import React, {useState} from 'react';
import './SignupPage.css';
import {validateUsername, validateEmail, validatePassword} from "../../services/InputValidator";

let username = '';
let password = '';
let email = '';

function SignupPage() {

    const [showPassword, setShowPassword] = useState(false)

    const [usernameError, setUsernameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const authFieldClassName = 'auth-field'

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setUsernameError(validateUsername(username))
        setEmailError(validateEmail(email))
        setPasswordError(validatePassword(password))
    }

    let usernameTimeout = null;

    function onUsernameInputChange(e) {
        username = e.target.value
        setTimeout(() => {
            const validationResult = validateUsername(username)
            setUsernameError(validationResult)
        }, 1000)
    }

    let emailTimeout = null;

    function onEmailInputChange(e) {
        email = e.target.value
        setTimeout(() => {
            setEmailError(validateEmail(email))
        }, 1000)
    }

    let passwordTimeout = null;

    function onPasswordInputChange(e) {
        clearTimeout(passwordTimeout); // Clear previous timeout
        password = e.target.value
        setTimeout(() => {
            setPasswordError(validatePassword(password))
        }, 1000)
    }

    return (<div className='signup'>
        <form onSubmit={handleOnSubmit} noValidate>
            {/*Username*/}
            <div className={authFieldClassName}>
                {usernameError !== "" && <div>{usernameError}</div>}
                <label htmlFor="username">Username</label>
                <input
                    onChange={onUsernameInputChange}
                    type="text"
                    name='username'
                    minLength={6}
                    maxLength={30}
                />
            </div>

            {/*Email*/}
            <div className={authFieldClassName}>
                {emailError !== "" && <div>{emailError}</div>}
                <label htmlFor="email">Email</label>
                <input
                    onChange={onEmailInputChange}
                    type="email"
                    name='email'
                />
            </div>

            {/*Password*/}
            <div className={authFieldClassName}>
                {passwordError !== "" && <div>{passwordError}</div>}
                <label htmlFor="password">Password</label>
                <input
                    onChange={onPasswordInputChange}
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    minLength={8}
                    maxLength={30}
                />
                <input
                    type="checkbox"
                    onChange={e => setShowPassword(e.target.checked)}
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
