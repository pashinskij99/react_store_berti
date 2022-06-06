import React, {useEffect, useRef, useState} from 'react'
import { useAuth } from "../../contexts/AuthContexts";
import { database } from '../../firebase/firestore';
import { onValue, ref } from 'firebase/database';
import { NavbarJSX } from './NavbarJSX';

import './Navbar.scss'

const Navbar = () => {
    const { currentUser } = useAuth()
    
    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState()
    const [currentData, setCurrentData] = useState()
    const [stylesForSearchCard, setStylesForSearchCard] = useState({display: 'none'})
    const inputSearch = useRef()
    const navbarRef = useRef()

    useEffect(() => {
        const dataList = []

        const categoryHydi = ref(database, 'category/')
		onValue(categoryHydi, (snapshot) => {
			const fullList = snapshot.val()
			for(const key in fullList) {
				const items = ref(database, `category/${key}`)
				onValue(items, (snapshot) => {
					const listItems = snapshot.val()
					for (const keyOfKey in listItems) {
						const items = ref(database, `category/${key}/${keyOfKey}`)
						onValue(items, (snapshot) => {
                            const item = {
                                name: snapshot.val().name,
                                id: snapshot.val().id,
                                category: snapshot.val().category,
                                imageUrl: snapshot.val().imageUrl,
                            }
							dataList.push(item)
						})
					}
				})
			}
			setData(dataList)
		})
        onMouseWheel(navbarRef.current)
    }, [])

    const onMouseWheel = (navbarRef) => {
		window.addEventListener('mousewheel', (element) => {
			if(window.pageYOffset >= 31) {
				// navbarRef.style.position = 'fixed'
				// navbarRef.style.zIndex = '3'
				// navbarRef.style.width = '100%'
				// navbarRef.style.top = '0'
			} else {
                // navbarRef.style.position = 'static'
				// navbarRef.style.zIndex = '3'
				// navbarRef.style.width = '100%'
            }
		})
	}

    const onFocus = () => {
        setStylesForSearchCard({display: 'block'})
    }

    const onBlur = () => {
        // setStylesForSearchCard({display: 'none'})
    }

    const searchInputOnChange = (event) => {
        const inputValue = event.target.value
        const currentData = data.filter(currentData => {
            console.log(currentData.name)
            if (inputValue === '') {
                return currentData.name;
            }
            else {
                return currentData.name.includes(inputValue)
            }
        })
        setCurrentData(currentData)
    }

    const onToggleSearch = () => {
        const body = document.querySelector('body')

        if(isActive === false) {
            setIsActive(true)
            body.style.overflow = 'hidden'
        }
        else {
            setIsActive(false)
            body.style.overflow = 'auto'
        }
    }

    const handleTabsClick = (event, selector) => {
        const sexTabs = document.querySelectorAll(`${selector} li a`)

        sexTabs.forEach(item => {
            item.classList.remove('active')
        })

        const target = event.target
        target.classList.add('active')
    }

    const handleClickHideModal = (event) => {
        const target = event.target
        if(target.classList.contains('form-hide')) {
            const body = document.querySelector('body')
            setIsActive(false)
            body.style.overflow = 'auto'
        }
    }

    return (
        <React.Fragment >
            <NavbarJSX 
                handleClickHideModal={handleClickHideModal} 
                handleTabsClick={handleTabsClick}
                onToggleSearch={onToggleSearch} 
                searchInputOnChange={searchInputOnChange}  
                onBlur={onBlur}
                onFocus={onFocus}
                stylesForSearchCard={stylesForSearchCard}
                inputSearch={inputSearch}
                currentUser={currentUser}
                currentData={currentData}
                isActive={isActive}
                navbarRef={navbarRef}
            />
        </React.Fragment>
    );
};

export default Navbar;
