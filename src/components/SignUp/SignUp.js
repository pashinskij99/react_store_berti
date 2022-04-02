import React, { useRef } from 'react'
import { useAuth } from '../../contexts/AuthContexts'

import { SignUpForm } from './SignUpForm/SignUpForm'

export const SignUp = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { signup, currentUser } = useAuth()
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		
		try {
            await signup(emailRef.current.value, passwordRef.current.value)
			console.log(currentUser);
		} catch (e) {
			console.log(e);
		}
	}

  	return (
		<div className='sign_in'>
			<SignUpForm 
				handleSubmit={handleSubmit} 
				emailRef={emailRef} 
				passwordRef={passwordRef} 
			/>
		</div>		
  	)
}
