import React from 'react';
import './SalesCard.scss'

import sale_icon from '../../../assets/img/sale/sale.png'

const SalesCard = () => {
    return (
        <div className='sales-card'>
            <div className="container">
                <ul className='sales-list'>
                    <li className='sales-item'>
                        <img src={ sale_icon } alt=""/>
                        <button>Перейти</button>
                    </li>
                    <li className='sales-item'>
                        <img src={ sale_icon } alt=""/>
                        <button>Перейти</button>
                    </li>
                    <li className='sales-item'>
                        <img src={ sale_icon } alt=""/>
                        <button>Перейти</button>
                    </li>
                    <li className='sales-item'>
                        <img src={ sale_icon } alt=""/>
                        <button>Перейти</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SalesCard;
