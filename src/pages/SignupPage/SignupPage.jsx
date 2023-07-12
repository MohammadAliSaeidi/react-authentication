import React, {useState} from 'react';
import './SignupPage.scss';
import {validateEmail, validatePassword, validateUsername} from "../../services/InputValidator";
import AuthInput from "../../components/AuthInput/AuthInput";

let username = '';
let password = '';
let email = '';

function SignupPage() {

	const [showPassword, setShowPassword] = useState(false)

	const [usernameError, setUsernameError] = useState("")
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")

	const authFieldClassName = 'auth-field-container'

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setUsernameError(validateUsername(username))
		setEmailError(validateEmail(email))
		setPasswordError(validatePassword(password))
	}

	function onUsernameInputChange(e) {
		username = e.target.value
		setTimeout(() => {
			const validationResult = validateUsername(username)
			setUsernameError(validationResult)
		}, 1000)
	}

	function onEmailInputChange(e) {
		email = e.target.value
		setTimeout(() => {
			setEmailError(validateEmail(email))
		}, 1000)
	}

	function onPasswordInputChange(e) {
		password = e.target.value
		setTimeout(() => {
			setPasswordError(validatePassword(password))
		}, 1000)
	}

	return <div className='signup'>
		<form className='signup-form' onSubmit={handleOnSubmit} noValidate>
			{/*Username*/}
			<AuthInput inputType='text' label='Username' minInputLength={6} maxInputLength={30} validator={validateUsername} />

			{/*Email*/}
			<AuthInput inputType='email' label='Email' minInputLength={0} maxInputLength={50} validator={validateEmail} />

			{/*Password*/}
			<AuthInput inputType='password' label='Password' minInputLength={8} maxInputLength={30} validator={validatePassword} />

			{/*Submit Button*/}
			<input
				className='submit'
				type="submit"
				value="Signup"
			/>
		</form>
	</div>;
}

export default SignupPage;
