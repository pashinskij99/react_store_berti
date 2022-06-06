import React, { useEffect } from 'react';
import search_icon from "../../../assets/img/svg/search.svg";

const NavbarSearch = ({ onToggleSearch }) => {

    useEffect(() => {
        
    })

    return (
        <a href="#" onClick={ onToggleSearch }>
            <img src={ search_icon } alt="search_icon"/>
        </a>
    );
};

export default NavbarSearch;
