'use client';

import { poppinsBold, poppinsMedium } from '@/utils/fonts';
import './business.css';
import Link from 'next/link';
import React from 'react';
import CustomForm from '@/components/ContactForm/ContactForm';

const Business = () => {
    // Button component to navigate to the form section
    const CTA = () => {
        return (
            <div className="lets-talk d-flex my-4 justify-center">
                <Link className="btn primary-btn btn-rounded custom-btn" href="#form">
                    Let's Talk
                </Link>
            </div>
        );
    };

    return (
        <>
            {/* Main container for the business section */}
            <div className="business-container pb-1">
                <section className="top-container">
                    {/* Video background */}
                    <video autoPlay muted loop className="video custom-video">
                        <source src="/next-videos/header-1.mov" type="video/mp4" />
                    </video>
                    <div className="header-text">
                        <h1 className={`business-title title-color ${poppinsBold.className}`}>
                            For Business that
                            <br />
                            want to do <span className="text-green">more</span>
                        </h1>
                        <span className="green-line" />
                        <p className={`header-subtext ${poppinsMedium.className}`}>Our B2B solutions enable businesses to offset their carbon footprint by planting trees worldwide while supporting diverse carbon offset projects. With our One-to-One model, a tree is planted for every product or service sold, empowering companies to take meaningful climate action.</p>
                    </div>
                </section>

                <section>
                    {/* Main section for One-to-One model */}
                    <div className="w-90 mx-auto p-4 p-lg-5 my-5 business-cards d-flex flex-column flex-lg-row align-center text-white flex-wrap">
                        {/* Section Heading */}
                        <div className="col-12 col-lg-12 order-0">
                            <h3 className={`${poppinsBold.className} text-center text-lg-start`}>One-to-One</h3>
                        </div>

                        {/* Text content describing the One-to-One model */}
                        <div className="col-12 col-lg-5 order-3 order-lg-2">
                            <span className="d-none d-lg-block green-line cards ms-4" />
                            <p className={poppinsMedium.className}>
                                {/* Description of Plantd’s One-to-One model */}
                                Plantd’s One-to-One model empowers businesses to make a positive environmental impact with every sale. For each product or service sold, a tree is planted in a region that needs it most, helping to combat deforestation, support local communities, and offset carbon emissions. This initiative allows companies to take a direct and meaningful role in the fight against
                                climate change while showing their commitment to sustainability. By planting trees worldwide, businesses can not only reduce their carbon footprint but also contribute to the long-term health of our planet and improve the livelihoods of people in the communities we support.
                            </p>

                            {/* Call-to-Action Button */}
                            {CTA()}
                        </div>

                        {/* Image representing the One-to-One model */}
                        <div className="col-12 col-lg-6 order-1 order-lg-3 ms-auto mx-auto">
                            <img src="/next-images/business/business-first-section.png" className="img-fluid" />
                        </div>

                        {/* Transparent Logo Image */}
                        <img src="/next-images/translucent-logo.png" className="first-section-img" />
                    </div>
                </section>

                <section>
                    {/* Main section for Climate Action Credits */}
                    <div className="w-90 mx-auto p-4 p-lg-5 my-5 business-cards d-flex flex-column flex-lg-row align-center text-white flex-wrap">
                        {/* Empty column for spacing */}
                        <div className="col-6"></div>

                        {/* Section Heading */}
                        <div className="col-12 col-lg-5 ms-auto text-center text-lg-start order-0">
                            <h3 className={poppinsBold.className}>Climate Action Credits</h3>
                        </div>

                        {/* Image representing the Climate Action Credits */}
                        <div className="col-12 col-lg-6 order-1 order-lg-0 me-auto">
                            <img src="/next-images/business/business-second-section.png" className="img-fluid" />
                        </div>

                        {/* Text content describing the Climate Action Credits */}
                        <div className="col-12 col-lg-5 order-2 order-lg-2">
                            <span className="d-none d-lg-block green-line cards" />
                            <p className={`${poppinsMedium.className} m-0`}>
                                {/* Description of Plantd’s Climate Action Credits */}
                                Plantd offers businesses the opportunity to make a real climate impact by purchasing verified carbon credits. These credits support a variety of impactful projects, ranging from renewable energy initiatives to conservation efforts. Supported projects span multiple categories, including household and community solutions, renewable energy advancements, and waste
                                management improvements, ensuring a diverse selection for businesses to choose from. Whether you're looking to align with industry-specific needs or execute a specific sustainability mission, our platform allows you to support the projects that resonate with your values. Take a proactive step toward reducing your carbon footprint while driving meaningful change and
                                demonstrating your commitment to a sustainable future.
                            </p>

                            {/* Call-to-Action Button */}
                            {CTA()}

                            {/* Transparent Logo Image */}
                            <img src="/next-images/translucent-logo.png" className="second-section-img" />
                        </div>
                    </div>
                </section>

                <section>
                    {/* Section with an alternative offer (Have Something Else in Mind) */}
                    <div className="w-90 mx-auto py-5 px-3 px-md-5 my-5 business-cards d-flex align-center text-white">
                        {/* Wavy section background images */}
                        <div className="wavy-section">
                            <img src="/next-images/business/have-something.png" className="wavy-bg d-none d-lg-block" />
                            <img src="/next-images/business/have-something-sm.png" className="wavy-bg d-block d-lg-none" />

                            {/* Heading with decorative image */}
                            <div className="d-flex justify-center">
                                <h3 className={`my-5 ${poppinsBold.className}`}>
                                    <img src="/next-images/business/have-something-border.png" className="wavy-bg-heading" />
                                    Have
                                    <br />
                                    something else
                                    <br /> in mind?
                                </h3>
                            </div>

                            {/* Description for custom solutions */}
                            <p className={`wavy-section-p w-90 mx-auto px-5 py-4 text-center text-white ${poppinsMedium.className}`}>
                                <img src="/next-images/business/rectangle.png" className="wavy-rectangle d-none d-lg-block" />
                                <img src="/next-images/business/rectangle-sm.png" className="wavy-rectangle d-block d-lg-none" />f your business has a custom solution in mind, we're here to help bring it to life. Reach out for a free consultation, and together we can build a tailored partnership that aligns with your sustainability goals. Whether it’s a unique carbon offset strategy, targeted
                                reforestation efforts, or specialized project support, we’ll work closely with you to create a solution that maximizes your impact. Let’s collaborate to propel your climate action initiatives and drive meaningful change for a more sustainable future.{' '}
                            </p>

                            {/* Call-to-Action Button */}
                            {CTA()}
                        </div>
                    </div>
                </section>

                <section>
                    {/* Section with contact form */}
                    <div className="w-90 mx-auto p-3 p-md-5 my-5 business-cards business-form d-flex align-center text-white">
                        {/* Form container */}
                        <div className="form-container col-12 col-lg-8 mx-auto py-4 px-4 px-md-5">
                            <h3 className={`${poppinsBold.className} mb-4`} id="form">
                                Let's Talk
                            </h3>

                            {/* Contact Form */}
                            <CustomForm formOrigin="business" />
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default Business;
