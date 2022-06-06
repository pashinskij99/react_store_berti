import React from 'react'

export const UserInfoPage = ({currentUser}) => {
  	return (
	<div className="info_page">
		<div className="info_page_wrapper">
			<div className="title">
				{currentUser.providerData[0].email}
			</div>
			<div className="user_name"></div>
			<hr />
			<div className="basket d-flex">
				<button className='btn'>Моя корзина</button>	
				<button className='btn like'>Понравившиеся</button>	
			</div>
		</div>
	</div>
  )
}
