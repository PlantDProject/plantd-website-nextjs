'use client';
import './individual.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Loading from '../loading';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { cursiveNormal } from '@/utils/fonts';
import 'swiper/css';
import { IFrameRenderer, trackEvent } from '@/utils/helpers';
import { appPerkData, uspData, leftWorkData, rightWorkData, mobileWorkData } from './individualItems';
import { appPerkInterface, uspInterface, leftWorkInterface, rightWorkInterface, mobileWorkInterface } from './individualItems';
import { appPerkBreakpoint, staticBreakpoints, workBreakpoint } from './individualItems';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { redirect } from 'next/navigation';
import nextConfig from '../../../next.config';

const Individual = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeWorkIndex, setActiveWorkIndex] = useState(0);
    const activeCardData = uspData[activeIndex]
    const activeWorkData = mobileWorkData[activeWorkIndex]

    useEffect(() => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }, [])

    useEffect(() => {
        if (activeCardData) {
            setAnimate(true);
            // Reset animation after it completes (0.5s animation duration)
            const timer = setTimeout(() => {
                setAnimate(false);
            }, 500);  // Duration should match the animation duration in CSS
            return () => clearTimeout(timer);  // Clean up the timer
        }
    }, [activeCardData]);

    const activeIndexFunc = (index: number, from: string) => {
        if (from === "usp") {
            setActiveIndex(index - 1);
        } else {
            setActiveWorkIndex(index - 1);
        }
    }
    const handleVideoClick = () => {
        trackEvent('Redirect to Plantd App/App Download')
        redirect(`${nextConfig?.env?.WEBSITE_ENV === 'production' ? `https://app.plantd.life/MW/QR`:`https://app-test.plantd.life/MW/InPage/AppDownload`}`)
    }

    return (
        <div className="bg-dark-grey">

            {/* Main Hero Section */}
            <section className="individual-bg-home bg-second-dark pb-0" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                {/* Left Side Content */}
                                <div className="col-lg-7">
                                    <h1 className="individual-title mb-4 text-white">Fight climate change with</h1>
                                    <div className='text-center'>

                                        <img src="/next-images/individual/banner-logo.webp" className='banner-logo' alt="Banner logo" />
                                    </div>
                                    <p className="individual-header-subtext text-white mb-0">
                                        Join the movement!
                                    </p>
                                    <p className="individual-header-subtext text-green ms-5">to plant 1 billion trees
                                    </p>
                                </div>

                                {/* Right Side Content */}
                                <div className="col-lg-5 position-relative mt-lg-0 mt-4">
                                    <p className={`fs-20 text-white text-center ${cursiveNormal.className}`}>Scan to download</p>
                                    <img src="/next-images/individual/down-arrow.png" className='m-auto' alt="Down arrow img" />
                                    <div className='scanner-div'>
                                        <video src="/next-videos/scanner.webm" className="scanweb" loop playsInline autoPlay muted webkit-playsinline="false" onClick={!isMobile ? undefined : handleVideoClick}></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLantd USP section */}
            <section className="mt-4">
                <div className="container w-95 individual-usp-section">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center d-grid justify-content-center">
                            <div className="col-12 mt-4 slider-div">
                                <Swiper
                                    spaceBetween={20} // Space between slides
                                    slidesPerView={4} // How many slides to show at once
                                    loop={false}
                                    onSlideChange={(swiper: any) => {
                                        setActiveIndex(swiper.realIndex);
                                    }}


                                    breakpoints={staticBreakpoints}
                                >
                                    {uspData?.map((items: uspInterface, index: number) => {
                                        const isActive = activeIndex === index;
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className={`usp-slider ${isActive ? 'active' : ''}`} onClick={() => activeIndexFunc(items?.id, "usp")}>
                                                    <div className="d-flex justify-content-between align-items-start usp-title-head">
                                                        <IFrameRenderer iframeHtml={items?.name} />
                                                        <img className={`arrow ${isActive ? `active ${animate ? 'do-animation' : ''}` : ''}`} src={`${isActive ? 'next-images/individual/arrow-up-white.webp' : 'next-images/individual/arrow-up.webp'}`} alt="arrow-up img" />
                                                    </div>
                                                    <hr className="text-white" />
                                                    <img src={items?.image} alt={items?.alt} className="mx-auto d-block" loading="lazy" />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <>
                            {activeCardData &&
                                <div className={`row mt-4 usp-active-div ${animate ? 'do-animation' : ''}`}>
                                    <div className="col-lg-6 p-0 left-col">
                                        <img src={activeCardData?.image} alt="objective img" />
                                    </div>
                                    <div className="col-lg-6 p-0 right-col">
                                        <div className="px-md-5 px-2 py-4">
                                            <Link onClick={() => trackEvent('to-signup')} href="/sign-up" >
                                                <h3 className="text-white">{activeCardData?.title}</h3>
                                            </Link>
                                            <hr className="text-dark" />
                                            <p className="text-white mx-4 usp-para">{activeCardData?.firstPoint}</p>
                                            <p className="text-white mx-4 usp-para">{activeCardData?.secondPoint}</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    </div>
                </div>
            </section>

            {/* SignUp section */}
            <section className="mt-4">
                <div className="container w-95">
                    <div className='individual-signup-section'>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 text-center px-4">
                                <span className="text-dark f-24 fw-600 pe-4">Plant your first tree with us for free</span>
                                <Link href="/sign-up" onClick={() => trackEvent('to-signup')} className="btn btn-soft-primary btn-round signupBtn">Sign
                                    Up Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work section */}
            <section className="mt-4">
                <div className="container w-95">
                    <div className='grey-bg individual-work-section'>
                        <div className="row justify-content-center align-items-center">
                            {!isMobile ? (
                                <>
                                    <div className="col-4">
                                        <div className="d-flex flex-column justify-content-center align-items-start">

                                            {leftWorkData.map((items: leftWorkInterface, index: number) => {
                                                const isActive = activeWorkIndex === index;
                                                return (
                                                    <div className={`px-4 py-3 work-div ${items?.id !== 2 ? `ms-auto` : `my-4`} ${isActive && `active`}`} key={index} onClick={() => activeIndexFunc(items?.id, "work")}>
                                                        <span className="left-count">{items?.id}</span>
                                                        <div>
                                                            <h3 className="text-white mb-0 fs-20">{items?.title}</h3>
                                                            <hr className="text-white my-2" />
                                                            <p className="text-white mb-0">{items?.subtext}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        {activeWorkData && (
                                            <img src={activeWorkData?.image} className='work-img' alt="hw1" />
                                        )}
                                    </div>
                                    <div className="col-4">
                                        <div className="d-flex flex-column justify-content-center align-items-start">
                                            {rightWorkData.map((items: rightWorkInterface, index: number) => {
                                                const isActive = activeWorkIndex === (index + 3);
                                                return (
                                                    <div className={`px-4 py-3 work-div ${items?.id === 5 ? `ms-auto my-4` : ``} ${isActive && `active`}`} key={index} onClick={() => activeIndexFunc(items?.id, 'work')}>
                                                        <span className="right-count">{items?.id}</span>
                                                        <div>
                                                            <h3 className="text-white mb-0 fs-20">{items?.title}</h3>
                                                            <hr className="text-white my-2" />
                                                            <p className="text-white mb-0">{items?.subtext}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="col-12 slider-div">
                                    <Swiper
                                        modules={[Pagination]}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        loop={true}
                                        centeredSlides={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        onSlideChange={(swiper: any) => {
                                            setActiveWorkIndex(swiper.realIndex);
                                        }}
                                        breakpoints={workBreakpoint}
                                    >
                                        {mobileWorkData.map((items: mobileWorkInterface, index: number) => {
                                            const isActive = activeWorkIndex === index;
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className='py-4' key={index}>
                                                        <span className="mobile-count">{items?.id}</span>
                                                        <div className={`px-4 pb-3 pt-lg-3 pt-4 work-div ${isActive && `active`}`}>
                                                            <h3 className="text-white mb-0 fs-20">{items?.title}</h3>
                                                            <hr className="text-white my-2" />
                                                            <p className="text-white mb-0">{items?.subtext}</p>
                                                        </div>
                                                        <img className='work-img my-4' src={items?.image} alt={items?.alt} />
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                </div>
                            )}
                            {/* <Swiper
                                    spaceBetween={20}
                                    slidesPerView={4}
                                    loop={false}
                                    centeredSlides={false}
                                    breakpoints={appPerkBreakpoint}
                                >
                                    {appPerkData.map((items: appPerkInterface, index: number) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="app-div py-4 px-2">
                                                    <img src={items?.image} alt={items?.alt} />
                                                    <IFrameRenderer iframeHtml={items?.name} />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper> */}
                        </div>
                    </div>
                </div>
            </section>


            {/* Map section */}
            <section className="mt-4">
                <div className="container w-95">
                    <div className='individual-map-section'>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 text-center py-5">
                                <h2 className="text-white">Win with Plantd</h2>
                                <p className="fs-20 text-white">Win epic experiences and exclusive giveaways</p>
                                <img src="next-images/individual/plantd-mobile.webp" className='m-auto pt-2' alt="Plantd mobile image" />
                                <Link href="/giveaways" onClick={() => trackEvent('to-giveaways')} className="btn btn-soft-primary btn-round exploreBtn mt-4">Explore our Giveaways</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Perks section */}
            <section className="py-4">
                <div className="container w-95">
                    <div className='grey-bg individual-app-section'>
                        <div className="row justify-content-center">
                            <div className="col-12 slider-div">
                                <Swiper
                                    spaceBetween={20} // Space between slides
                                    slidesPerView={4} // How many slides to show at once
                                    loop={false}
                                    centeredSlides={false}
                                    breakpoints={appPerkBreakpoint}
                                >
                                    {appPerkData.map((items: appPerkInterface, index: number) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="app-div py-4  px-2">
                                                    <img src={items?.image} alt={items?.alt} />
                                                    <IFrameRenderer iframeHtml={items?.name} />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isLoading && <Loading />}
        </div>
    );
};

export default Individual;
