import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider({ assets }: any) {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {assets?.map((uri, index) => {
                return (
                    <div key={index} className="d-flex justify-center align-items-center">
                        <img src={uri} width="70%" style={{ borderRadius: 22 }} />
                    </div>
                );
            })}
        </Slider>
    );
}
