import React, { useRef } from 'react'
import SignInForm from "./SignInForm/SignInForm"
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from 'react-router-dom'

import './SignIn.scss'

const SignIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()

    const history = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await login(emailRef.current.value, passwordRef.current.value)
            history('/user_profile')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='sign_in'>
            <SignInForm
                handleSubmit={handleSubmit} emailRef={emailRef}
                passwordRef={passwordRef}
            />
        </div>
    );
}

export default SignIn
