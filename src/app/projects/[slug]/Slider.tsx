import React from 'react';
import Slider from 'react-slick';

// SimpleSlider component that renders a carousel of images
export default function SimpleSlider({ assets }: any) {
    // Slider settings to control the carousel's behavior
    const settings = {
        dots: false, // Disables navigation dots
        arrows: false, // Disables next/prev arrows for navigation
        fade: true, // Enables fade transition between slides
        infinite: true, // Allows infinite looping of the slides
        autoplay: true, // Enables autoplay of the slides
        autoplaySpeed: 2000, // Time in milliseconds between each slide transition
        slidesToShow: 1, // Displays one slide at a time
        slidesToScroll: 1, // Scrolls one slide at a time
    };

    return (
        // Rendering the Slider component with the defined settings
        <Slider {...settings}>
            {/* Looping through the assets array to display each image */}
            {assets?.map((uri: string, index: number) => {
                return (
                    // Each image is wrapped in a div with flexbox for centering
                    <div key={index} className="d-flex justify-center align-items-center">
                        {/* Image element with custom styling */}
                        <img src={uri} className="carousel-img-width" style={{ borderRadius: 22 }} />
                    </div>
                );
            })}
        </Slider>
    );
}
