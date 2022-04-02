import React from 'react'
import { Button, Form } from "react-bootstrap"

const SignInForm = ({ handleSubmit, emailRef, passwordRef }) => {
    return (
        <Form className='card' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='btn' type="submit">
                Login
            </Button>
        </Form>
    )
}

export default SignInForm
