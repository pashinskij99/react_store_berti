import React, { Fragment } from 'react';
import List from './List/List';
import SalesCard from "./SalesCard/SalesCard";

import './Home.scss'

const Home = () => {
    return (
        <Fragment>
            <div className='home'>
                <div className="container">
                    <button>Перейти</button>
                </div>
            </div>
            <SalesCard />
            <List title='Скидки' />
            <List title='Новинки' amountCard={12} albumId={4} />
        </Fragment>
    );
};

export default Home;
