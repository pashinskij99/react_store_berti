import React, {useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import Service from "../../service/service";

import ContentPage from "./ContentPage/ContentPage";
import InfoPage from "./InfoPage/InfoPage";
import './ProductPage.scss'
import arrow from '../../assets/img/svg/arrow.svg'

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

    const service = new Service()

    const params = useParams().id

    useEffect( () => {
        service.getPhoto(params)
            .then((res) => {
                setData(res)
                const slickThumbRef = sliderRef.current.querySelector('.slick-dots.slick-thumb')
                slickThumbRef.append(arrowNextRef.current)
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
            <ContentPage data={data} sliderRef={sliderRef} settings={settings} />
            <InfoPage />
        </div>
    );
};

export default ProductPage;
