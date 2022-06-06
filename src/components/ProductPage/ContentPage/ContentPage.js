import React, { useEffect } from 'react';
import Slider from "react-slick";

const ContentPage = ({ sliderRef, arrowNextRef, settings, data }) => {
    
    useEffect(() => {
        try {
            const slickThumbRef = sliderRef.current.querySelector('.slick-dots.slick-thumb')
            slickThumbRef.append(arrowNextRef.current)
        } catch (e) {}
    })

    return (
        <div className="content_page">
                <div className="present_img">
                    <div
                        ref={sliderRef}
                        className="slider_wrapper">
                        <Slider
                            className="slider"
                            {...settings}
                            customPaging ={(i) => {
                                return (
                                    <a>
                                        <img width={50} src={`${data.imageUrl}`} alt={i + 1}/>
                                    </a>
                                );
                            }}
                        >
                            <div className='slick-slide-item'>
                                <img src={data.imageUrl} />
                            </div>
                            <div className='slick-slide-item'>
                                <img src={data.imageUrl} />
                            </div>
                            <div className='slick-slide-item'>
                                <img src={data.imageUrl} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
    );
};

export default ContentPage;
