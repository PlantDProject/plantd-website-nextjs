'use client';
import './fundraiser.css';
import React from 'react';
import ContactForm from '@/components/Navigation/ContactForm/ContactForm';
import Slider from 'react-slick';

const Fundraiser = () => {
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
                                            <div className='sliderDiv'>
                                                <img src="/images/fundraiser/Senegal_Reforestation_Project_Img.png" alt="" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-10 mb-1'>Senegal Farming & Reforestation</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>100,000+</span> Trees will be planted.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>26</span> Different species of tress to be planted across all projects.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>2,500</span> Number of women planting through all projects.🙎</p>
                                                    <p className='text-white fs-8 mb-0'><span className='text-green'>1</span> Hectare of land will be allocated to each group, consisting of 25 women per group.🏞</p>
                                                </div>
                                            </div>
                                            <div className='sliderDiv'>
                                                <img src="/images/fundraiser/Longleaf_Pine_Reforestation_Project_Img.png" alt="" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-10 mb-1'>Longleaf Pine Reforestation</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>9,000</span> Jobs will be provided.💼</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>500,000+</span> Trees will be planted.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>875+</span> Acres will be restored.🌳</p>
                                                </div>
                                            </div>
                                            <div className='sliderDiv'>
                                                <img src="/images/fundraiser/Natural_Disaster_Reforestation.png" alt="" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-10 mb-1'>Natural Disaster Reforestation</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>4</span> Different tree species will be planted including Loblolly Pine, Slash Pine, Shortleaf Pine & Longleaf Pine.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>2M+</span> Trees will be planted.🌳</p>
                                                </div>
                                            </div>
                                            <div className='sliderDiv'>
                                                <img src="/images/fundraiser/Rim_Wildfire_Restoration.png" alt="" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-10 mb-1'>Rim Wildfire Restoration</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>4</span> Different tree species will be planted including Douglas Fir, Incense Cedar, Ponderosa Pine & Sugar Pine.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>627,000</span> Trees will be planted.🌳</p>
                                                </div>
                                            </div>
                                            <div className='sliderDiv'>
                                                <img src="/images/fundraiser/Honduras_Project.png" alt="" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-10 mb-1'>Honduras Reforestation</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>48%</span> Of Hondurans live below the poverty line, as of 2018.😧</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>1.26M</span> Hectares of forest destroyed over the span of 20 years.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>4M</span> Trees produced, planted, and protected.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>190+</span> Employees empowered with fair wages.💼</p>
                                                </div>
                                            </div>
                                            <div className='sliderDiv'>
                                                <img src="/images/fundraiser/Philippines_Project.png" alt="" />
                                                <div className='ms-2'>
                                                    <p className='text-green fs-10 mb-1'>Philippines Reforestation</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>17%</span> Of the population live below the poverty line.😧</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>47,000</span> Hectares of forest are destroyed each year.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>20,000</span> Seedlings per month produced across 2 planting sites.🌳</p>
                                                    <p className='text-white fs-8 mb-1'><span className='text-green'>40%</span> Employees empowered with fair wages.💼</p>
                                                </div>
                                            </div>

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
                    style={{ backgroundImage: "url(images/fundraiser/Fundraiserbg.webp)", backgroundRepeat: "no-repeat", borderRadius: "20px" }}>
                    <div className="row justify-content-center py-lg-5 py-4 detail-container" data-aos="fade-up">
                        <div className="col-lg-10 col-12 text-center">
                            <div className="position-relative" style={{ zIndex: "100" }} />
                            <h2 className="text-white mb-lg-4">Fundraise with <span className="text-green">Plantd</span></h2>
                            <p className="fs-20 text-white">
                                At Plantd, we recognize that we can help you raise money for your organization, all while
                                helping the environment at the same time! As an environmentally focused sustainability
                                company, we are fighting to ensure that we leave behind a greener tomorrow. Fundraise with
                                Plantd to support your cause and do your part against climate change and deforestation.
                            </p>
                            <a href="#fundraiser-contact-form"
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
                        <div className="col-lg-4">
                            <h1 className='fw-800'>Contact Us</h1>
                            <p className="fs-20 text-white fundraiser-contact">
                                Questions? Concerns? Feedback?<br />
                                We’d love to hear from you!
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-container mx-auto py-4 px-4 px-md-5">
                                <h3 className={`mb-4`} id="form">Fundraise with Plantd</h3>
                                <ContactForm buttonName="Let's Fundraise" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div >
    );
};

export default Fundraiser;
