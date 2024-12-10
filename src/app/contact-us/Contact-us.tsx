'use client';

import './contact-us.css';
import React, { useState } from 'react';
import CustomForm from '@/components/ContactForm/ContactForm';
import CustomModal from '@/components/Navigation/Modal/modal';

const Contact = () => {
    // Button component to navigate to the form section
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='bg-dark-grey'>
            {/* Main container for the business section */}

            <section className="contact-bg-home">
                <div className="header-text">
                    <h1 className="contact-title title-color">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-5">
                <div className="w-90 mx-auto p-3 p-md-5 mt-0 business-cards business-form text-white">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                            <div className="form-container mx-auto py-4 px-lg-4 px-md-5 px-2 ">
                                <h3 className={`mb-4 fw-800`} id="form">
                                    Have any questions?
                                </h3>
                                {/* Custom contact form */}
                                <CustomForm formOrigin="contactus" modal={setShowModal} />
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

export default Contact;
