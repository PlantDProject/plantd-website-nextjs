import React from 'react';
import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import Link from 'next/link';
import './ambassador.css';
import { CardsData, cardsData } from './cards-data';

const title = 'Ambassador | Plantd';
const description = 'Plantd Brand Ambassador Program.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

const Ambassador = () => {
    // State to manage visibility of modal
    return (
        <div className="text-white dark-bg">
            {/* Main Hero Section */}
            <section className="ambassador-bg-home mb-4">
                <div className="container">
                    <div className="col-lg-10 d-grid justify-content-center mt-lg-0 mt-4">
                        <h1 className="amb-title text-white">
                            <strong>Plantd Brand Ambassador Program</strong>
                        </h1>
                        <div className="d-flex">
                            <Link className="btn primary-btn btn-rounded transparent-bg custom-btn py-2 mt-4" href="https://sldr.page.link/xG6w">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container d-flex py-5 flex-wrap">
                    <div className="order-lg-0 order-1 col-12 col-lg-6 amb-section pt-3 pe-3 mt-4 mt-lg-0">
                        <h2 className="amb-subheading">Become a Plantd Ambassador</h2>
                        <p>Do you want to use your platform to make an impact?</p>
                        <p>Do you want to inspire change for generations to come?</p>
                        <p>Do you want to join the Plantd movement to plant 1 Billion Trees?</p>
                        <p>We want you on our team to share our mission and join our cause. Together, we can make a greater impact and inspire so many to do the same.</p>
                    </div>
                    <div className="order-lg-1 order-0 col-12 col-lg-6 amb-section-image">
                        <img src="/next-images/ambassador/ambassador1.jpg" className="first-section-img" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container d-flex py-5 flex-wrap">
                    <div className="col-12 col-lg-6 amb-section-image">
                        <img src="/next-images/ambassador/ambassador2.jpg" className="first-section-img" />
                    </div>
                    <div className="col-12 col-lg-6 amb-section pt-3 ps-3 mt-4 mt-lg-0">
                        <h2 className="amb-subheading">THE PERKS:</h2>
                        <p>You’ll receive a personalized link to share with your friends, family, and followers. For every person who subscribes through your link, you’ll be rewarded with commission.</p>
                        <p>You will have access to challenges where you can participate to earn cash.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container d-flex flex-wrap my-lg-5">
                    {cardsData?.map((e: CardsData, index: number) => {
                        return (
                            <div className="dark-bg col-lg-4 col-md-6 col-12 amb-cards my-3" key={index}>
                                <img src={e?.image} alt={e?.alt} />
                                <p className="pt-3 px-3 text-white text-center">{e?.text}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section>
                <div className="container d-flex py-5 flex-wrap">
                    <div className="order-lg-0 order-1 col-12 col-lg-6 amb-section pt-3 pe-3 mt-4 mt-lg-0">
                        <h5 className="fw-300">HOW DO I SIGN UP?</h5>
                        <h2 className="amb-subheading">Next Steps</h2>
                        <p>Fill out the Program Application form (it's free to sign up), we’ll review it and once you're accepted we'll send you all the information you need to get started as a Plantd Ambassador!</p>
                        <p>If you're already an Ambassador and want to login to your Social Ladder Ambassador Dashboard, click on the 'LOGIN' button below.</p>
                    </div>
                    <div className="order-lg-1 order-0 col-12 col-lg-6 amb-section-image">
                        <img src="/next-images/ambassador/ambassador3.jpg" className="first-section-img" />
                    </div>
                </div>
            </section>

            <section className="section-light-green">
                <div className="container d-flex py-lg-5 py-4 flex-wrap align-items-center justify-center contact-section">
                    <div className="col-lg-4 col-8 mb-4 mb-lg-0 mx-3">
                        <Link className="btn primary-btn btn-rounded transparent-bg custom-btn py-2 w-100" href="https://sldr.page.link/xG6w">
                            Apply Now
                        </Link>
                    </div>
                    <div className="col-lg-4 col-8 mx-3">
                        <Link className="btn primary-btn btn-rounded transparent-bg custom-btn py-2 w-100" href="https://socialladder.rkiapps.com/ambdash?areaGuid=B5CB4C9C-F1EF-41FF-AAFB-B2A2368B0602">
                            Login
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ambassador;
