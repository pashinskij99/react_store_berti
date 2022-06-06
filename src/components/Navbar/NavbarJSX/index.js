import React, {useEffect, useRef, useState} from 'react'

import { Form, Card } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import NavbarSearch from "../NavbarSearch/NavbarSearch";

import logo_icon from '../../../assets/img/svg/logo.svg'
import heart_icon from '../../../assets/img/svg/heart.svg'
import user_icon from '../../../assets/img/svg/user.svg'
import basket_icon from '../../../assets/img/svg/basket.svg'

export const NavbarJSX = ({
	handleClickHideModal,
	handleTabsClick,
	onToggleSearch,
	searchInputOnChange,
	onBlur,
	onFocus,
	stylesForSearchCard,
	inputSearch,
	currentUser,
	currentData,
	isActive,
	navbarRef
}) => {
	const [sexTabs] = useState(
        ['Парни', 'Девушки', 'Дети']
    )
    const [categoryTabs] = useState(
        ['Скидки', 'Новинки', 'Одежда', 'Обувь', 'Аксессуары']
    )

	const firstNav = useRef()
	const history = useNavigate()

	// return null

  	return (
		<React.Fragment >
			<div className="navbar">
				<div className="first-nav" ref={firstNav} >
					<div className="container">
						<div className="change-lang">
							<button>RU</button>
							/
							<button>UKR</button>
						</div>
						<div className="mobile_phones">
							<a href="tel:380665584542">+380665584542</a>
							<a href="tel:380675564555">+380675564555</a>
						</div>
					</div>
				</div>
			</div>
		<div className='navbar'>
			<div className="second-nav" ref={navbarRef}>
				<div className="container">
					<div className="logo">
						<a href="/">
							<img src={ logo_icon } alt="logo"/>
						</a>
					</div>
					<nav className="nav">
						<ul className='sex' onClick={ (event) => handleTabsClick( event, '.sex' ) }>
							{
								sexTabs.map((item, i) => {
									return (
										<li key={i}>
											{
												i === 1
													? <a className='active' href="#">{item}</a>
													: <a href="#">{item}</a>
											}
										</li>
									)
								})
							}
						</ul>
						<ul className='category' onClick={ (event) => handleTabsClick( event, '.category' ) }>
							{
								categoryTabs.map((item, i) => {
									return (
										<li key={i}>
											{
												i === 0
													? <a className='active' href="#">{item}</a>
													: <a href="#">{item}</a>
											}
										</li>
									)
								})
							}
						</ul>
					</nav>
					<div className="nav-icons">
						<ul>
							<li>
								<NavbarSearch onToggleSearch={onToggleSearch} />
							</li>
							<li>
								<a href="/">
									<img src={ heart_icon } alt="heart_icon"/>
								</a>
							</li>
							<li>
								{
									currentUser
										?   <Link to="/user_profile">
												<img src={ user_icon } alt="user_icon"/>
											</Link>
										:   <Link to="/signin">
												<img src={ user_icon } alt="user_icon"/>
											</Link>
								}

							</li>
							<li>
								<a href="/">
									<img src={ basket_icon } alt="basket_icon"/>
								</a>
							</li>
						</ul>
						{
							isActive &&
							<Form className='form form-hide' onClick={handleClickHideModal}>
								<Form.Group className='form-input-wrapper'>
									<Form.Group className='d-flex'>
										<Form.Select 
											className='form-input-select' 
											size='lg' 
										>
											<option>Парни</option>
											<option>Девушки</option>
											<option>Дети</option>
										</Form.Select>
										<Form.Control
											className='form-input-search'
											onBlur={onBlur}
											onFocus={onFocus}
											onChange={searchInputOnChange}
											ref={inputSearch}
											type="text"
											placeholder="Search..."
											size='lg'
										/>
									</Form.Group>
									<Card style={stylesForSearchCard}
										onClick={(event) => {
											console.log(event.target);
										}}
									>
										<ul className='search_results'
											
										>
											{
												currentData && currentData.map((item, i) => {
													if(i <= 10) {
														return (
															<button
																className='btn'
																variant='light'
																key={i}
																onClick={() => {
																	history(`/product/${item.category}/${item.id}`)
																}}
															>
																<img width={30} src={item.imageUrl} alt="img" />
																{
																	item.name
																}
															</button>
														)
													}
												})
											}
										</ul>
									</Card>
								</Form.Group>
							</Form>
						}
					</div>
				</div>
			</div>
		</div>
	</React.Fragment>
  )
}
