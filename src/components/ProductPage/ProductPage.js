import React, {useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import ContentPage from "./ContentPage/ContentPage";
import InfoPage from "./InfoPage/InfoPage";
import { database } from '../../firebase/firestore';
import './ProductPage.scss'
import arrow from '../../assets/img/svg/arrow.svg'
import { onValue, ref } from 'firebase/database';

const SampleNextArrow = React.forwardRef((props, ref) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} next_arrow`}
            ref={ref}
            onClick={onClick}
        >
            <img src={arrow} alt="arrow"/>
        </div>
    );
})

const ProductPage = () => {
    const [data, setData] = useState(null)
    const sliderRef = useRef(null)
    const arrowNextRef = useRef(null)

    const params = {
        id: useParams().id,
        category: useParams().category
    }

    useEffect( () => {
        const categoryHydi = ref(database, `category/${params.category}/${params.id}`)
		onValue(categoryHydi, (snapshot) => {
            setData(snapshot.val())
		})
    }, [])

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow ref={arrowNextRef} />
    };

    if(!data) return null

    return (
        <div className='product-page'>
            <ContentPage data={data} arrowNextRef={arrowNextRef} sliderRef={sliderRef} settings={settings} />
            <InfoPage data={data} />
        </div>
    );
};

export default ProductPage;
