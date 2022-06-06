import React from 'react';
import './SalesCard.scss'

import sale_icon1 from '../../../assets/img/sale/sale1.png'
import sale_icon2 from '../../../assets/img/sale/sale2.jpg'
import sale_icon3 from '../../../assets/img/sale/sale3.jpg'
import sale_icon4 from '../../../assets/img/sale/sale4.jpg'

const SalesCard = () => {
    return (
        <div className='sales-card'>
            <div className="container">
                <ul className='sales-list'>
                    {
                        [sale_icon1, sale_icon2, sale_icon3, sale_icon4].map((item, key) => {
                            return (
                                <li key={key} className='sales-item'>
                                    <img src={ item } alt=""/>
                                    <button>Перейти</button>
                                </li>
                            ) 
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default SalesCard;
