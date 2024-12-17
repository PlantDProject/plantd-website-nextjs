import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider({ assets }: any) {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {assets?.map((uri: string, index: number) => {
                return (
                    <div key={index} className="d-flex justify-center align-items-center">
                        <Image src={uri} className="carousel-img-width" alt={`slider-image-${index}`} style={{ borderRadius: 22 }} width={348} height={300} />
                    </div>
                );
            })}
        </Slider>
    );
}
