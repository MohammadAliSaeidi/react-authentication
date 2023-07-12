import React, {useState} from "react";
import './AuthInput.css'

let inputValue = '';

export default function AuthInput({inputType, label, validator, minInputLength, maxInputLength}) {
	const [inputError, setInputError] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	let authFieldClassName;
	let Input;

	const onInputChange = (e) => {
		inputValue = e.target.value
		setTimeout(() => {
			const validationResult = validator(inputValue)
			setInputError(validationResult)
		}, 2000)
	}

	switch (inputType) {
		case 'password': {
			authFieldClassName = 'password-field-container'
			Input =
				<PasswordInput inputError={inputError} onInputChange={onInputChange} setShowPassword={setShowPassword}
							   showPassword={showPassword}/>
		}
			break

		default : {
			authFieldClassName = 'auth-field-container'
			Input = <DefaultInput inputType={inputType} onInputChange={onInputChange} inputError={inputError}
								  authFieldClassName={authFieldClassName}/>
		}
	}

	return <div className={authFieldClassName}>
		<label>
			<span className='label-text'>{label}</span>
			{Input}
		</label>
		{inputError !== "" ? <div className='error-message'>{inputError}</div> : ""}
	</div>
}

function PasswordInput({inputError, onInputChange, showPassword, setShowPassword}) {
	const inputErrorClass = inputError !== '' ? 'input-error' : ''
	return <div className={'input-container ' + inputErrorClass}>
		<input
			className={'input'}
			onChange={onInputChange}
			type={showPassword ? 'text' : 'password'}
			minLength={8}
			maxLength={30}
		/>
		<input className='show-password'
			   type="checkbox"
			   onChange={e => setShowPassword(e.target.checked)}
		/>
	</div>
}

function DefaultInput({inputType, authFieldClassName, onInputChange, inputError}) {
	const inputErrorClass = inputError !== '' ? 'input-error' : ''
	return <div className={authFieldClassName}>
		<input
			className={'input ' + inputErrorClass}
			onChange={onInputChange}
			type={inputType}
		/>
	</div>
}