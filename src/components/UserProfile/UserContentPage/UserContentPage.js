import React from 'react'

export const UserContentPage = ({ userProfileImg }) => {
  return (
	<div className="user_content_page">
		<div className="user_profile_img">
			<div>
				<img src={userProfileImg ? userProfileImg : null} alt="" />
				<div className="user_name">

				</div>
			</div>
		</div>
	</div>
  )
}
