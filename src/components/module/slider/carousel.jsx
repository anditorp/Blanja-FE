import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlackEdition from '../../../assets/carousel/black edition.svg';
import TrendsIn2020 from '../../../assets/carousel/trends in 2020.svg';
import Image1 from '../../../assets/carousel/jonathanfrancesca.jpeg';
import Image2 from '../../../assets/carousel/ian.jpeg';

const Carousel = () => {     
    const setSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
                breakpoint: 340,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <div className='slick-slider px-20'>
            <Slider {...setSlider}>
                <div className='px-4'>
                    <img src={BlackEdition} alt="BlackEdition" />
                </div>
                <div className='px-4'>
                    <img src={TrendsIn2020} alt="TrendsIn2020" />
                </div>
                <div className='px-4'>
                    <img className='w-full h-28 rounded-md' src={Image1} alt="image1" />
                </div>
                <div className='px-4'>
                    <img className='w-full h-28 rounded-md' src={Image2} alt="image2" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
