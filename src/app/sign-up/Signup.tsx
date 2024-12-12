'use client';

import './signup.css';
import React, { useState } from 'react';
import CustomModal from '@/components/Navigation/Modal/modal';
import CustomSignupForm from '@/components/SignupForm/signup-form';
import { Input } from '@nextui-org/react';

const Signup = () => {
   // Button component to navigate to the form section
   const [showModal, setShowModal] = useState(false);

   const handleChange = () => {

   }

   return (
      <div className='bg-dark-grey'>
         {/* Main container for the Signup section */}

         <section className="signup-bg-home">
            <div className="header-text">
               <h1 className="signup-title title-color">
                  Your first <span className="text-green">tree</span> is on us, just a click away!
               </h1>
               <p className="fw-600 fs-18 text-white text-center">well... actually it’s a few clicks, but you know what we mean.</p>
            </div>
         </section>

         {/* Signup Form Section */}
         <section id="signup-form" className="py-5 signup-section">
            <div className="w-90 mx-auto p-3 p-md-5 mt-0 text-white">
               <div className="row">
                  <div className="col-lg-6 p-0">
                     <img src="next-images/contact/form-img.jpg" alt="signup page featured image" />
                  </div>
                  <div className="col-lg-6 p-0 form-div">
                     <div className="form-container text-center mx-auto py-lg-5 px-lg-4 px-md-5 px-3">
                        {/* Custom Signup form */}
                        <div className="row justify-content-center email-div py-5 px-xl-5 px-md-4 px-2">
                           <h3 className="fw-600" id="form">
                              Welcome to Plantd
                           </h3>
                           <p className='fs-18 mb-5'>Start your journey to a <span className='text-green'>greener</span> tomorrow</p>
                           <div className="emailInputClass col-xl-9 col-10 p-0">
                              <Input
                                 classNames={{
                                    inputWrapper: ['px-0'],
                                 }}
                                 type="text"
                                 placeholder="Enter your email"
                                 labelPlacement="inside"
                                 onValueChange={(e) => console.log(e)}
                              />
                           </div>
                           <div className='emailCheckBtn p-0 col-xxl-1 col-2 d-flex justify-content-center align-items-center'>
                              <i className="fa fa-arrow-right"></i>
                           </div>
                        </div>
                        {/* <CustomSignupForm formOrigin='Signup'/> */}
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

export default Signup;
