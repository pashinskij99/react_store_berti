import React from 'react'
import { UserContentPage } from './UserContentPage/UserContentPage'
import { UserInfoPage } from './UserInfoPage/UserInfoPage'
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
		<div className='user-page'>
			<UserContentPage 
				userProfileImg={undefined_img}
			/>
			<UserInfoPage 
				currentUser={currentUser}
			/>
		</div>
	)
}
