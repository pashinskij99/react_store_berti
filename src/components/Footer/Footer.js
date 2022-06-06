import React from 'react'

import './Footer.scss'

import facebook from '../.././assets/img/svg/social-list/facebook.svg'
import instagram from '../.././assets/img/svg/social-list/instagram.svg'
import viber from '../.././assets/img/svg/social-list/viber.svg'
import telegram from '../.././assets/img/svg/social-list/telegram.svg'

export const Footer = () => {

	const obj = {
		1 : ['Загрузка', 'Скидки', 'Новинки', 'Одежда', 'Обувь', 'Аксессуары'],
		2 : ['Информация', 'Магазины', 'О нас', 'Доставка и оплата', 'Новости и отзывы', 'Вакансии'],
		3 : { 
			a : ['КОНТАКТЫ'], 
			b : [ facebook, instagram, telegram, viber ]
		}, 
		4 : 
		
	}

  	return (
		<div className='footer'>
			<div className="footer_wrapper">
				<ul>

				</ul>
			</div>
		</div>
  	)
}
