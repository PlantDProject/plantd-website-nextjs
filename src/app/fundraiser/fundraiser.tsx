'use client';
import CustomForm from '@/components/ContactForm/ContactForm'; // Importing custom form component
import './fundraiser.css'; // Importing CSS styles specific to this page
import React, { useState } from 'react'; // Importing necessary React hooks
import Slider from 'react-slick'; // Importing Slider component for image carousel
import { trackEvent } from '@/utils/helpers'; // Importing event tracking helper
import CustomModal from '@/components/Navigation/Modal/modal'; // Importing custom modal component
import { projectData, projectDataInterface } from './fundraiserItems';
import Image from 'next/image';

// Fundraiser Component
const Fundraiser = () => {
    // State to manage visibility of modal
    const [showModal, setShowModal] = useState(false);

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
        <div className='bg-dark-grey'>
            {/* Main Hero Section */}
            <section className="fundraiser-bg-home bg-second-dark pb-5" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row reverseRow">
                                {/* Left Side Content */}
                                <div className="col-lg-7 d-grid justify-content-center mt-lg-0 mt-4">
                                    <h2 className="title mb-4 text-white fundraiser-web-head">
                                        Support your cause while
                                        <br /> supporting our <span className="text-green">Planet</span>!
                                    </h2>
                                    <div className="row d-flex align-items-center">
                                        {/* Video on left */}
                                        <div className="col-lg-6 col-12">
                                            <video width="100%" src="/next-videos/Plantd-Siella-Video.mp4" loop autoPlay controls muted playsInline webkit-playsinline="false" style={{ borderRadius: '20px' }}></video>
                                        </div>
                                        {/* Images on right */}
                                        <div className="col-lg-3 col-6 mt-lg-0 mt-3">
                                            <Image className="w-100" width={100} height={180} src="/next-images/fundraiser/FRH2.webp" alt="fundraiser-right-head2 img" />
                                        </div>
                                        <div className="col-lg-3 col-6 mt-lg-0 mt-3">
                                            <Image className="w-100" width={100} height={180} src="/next-images/fundraiser/FRH1.webp" alt="fundraiser-right-head1 img" />
                                        </div>
                                    </div>

                                    {/* Project Cards Carousel */}
                                    <div className="col-12 mt-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                                        <Slider {...settings}>
                                            {projectData?.map((items: projectDataInterface, index: number) => {
                                                return (
                                                    <a key={index} className="sliderDiv" href={items?.url} onClick={() => trackEvent(`${items?.name} Card Clicked`)}>
                                                        <Image width={100} height={100} src={items?.image} alt="Senegal_Reforestation_Project Img" />
                                                        <div className="ms-2">
                                                            <p className="text-green fs-14 fw-800 mb-1">{items?.name}</p>
                                                            <p className="text-white fs-12 mb-1">
                                                                <span className="text-green">{items?.stat}</span> {items?.statData}
                                                            </p>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </Slider>
                                    </div>
                                </div>

                                {/* Right Side Content */}
                                <div className="col-lg-5 d-grid align-items-center">
                                    <h2 className="title mb-4 text-white fundraiser-mob-head">
                                        Support your cause while
                                        <br /> supporting our <span className="text-green">Planet</span>!
                                    </h2>
                                    <Image className="w-100" width={300} height={300} src="/next-images/fundraiser/FLH1.webp" alt="fundraiser-left-head img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fundraiser Detail Section */}
            <section className="pt-4">
                <div className="container w-95 position-relative" style={{ backgroundImage: 'url(next-images/fundraiser/Fundraiserbg.webp)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '20px' }}>
                    <div className="row justify-content-center py-lg-5 py-4 detail-container" data-aos="fade-up">
                        <div className="col-lg-10 col-12 text-center">
                            <div className="position-relative" style={{ zIndex: '100' }} />
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: '1000' }}>
                                Fundraise with <span className="text-green">Plantd</span>
                            </h2>
                            <p className="fs-20 text-white position-relative" style={{ zIndex: '1000' }}>
                                At Plantd, we recognize that we can help you raise money for your organization, all while helping the environment at the same time! As an environmentally focused sustainability company, we are fighting to ensure that we leave behind a greener tomorrow. Fundraise with Plantd to support your cause and do your part against climate change and deforestation.
                            </p>
                            <a href="#form" onClick={() => trackEvent('Apply button clicked')} className="btn btn-soft-primary btn-round d-flex justify-content-center my-4 mx-auto" style={{ width: '180px', padding: '10px 0px' }}>
                                Apply
                            </a>
                        </div>
                    </div>
                    <Image className="fundraise-abs" width={50} height={50} src="/next-images/fundraiser/leftLeaf.png" alt="leaf img" style={{ left: 0 }} />
                    <Image className="fundraise-abs" width={50} height={50} src="/next-images/fundraiser/rightLeaf.png" alt="leaf img" style={{ right: 0 }} />
                </div>
            </section>

            {/* Organization Structure Images */}
            <section className="py-5">
                <div className="container w-95">
                    <Image src="/next-images/fundraiser/structure.webp" className="structureWeb" width={1000} height={800} style={{ width: "95%", margin: 'auto', borderRadius: '20px' }} alt="organization-structure-description img" />
                    <Image src="/next-images/fundraiser/structureMob.webp" className="structureMob" width={400} height={1000} style={{ width: "95%", margin: 'auto' }} alt="organization-structure-description img" />
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="fundraiser-contact-form" className="pb-5">
                <div className="w-90 mx-auto p-3 p-md-5 mt-0 business-cards business-form text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <h1 className="fw-800 text-white">Contact Us</h1>
                            <p className="fs-20 text-white fundraiser-contact text-white">
                                Questions? Concerns? Feedback? <br />
                                We’d love to hear from you!
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-container mx-auto py-4 px-lg-4 px-md-5 px-2 ">
                                <h3 className={`mb-4 fw-800`} id="form">
                                    Fundraise with Plantd
                                </h3>
                                {/* Custom contact form */}
                                <CustomForm formOrigin="fundraiser" modal={setShowModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal to show after form submission */}
            <CustomModal
                isOpen={showModal}
                modalType="resultModal"
                onClose={() => setShowModal(false)} // Close modal when clicked
            />
        </div>
    );
};

export default Fundraiser;
