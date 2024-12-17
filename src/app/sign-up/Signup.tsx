'use client';

import './signup.css';
import React, { useState } from 'react';
import CustomModal from '@/components/Navigation/Modal/modal';
import CustomSignupForm from '@/components/SignupForm/signup-form';
import { Input } from '@nextui-org/react';
import { CHECK_SIGNUP_EMAIL } from '@/utils/GRAPHQL';
import { IFrameRenderer, fetchGraphQL, isEmailValid } from '@/utils/helpers';
import { InfoData, InfoDataInterface } from './signupItems';
import Link from 'next/link';

const Signup = () => {
   // Button component to navigate to the form section
   const [showModal, setShowModal] = useState(false);

   const [signupData, setSignupData] = useState({
      isExist: false,
      email: "",
      name: null,
      referralCode: null,
      emailError: false,
      showEmailCheckForm: true,
   });

   const isValid = isEmailValid(signupData?.email);
   const emailCheckInput: any = {
      emailId: signupData?.email,
      referralCode: signupData?.referralCode
   };
   const appLink = process.env.NEXT_PUBLIC_ENV !== 'production' ? 'https://app-test.plantd.life/MW/UserExist/AppDownload' : 'https://app.plantd.life/MW/UserExist/AppDownload'

   const handleDiffSignup = () => {
      setSignupData(() => {
         return {
            isExist: false,
            email: "",
            name: null,
            referralCode: null,
            emailError: false,
            showEmailCheckForm: true
         }
      })
   }


   const handleChange = (e: any) => {
      if (e.includes(' ')) {
         return;
      }
      setSignupData((prev: any) => { return { ...prev, email: e.trim() } })
   }

   const emailCheckFunc = async () => {
      if (!isValid) {
         setSignupData((prev: any) => { return { ...prev, emailError: true } })
         return
      }
      const response = await fetchGraphQL(CHECK_SIGNUP_EMAIL, { input: emailCheckInput });
      const dataObject = response?.data?.isEmailIdExist
      setSignupData((prev: any) => { return { ...prev, showEmailCheckForm: false, isExist: dataObject?.exists, name: dataObject?.firstName } })
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
                     <div className="form-container mx-auto py-lg-5 px-lg-4 px-md-5 px-3">
                        {/* Custom Signup form */}

                        <div className='py-4'>
                           {signupData?.showEmailCheckForm && (
                              <>
                                 <div className="text-center">
                                    <h3 className="fw-600">Welcome to Plantd</h3>
                                    <p className='fs-18 mb-4'>Start your journey to a <span className='text-green'>greener</span> tomorrow</p>
                                 </div>
                                 <div className='row justify-content-center text-start email-div px-xl-5 px-md-4 px-2'>
                                    <div className="emailInputClass col-xl-9 col-10 p-0">
                                       <Input
                                          classNames={{
                                             inputWrapper: ['px-0'],
                                          }}
                                          type="text"
                                          placeholder="Enter your email..."
                                          labelPlacement="inside"
                                          maxLength={50}
                                          onValueChange={(e) => handleChange(e)}
                                          value={signupData?.email}
                                       />
                                    </div>
                                    <div onClick={emailCheckFunc} className='emailCheckBtn p-0 col-xxl-1 col-2 d-flex justify-content-center align-items-center'>
                                       <i className="fa fa-arrow-right"></i>
                                    </div>
                                    <div className="col-xl-10 col-12 pt-2 d-flex justify-content-start">
                                       {signupData?.emailError && <small className="text-danger">{`${signupData?.email.length === 0 ? 'Field cannot be empty' : 'Invalid email address'}`}</small>}
                                    </div>
                                 </div>
                              </>
                           )}

                           {!signupData?.isExist && !signupData?.showEmailCheckForm && (
                              <>
                                 <div className="text-center">
                                    <p className='fs-22 font-italic'>Hello <span className='text-green'>{signupData?.email}!</span></p>
                                    <p className='fs-22 font-italic'>Please add your name and password.</p>
                                 </div>
                                 <CustomSignupForm email={signupData?.email} referralCode={signupData?.referralCode} />

                                 <div className="diff-signup-div mt-4" onClick={handleDiffSignup}>
                                    <p className='fs-18'>Sign up with different email id</p>
                                 </div>
                              </>
                           )}

                           {signupData?.isExist && (
                              <div className="welcomeback-div">
                                 <h3 className="fw-600 text-center " id="form">Welcome Back <span className='text-green'>{`${signupData?.name}`}</span></h3>
                                 <p className='fs-18 text-center mb-4'>Login on your Plarntd App to</p>
                                    {InfoData.map((items: InfoDataInterface, index) => {
                                       return (
                                          <div key={index} className="d-flex align-items-center mt-2 app-perk-div">
                                             <img src={items?.icon} alt={items?.alt} className='me-2'/>
                                             <IFrameRenderer iframeHtml={items?.subtitle}/>
                                          </div>
                                       );
                                    })}
                                    <div className="text-center mt-4">
                                       <Link className="btn primary-btn btn-rounded custom-btn" href={appLink}>Jump in</Link>
                                    </div>
                              </div>
                           )}

                        </div>

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
