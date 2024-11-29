'use client';
import './Homepage.css'; // Importing CSS styles specific to this page
import React, { useEffect, useState } from 'react'; // Importing necessary React hooks
import Slider from 'react-slick'; // Importing Slider component for image carousel
// import { initMixpanel } from '@/utils/mixpanel'; // Importing Mixpanel analytics initialization
// import { initPostHog } from '@/utils/posthog'; // Importing PostHog analytics initialization
import { trackEvent, homeAboutData, homeTestimonialData, galleryImagesData } from '@/utils/helpers'; // Importing event tracking helper
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface ProjectsInterface {
    title: string;
    about: string;
    name: string;
    bannerImage: string;
    slug: string;
}
interface aboutInterface {
    image: string;
    name: string;
    url: string;
}
interface galleryInterface {
    image: string;
    alt: string;
}
interface testimonialInterface {
    image: string;
    name: string;
    description: string;
}

// Fundraiser Component
const Homepage = ({ projectsList }: any) => {
    // Settings for the image slider component
    const settings = {
        dots: false, // Disables dot navigation
        infinite: true, // Enables infinite scrolling
        slidesToShow: 3, // Number of slides to show at once
        centerMode: true, // Center the active slide
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false, // Disables navigation arrows
        responsive: [
            {
                breakpoint: 991, // Adjust settings for screens smaller than 991px
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    centerPadding: '30px',
                    infinite: true, // Keep infinite scrolling
                    dots: true, // Show navigation dots
                },
            },
            {
                breakpoint: 767, // Adjust settings for screens smaller than 767px (mobile)
                settings: {
                    slidesToShow: 1, // Show only 1 slide at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    centerPadding: '30px',
                    infinite: true, // Keep infinite scrolling
                    dots: true, // Show navigation dots
                },
            },
        ],
    };

    const testimonialSettings = {
        dots: false, // Disables dot navigation
        infinite: false, // Enables infinite scrolling
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false, // Disables navigation arrows
        responsive: [
            {
                breakpoint: 991, // Adjust settings for screens smaller than 991px
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    centerPadding: '30px',
                    infinite: true, // Keep infinite scrolling
                    dots: true, // Show navigation dots
                },
            },
            {
                breakpoint: 767, // Adjust settings for screens smaller than 767px (mobile)
                settings: {
                    slidesToShow: 1, // Show only 1 slide at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    centerPadding: '30px',
                    infinite: true, // Keep infinite scrolling
                    dots: true, // Show navigation dots
                },
            },
        ],
    };

    const gallerySetting = {
        dots: false, // Disables dot navigation
        infinite: true, // Enables infinite scrolling
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        slidesToShow: 1, // Number of slides to show at once
        centerMode: true, // Center the active slide
        slidesToScroll: 1, // Scroll one slide at a time
        centerPadding: '250px',
        arrows: false, // Disables navigation arrows
        responsive: [
            {
                breakpoint: 991, // Adjust settings for screens smaller than 991px
                settings: {
                    slidesToShow: 1, // Show 2 slides at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    centerPadding: '30px',
                    infinite: true, // Keep infinite scrolling
                },
            },
            {
                breakpoint: 767, // Adjust settings for screens smaller than 767px (mobile)
                settings: {
                    slidesToShow: 1, // Show only 1 slide at a time
                    slidesToScroll: 1, // Scroll 1 slide at a time
                    centerPadding: '30px',
                    infinite: true, // Keep infinite scrolling
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
                    <div className="row justify-content-center py-lg-5 py-4 detail-container">
                        <div className="col-lg-10 col-12 text-center">
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
                    <div className="row justify-content-center py-lg-5 py-4 detail-container">
                        <div className="col-12 text-center d-grid justify-content-center">
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: '1000' }}>
                                Our Projects
                            </h2>
                            <div className="col-12 mt-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                                <Slider {...settings}>
                                    {projectsList?.map((items: ProjectsInterface, index: number) => {
                                        return (
                                            // href={`/contribute?project=${items?.slug}`}
                                            // className={isClicked ? `link-click-active` : `link-click`}
                                            <div key={index}>
                                                <div className="ms-2 home-projects-slider" style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / .4), rgb(0 0 0 / .4)), url(${items.bannerImage})` }}>
                                                    <Link href={`/contribute?project=${items?.slug}`} passHref>
                                                        <p className="text-green fs-20 fw-800 mb-1">{items?.title}</p>
                                                        <p className="text-white fs-14 mb-1">{items?.about.substring(0, 230)}...</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About PLantd section */}
            <section className="pt-4">
                <div className="container w-95" style={{ backgroundColor: '#1d1d1d' }}>
                    <div className="row justify-content-center py-lg-5 py-4 detail-container">
                        <div className="col-12 text-center d-grid justify-content-center">
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: '1000' }}>
                                Uniting people for a <span className="text-green">greener</span> tomorrow
                            </h2>
                            <div className="col-12 mt-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                                <Slider {...settings}>
                                    {homeAboutData?.map((items: aboutInterface, index: number) => {
                                        return (
                                            <div key={index}>
                                                <div className="ms-2 home-about-slider" style={{ backgroundImage: `url(${items?.image})` }}>
                                                    <Link href={items?.url}>
                                                        <h2 className="text-white fs-30 fw-800 mb-1">{items?.name}</h2>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery section */}
            <section className="mt-4" style={{ backgroundColor: '#1d1d1d' }}>
                <div className="container-fluid w-95">
                    <div className="row justify-content-center align-items-center py-lg-5 py-4 detail-container">
                        <div className="col-12 text-center d-grid justify-content-center">
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: '1000' }}>
                                Gallery
                            </h2>
                            <div className="col-12 mt-4 gallery-slider" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                                <Slider {...gallerySetting}>
                                    {galleryImagesData?.map((items: galleryInterface, index: number) => {
                                        return (
                                            <div key={index}>
                                                <img className="gallery-images" src={items?.image} alt={items?.alt} />
                                                {/* <div className="ms-2 home-gallery-slider" style={{ backgroundImage: `url(${items?.image})` }}>
                                                </div> */}
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  section */}
            <section className="pt-4">
                <div className="container w-95" style={{ backgroundColor: '#1d1d1d', zIndex: 1 }}>
                    <div className="row justify-content-center py-lg-5 py-4 detail-container">
                        <div className="col-12 text-center d-grid justify-content-center">
                            <h2 className="text-white mb-lg-4">What people say?</h2>
                            <div className="col-12 mt-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                                <Slider {...testimonialSettings}>
                                    {homeTestimonialData?.map((items: testimonialInterface, index: number) => {
                                        return (
                                            <div className="testimonial-div" key={index}>
                                                <div className="testimonial-box">
                                                    <p className="text-white fs-14 testimonial-desc">{items?.description}</p>
                                                    <p className="text-green fs-20 fw-700">{items?.name}</p>
                                                </div>
                                                <img className="testimonial-image" src={items?.image} alt={items?.image} />
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal to show after form submission */}
        </div>
    );
};

export default Homepage;
