import React from 'react';

import size_icon from '../../../assets/img/png/size.png'
import notification_icon from '../../../assets/img/png/notification.png'
import heart_icon from '../../../assets/img/svg/heart_product-page.svg'

const InfoPage = ({}) => {
    return (
        <div className="info_page">
            <div className="category">
                <p>главная    /    девушки    /    одежда    /    кофты,свитшоты</p>
            </div>
            <div className="title">
                {'Джемпер Zolla'}
            </div>
            <div className="price">
                <span className='price_after-sale'>2670 грн</span>
                <span className='price_before-sale'>4000 грн</span>
            </div>
            <hr/>
            <div className="size">
                <div className="size-title">Размер:</div>
                <ul className="sizes-list">
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>XL</li>
                </ul>
                <div className="helps-btns">
                    <button>
                        <img
                            src={size_icon}
                            alt="123"
                        />
                        <span>Размеры</span>
                    </button>
                    <button>
                        <img
                            src={notification_icon}
                            alt="123"
                        />
                        <span>Подписаться на размер</span>
                    </button>
                </div>
                <div className="btns-actions">
                    <button className='btn-basket' >Добавить в корзину</button>
                    <button className='btn-like'>
                        <img src={heart_icon} alt="like" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
