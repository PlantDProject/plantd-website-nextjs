'use client';
import CustomForm from '@/components/ContactForm/ContactForm';
import './fundraiser.css';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import {initMixpanel, trackMixpanelEvent} from '@/utils/mixpanel';
import {initPostHog, trackPosthogEvent} from '@/utils/posthog';
const Fundraiser = () => {

    useEffect(()=>{
        initMixpanel();
        initPostHog();
    },[])

    const trackEvent = (e:any)=>{
        trackMixpanelEvent(e);
        trackPosthogEvent(e);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    return (
        <div style={{ backgroundColor: '#1d1d1d !important' }}>
            <section className="bg-home bg-second-dark pb-5" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row reverseRow">
                                <div className="col-lg-7 d-grid justify-content-center mt-lg-0 mt-4">
                                    <h2 className="title mb-4 text-white fundraiser-web-head">Support your cause while<br /> supporting
                                        our <span className="text-green">Planet</span>!
                                    </h2>
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <video width="100%" src="/next-videos/Plantd-Siella-Video.mp4" loop autoPlay
                                                controls muted playsInline webkit-playsinline="false"
                                                style={{ borderRadius: "20px" }}></video>
                                        </div>
                                        <div className="col-lg-3 col-6 mt-lg-0 mt-3">
                                            <img width="100%" src="/images/fundraiser/FRH2.webp" alt="fundraiser-right-head2 img" />
                                        </div>
                                        <div className="col-lg-3 col-6 mt-lg-0 mt-3">
                                            <img width="100%" src="/images/fundraiser/FRH1.webp" alt="fundraiser-right-head1 img" />
                                        </div>

                                    </div>
                                    <div className='col-12 mt-4' style={{ maxWidth: "100%", overflow: 'hidden' }}>
                                        <Slider {...settings}>
                                            <a className='sliderDiv' href='/contribute.html?project=senegal' onClick={()=> trackEvent('Senegal Project Card Clicked')}>
                                                <img src="/images/fundraiser/Senegal_Reforestation_Project_Img.png" alt="Senegal_Reforestation_Project Img" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-14 fw-800 mb-1'>Senegal Farming & Reforestation</p>
                                                    <p className='text-white fs-12 mb-1'><span className='text-green'>2,500</span> Number of women planting through all projects.🙎</p>
                                                </div>
                                            </a>
                                            <a className='sliderDiv' href='/contribute?project=texas' onClick={()=> trackEvent('Texas Project Card Clicked')}>
                                                <img src="/images/fundraiser/Longleaf_Pine_Reforestation_Project_Img.png" alt="Longleaf_Pine_Reforestation_Project Img" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-14 fw-800 mb-1'>Longleaf Pine Reforestation</p>
                                                    <p className='text-white fs-12 mb-1'><span className='text-green'>9,000</span> Jobs will be provided.💼</p>
                                                </div>
                                            </a>
                                            <a className='sliderDiv' href='/contribute?project=louisiana' onClick={()=> trackEvent('Louisiana Project Card Clicked')}>
                                                <img src="/images/fundraiser/Natural_Disaster_Reforestation.png" alt="Natural_Disaster_Reforestation Img" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-14 fw-800 mb-1'>Natural Disaster Reforestation</p>
                                                    <p className='text-white fs-12 mb-1'><span className='text-green'>2M+</span> Trees will be planted.🌳</p>
                                                </div>
                                            </a>
                                            <a className='sliderDiv' href='/contribute?project=california' onClick={()=> trackEvent('California Project Card Clicked')}>
                                                <img src="/images/fundraiser/Rim_Wildfire_Restoration.png" alt="Rim_Wildfire_Restoration Img" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-14 fw-800 mb-1'>Rim Wildfire Restoration</p>
                                                    <p className='text-white fs-12 mb-1'><span className='text-green'>627,000</span> Trees will be planted.🌳</p>
                                                </div>
                                            </a>
                                            <a className='sliderDiv' href='/contribute?project=honduras' onClick={()=> trackEvent('Honduras Project Card Clicked')}>
                                                <img src="/images/fundraiser/Honduras_Project.png" alt="Honduras_Project Img" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-14 fw-800 mb-1'>Honduras Reforestation</p>
                                                    <p className='text-white fs-12 mb-1'><span className='text-green'>190+</span> Employees empowered with fair wages.💼</p>
                                                </div>
                                            </a>
                                            <a className='sliderDiv' href='/contribute?project=philippines' onClick={()=> trackEvent('Philippines Project Card Clicked')}>
                                                <img src="/images/fundraiser/Philippines_Project.png" alt="Philippines_Project Img" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-14 fw-800 mb-1'>Philippines Reforestation</p>
                                                    <p className='text-white fs-12 mb-1'><span className='text-green'>17%</span> Of the population live below the poverty line.😧</p>
                                                </div>
                                            </a>

                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-grid align-items-center">
                                    <h2 className="title mb-4 text-white fundraiser-mob-head">Support your cause while<br /> supporting
                                        our <span className="text-green">Planet</span>!
                                    </h2>
                                    <img src="/images/fundraiser/FLH1.webp" width="100%" alt="fundraiser-left-head img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4">
                <div className="container w-95 position-relative"
                    style={{ backgroundImage: "url(images/fundraiser/Fundraiserbg.webp)", backgroundRepeat: "no-repeat", backgroundSize:"cover", borderRadius: "20px" }}>
                    <div className="row justify-content-center py-lg-5 py-4 detail-container" data-aos="fade-up">
                        <div className="col-lg-10 col-12 text-center">
                            <div className="position-relative" style={{ zIndex: "100" }} />
                            <h2 className="text-white mb-lg-4 position-relative" style={{ zIndex: "1000" }}>Fundraise with <span className="text-green">Plantd</span></h2>
                            <p className="fs-20 text-white position-relative" style={{ zIndex: "1000" }}>
                                At Plantd, we recognize that we can help you raise money for your organization, all while
                                helping the environment at the same time! As an environmentally focused sustainability
                                company, we are fighting to ensure that we leave behind a greener tomorrow. Fundraise with
                                Plantd to support your cause and do your part against climate change and deforestation.
                            </p>
                            <a href="#fundraiser-contact-form" onClick={()=> trackEvent('Apply button clicked')}
                                className="btn btn-soft-primary btn-round d-flex justify-content-center my-4  mx-auto"
                                style={{ width: "180px", padding:"10px 0px" }}>Apply</a>
                        </div>
                    </div>
                    <img className='fundraise-abs' src="images/fundraiser/leftLeaf.png" alt="leaf img"
                        style={{ left: 0 }} />
                    <img className='fundraise-abs' src="images/fundraiser/rightLeaf.png" alt="leaf img"
                        style={{ right: 0 }} />
                </div>
            </section >

            <section className='py-5'>
                <div className="container w-95">
                    <img src="images/fundraiser/structure.webp" className='structureWeb' width="95%" style={{ margin: "auto" }} alt="organization-structure-description img" />
                    <img src="images/fundraiser/structureMob.png" className='structureMob' width="95%" style={{ margin: "auto" }} alt="organization-structure-description img" />
                </div>
            </section>

            <section id='fundraiser-contact-form' className='pb-5'>
                <div className="w-90 mx-auto p-3 p-md-5 mt-0 business-cards business-form text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <h1 className='fw-800 text-white'>Contact Us</h1>
                            <p className="fs-20 text-white fundraiser-contact text-white">
                                Questions? Concerns? Feedback?<br />
                                We’d love to hear from you!
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-container mx-auto py-4 px-lg-4 px-md-5 px-2 ">
                                <h3 className={`mb-4 fw-800`} id="form">Fundraise with Plantd</h3>
                                <CustomForm formOrigin="fundraiser" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div >
    );
};

export default Fundraiser;

