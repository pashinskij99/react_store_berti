import React, { useEffect, useRef } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from '../../contexts/AuthContexts'

import { SignUpForm } from './SignUpForm/SignUpForm'
import { database } from '../../firebase/firestore';

export const SignUp = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { signup, currentUser } = useAuth()

	useEffect(() => {
		// console.log('hola');
	})

	const writeUserData = (userId, name, email, imageUrl) => {
		// const db = getDatabase();
		set(ref(database, 'users/' + userId), {
			username: name,
			email: email,
			profile_picture : imageUrl
		});
	}
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		
		try {
            await signup(emailRef.current.value, passwordRef.current.value)
		} catch (e) {}
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
