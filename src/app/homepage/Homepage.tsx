'use client';
import './Homepage.css'; // Importing CSS styles specific to this page
import React from 'react'; // Importing necessary React hooks
import Slider from 'react-slick'; // Importing Slider component for image carousel
// import { initMixpanel } from '@/utils/mixpanel'; // Importing Mixpanel analytics initialization
// import { initPostHog } from '@/utils/posthog'; // Importing PostHog analytics initialization
import { trackEvent } from '@/utils/helpers'; // Importing event tracking helper

// Fundraiser Component
const Homepage = ({ projectsList }: any) => {
    // Settings for the image slider component
    const settings = {
        dots: false, // Disables dot navigation
        infinite: true, // Enables infinite scrolling
        speed: 500, // Set transition speed
        slidesToShow: 2, // Number of slides to show at once
        centerMode: true, // Center the active slide
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false, // Disables navigation arrows
        responsive: [
            {
                breakpoint: 1400, // Adjust settings for screens smaller than 1400px
                settings: {
                    slidesToShow: 1, // Show only 1 slide at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    infinite: true, // Keep infinite scrolling
                },
            },
            {
                breakpoint: 991, // Adjust settings for screens smaller than 991px
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    infinite: true, // Keep infinite scrolling
                    dots: true, // Show navigation dots
                },
            },
            {
                breakpoint: 767, // Adjust settings for screens smaller than 767px (mobile)
                settings: {
                    slidesToShow: 1, // Show only 1 slide at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    infinite: true, // Keep infinite scrolling
                    dots: true, // Show navigation dots
                },
            },
        ],
    };

    return (
        <div className="bg-dark-grey">
            {/* Main Hero Section */}
            <section className="bg-home bg-second-dark pb-5" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* Left Side Content */}
                                <div className="col-lg-7">
                                    <h1 className="title mb-4 text-white fundraiser-web-head">
                                        Join the <br />
                                        <span className="text-green">Movement</span>
                                        <br /> to Plant <span className="text-green">1 Billion</span> <br />
                                        <span className="text-green">Trees</span>
                                    </h1>
                                    <p className="header-subtext fw-600 fs-18">
                                        With <span className="text-green">Plantd</span>, planting trees around the
                                        <br /> world is just a few clicks away. Your <br />
                                        contribution helps restore forests and <br />
                                        supports global reforestation efforts.
                                    </p>
                                </div>

                                {/* Right Side Content */}
                                <div className="col-lg-5 position-relative">
                                    <a href="#" onClick={() => trackEvent(`Let's Plant button clicked`)} className="btn btn-soft-primary btn-round d-flex justify-content-center mx-auto plantBtn" style={{ width: '180px', padding: '10px 0px' }}>
                                        Let's Plant
                                    </a>
                                    <img src="/next-images/homepage/homeprojectimg.webp" width="100%" alt="fundraiser-left-head img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fundraiser Detail Section */}
            <section className="pt-4">
                <div className="container w-95 home-about-section">
                    <div className="row justify-content-center py-lg-5 py-4 detail-container" data-aos="fade-up">
                        <div className="col-lg-10 col-12 text-center">
                            <div className="position-relative" style={{ zIndex: '100' }} />
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: '1000' }}>
                                What is <span className="text-green">Plantd?</span>
                            </h2>
                            <p className="fs-20 text-white position-relative" style={{ zIndex: '1000' }}>
                                Plantd is your gateway to making a real environmental impact, effortlessly. With just a few clicks, Plantd enables you to plant trees worldwide, directly supporting reforestation efforts across the globe. Our platform connects you with incredible projects committed to combating climate change and restoring forests. Explore all of the transformative initiatives we
                                have to offer and see the difference your contribution makes.
                            </p>
                            <a href="#" onClick={() => trackEvent('More About Plantd button clicked')} className="btn btn-soft-primary btn-round d-flex justify-content-center my-4 mx-auto" style={{ width: '180px', padding: '10px 0px' }}>
                                More About Plantd
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* projects section */}
            <section className="pt-4">
                <div className="container w-95" style={{ backgroundColor: '#1d1d1d' }}>
                    <div className="row justify-content-center py-lg-5 py-4 detail-container" data-aos="fade-up">
                        <div className="col-lg-10 col-12 text-center">
                            <div className="position-relative" style={{ zIndex: '100' }} />
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: '1000' }}>
                                Our Projects
                            </h2>

                            <Slider {...settings}>
                                {/* Project Card 1 */}
                                <a className="sliderDiv" href="/contribute?project=senegal-farming-and-reforestation" onClick={() => trackEvent('Senegal Project Card Clicked')}>
                                    <img src="/images/fundraiser/Senegal_Reforestation_Project_Img.png" alt="Senegal_Reforestation_Project Img" />
                                </a>
                                {/* Other project cards follow in similar structure */}
                                {/* Project Card 2 */}
                                <a className="sliderDiv" href="/contribute?project=long-leaf-pine-reforestation" onClick={() => trackEvent('Texas Project Card Clicked')}>
                                    <img src="/images/fundraiser/Longleaf_Pine_Reforestation_Project_Img.png" alt="Longleaf_Pine_Reforestation_Project Img" />
                                </a>
                                <a className="sliderDiv" href="/contribute?project=long-leaf-pine-reforestation" onClick={() => trackEvent('Texas Project Card Clicked')}>
                                    <img src="/images/fundraiser/Longleaf_Pine_Reforestation_Project_Img.png" alt="Longleaf_Pine_Reforestation_Project Img" />
                                </a>
                                <a className="sliderDiv" href="/contribute?project=long-leaf-pine-reforestation" onClick={() => trackEvent('Texas Project Card Clicked')}>
                                    <img src="/images/fundraiser/Longleaf_Pine_Reforestation_Project_Img.png" alt="Longleaf_Pine_Reforestation_Project Img" />
                                </a>
                                {/* More project cards... */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4"></section>

            {/* Modal to show after form submission */}
        </div>
    );
};

export default Homepage;
