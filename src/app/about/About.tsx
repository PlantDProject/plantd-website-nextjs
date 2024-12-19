'use client';

import Slider from 'react-slick';
// Import necessary components and styles
import './about.css'; // Custom CSS file for FAQ styling
import Link from 'next/link'; // Link component for client-side navigation
import { DataFormat, aboutUsData, aboutUsSections, settings, takeSneakPeakItems } from './aboutUs-items';
import { isEven } from '@/utils/helpers';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { SocialsBar } from '@/components/Socials/SocialsSection';
import Image from 'next/image';

const About = () => {
    const SectionContainer = (data: DataFormat, index: number) => {
        return (
            <div className={`pb-4 pb-lg-0 container-fluid w-90 d-flex flex-wrap px-4 my-5 ${data.source !== 'about' ? 'align-items-center' : ''}`} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
                <div className={`col-lg-6 col-12 order-0 ${isEven(index) ? 'order-lg-1 ps-lg-4' : 'pe-lg-4 order-0'}`}>
                    <h2>{data.title}</h2>
                    {/* <p className="fs-20 mt-4">{data.description}</p> */}
                    <p className="fs-20 mt-4">
                        {data.description.split('<br />').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    {data.source === 'about' && (
                        <div className="col-12 col-md-6 align-items-center d-flex">
                            <Link className="play-store me-4" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                                <Image src="/next-images/socials/play-store.png" alt="Google Play" width={150} height={50} className="w-100" />
                            </Link>
                            <Link className="app-store " href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                                <Image src="/next-images/socials/app-store.png" alt="App Store" width={150} height={50} className="w-100 ms-auto" />
                            </Link>
                        </div>
                    )}
                </div>
                <div className="mt-4 mt-lg-0 col-lg-6 col-12 justify-center d-flex">
                    {data.source === 'about' ? <video width="100%" src={data.asset} loop autoPlay controls muted playsInline webkit-playsinline="false" style={{ borderRadius: '20px' }}></video> : <Image src={data.asset} alt={data.title} width={560} height={300} style={{ width: data.source === 'initiative' ? 'auto' : '100%', height: data.source === 'initiative' ? '600px' : '100%' }} />}
                </div>
            </div>
        );
    };
    return (
        <div className="bg-dark-grey text-white">
            {/* Section for FAQ page header */}
            <section className="text-white about-bg-home flex-column" id="home">
                <h1 className="mb-3 text-center fs-50">
                    We Want You to Do More to
                    <br />
                    Win More with Plantd
                </h1>
                <p className="fs-20">
                    Go Green, but make it fun and exciting. We are
                    <br />
                    capturing the best of both worlds in a movement to
                    <br />
                    Fight Climate Change through The Power of Trees
                </p>
            </section>

            {SectionContainer(aboutUsData, 1)}

            <section className="container px-4 py-5" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
                <div className="col-12 pb-5 text-center">
                    <h2>Take A Sneak Peak</h2>
                </div>
                <div className="w-90 mx-auto col-12 mt-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                    <Slider {...settings}>
                        {takeSneakPeakItems?.map((items: any, index: number) => {
                            return (
                                <div key={index} className="d-flex align-items-center justify-center flex-column">
                                    <Image src={items?.image} alt={items?.text} width={180} height={400} className="w-80" />
                                    <div className="text-center mt-3">
                                        <p className="fs-20 text-white text-center fw-800 mb-1">{items?.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>

            <section className="py-5">
                {aboutUsSections.map((e: DataFormat, index: number) => {
                    return (
                        <Link className="text-white cards-hover" href={e.redirect || '/'} key={index}>
                            {SectionContainer(e, index)}
                        </Link>
                    );
                })}
            </section>

            <section className="pt-lg-4" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
                <div className="container-fluid w-90 grey-bg">
                    <div className="row justify-content-center py-lg-5 py-4 detail-container">
                        <div className="col-12 text-center d-grid justify-content-center">
                            <h2 className="text-white mb-lg-4">Our customers love Plantd</h2>
                            {Testimonials()}
                        </div>
                    </div>
                </div>
            </section>

            <section className="plant-section py-5" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
                <div className="container-fluid w-90 pt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 about-plant relative">
                            <Image className="aboutmain-img1 w-60" src="/next-images/about/hiw-1.jpeg" alt="planting-img" width={400} height={500}/>
                            <Image className="about-img2" src="/next-images/about/hiw-2.webp" loading="lazy" alt="plantd-mature-tree img" width={280} height={280}/>
                        </div>
                        <div className="col-md-6 mt-4 ps-lg-5 ms-0">
                            <h2>How It Works?</h2>
                            <h3 className="mt-4">01</h3>
                            <p className="f-20 mt-2">Have trees planted monthly through subscription.</p>
                            <h3 className="mt-4">02</h3>
                            <p className="f-20 mt-2">Members can enter contests to win prizes and VIP experiences.</p>
                            <h3 className="mt-4">03</h3>
                            <p className="f-20 mt-2">Earn rewards by referring friends to join.</p>
                        </div>
                    </div>
                </div>
            </section>

            {SocialsBar()}
        </div>
    );
};

export default About;