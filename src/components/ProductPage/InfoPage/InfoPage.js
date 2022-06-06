import React from 'react';

import size_icon from '../../../assets/img/png/size.png'
import notification_icon from '../../../assets/img/png/notification.png'
import heart_icon from '../../../assets/img/svg/heart_product-page.svg'

import './InfoPage'

const InfoPage = ({ data }) => {

    const priceSale = Math.floor(Number(data.price / 1.5)) 
    let sizes = []
    for(const key in data.sizes) {
        if(data.sizes[key]) sizes.push(key);
    }

    return (
        <div className="info_page">
            <div className="category">
                <p>главная    /    девушки    /    одежда    /    {data.category.toLowerCase()}</p>
            </div>
            <div className="title">
                {data.name}
            </div>
            <div className="price">
                <span className='price_after-sale'>{priceSale} грн</span>
                <span className='price_before-sale'>{data.price} грн</span>
            </div>
            <hr/>
            <div className="size">
                <div className="size-title">Размер:</div>
                <ul className="sizes-list">
                    {
                        sizes.map((item, i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })
                    }
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
                <div className="title">О товаре</div>
                <div className="description">
                    {
                        data.descr
                    }
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
