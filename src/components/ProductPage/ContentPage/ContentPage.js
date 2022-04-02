import React from 'react';
import Slider from "react-slick";

const ContentPage = ({ sliderRef, settings, data }) => {
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
                                        <img width={50} src={`${data[0].url}`} alt={i + 1}/>
                                    </a>
                                );
                            }}
                        >
                            <div className='slick-slide-item'>
                                <img src={data[0].url} />
                            </div>
                            <div className='slick-slide-item'>
                                <img src={data[0].url} />
                            </div>
                            <div className='slick-slide-item'>
                                <img src={data[0].url} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
    );
};

export default ContentPage;
