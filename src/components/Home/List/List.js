import React, { useEffect, useState } from 'react'
import { ref, onValue} from 'firebase/database'
import { database } from '../../../firebase/firestore'
import { Link } from 'react-router-dom'

import './List.scss'

const List = ({ title, fullList = false, category = 'Куртки' }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if(data) setData(null)   
        const dataList = []
        switch (fullList) {
            case true :
                onValue(ref(database, 'category/'), (snapshot) => {
                    const fullList = snapshot.val()
                    for(const key in fullList) {
                        const items = ref(database, `category/${key}`)
                        onValue(items, (snapshot) => {
                            const listItems = snapshot.val()
                            for (const keyOfKey in listItems) {
                                const items = ref(database, `category/${key}/${keyOfKey}`)
                                onValue(items, (snapshot) => {
                                    dataList.push(snapshot.val())
                                })
                            }
                        })
                    }
                    setData(dataList)
                })
            break;
            case false :
                onValue(ref(database, `category/${category}/`), (snapshot) => {
                    const list = snapshot.val()
                    for(const key in list) {
                        const items = ref(database, `category/Куртки/${key}`)
                        onValue(items, (snapshot) => {
                            const itemValue = snapshot.val()
                            dataList.push(itemValue)
                        }) 
                    }
                    setData(dataList)
                })
            break;
        }

    }, [])

    return (
        <div className='list'>
            <div className="container">
                <h1>{title}</h1>
                <div className="grid-column">
                    {
                        data && data.map((product, key) => {
                            const productPrice = Math.floor(Number(product.price) / 1.5)
                            
                            let ArrOfTrueSize = []
					        for (let key in product.sizes) if(product.sizes[key]) ArrOfTrueSize.push(key)

                            return (
                                <Link to={`/product/${product.category}/${product.id}`} className='card' key={key}>
                                    <div className="card-img">
                                        <img src={product.imageUrl} alt="img"/>
                                    </div>
                                    <div className="item-body">
                                        <div className="name">{product.name}</div>
                                        <ul className="sizes">
                                            {
                                                ArrOfTrueSize.map((size, key) => {
                                                    return <li key={key}>{size}</li>
                                                })
                                            }
                                        </ul>
                                        <div className="price">
                                            <span className="sale">{productPrice} грн</span>
                                            <span className="before-sale">{product.price} грн</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default List;

