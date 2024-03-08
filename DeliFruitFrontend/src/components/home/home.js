import React from 'react'
import Slider from "react-slick";
import './home.scss';
import ImportedFruitHome from './ImportedFruitHome/ImportedFruitHome';
import FruitBasketHome from './FruitBasketHome/FruitBasketHome';

const home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
    };
    return (
        <div className='home-container'>
            <div className='container'>
                <div className='home-slide'>
                    <Slider {...settings}>
                        <div className='img-slide img-1'></div>
                        <div className='img-slide img-2'></div>
                    </Slider>
                </div>
            </div>
            <ImportedFruitHome />
            <FruitBasketHome />
        </div>
    );
}

export default home