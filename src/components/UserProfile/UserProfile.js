import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContexts'
import { useNavigate } from 'react-router-dom'
import undefined_img from '../../assets/img/png/undefined_img.png'

import './UserProfile.scss'

export const UserProfile = () => {
	const { currentUser, logout } = useAuth()
	const history = useNavigate()

	const handleLogout = async () => {
		try {
			await logout()
			history('/signin')
		} catch (e) {
			console.log(e)
		}
	}

  	return (
		<div className='user-profile'>
			<div className='container'>
				<div className="user_info">
					<Card style={{ width: '18rem' }}>
					<Card.Img variant="top" src={ undefined_img } />
					<Card.Body>
						<Card.Title>{currentUser && currentUser.email }</Card.Title>
						<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
						</Card.Text>
						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
					</Card>
				</div>
				<nav>
					<div className="logout_btn">
						<Button variant='secondary' onClick={handleLogout}>Logout</Button>
					</div>
				</nav>
			</div>
		</div>
	)
}
