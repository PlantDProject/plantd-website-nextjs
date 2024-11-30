'use client';

import { isEven } from '@/utils/helpers';
import './projects.css';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import CardCarousel from '@/components/Carousel';

interface ProjectsInterface {
    title: string;
    name: string;
    image: string;
    stats: StatsInterface[];
    slug: string;
}

export interface StatsInterface {
    value: string;
    content: string;
    emoji: string;
}

const Projects = ({ projectsList }: any) => {

    return (
        <div className="dark-bg">
            <section className="project-bg-home" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1 className="title text-white mb-18 text-center fs-50">Projects</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid w-90">
                <section className="">
                    <p className="fs-20 mt-5 mb-lg-5 mb-4 mx-lg-5 mx-0 fw-300 text-light">Plantd’s Mission is to be able to plant One Billion Trees to be able to make an impact in fighting climate change. We have made and continue to make efforts to support different reforestation projects all over the world. Take a look at some of the ongoing climate change actions worldwide.</p>
                </section>

                <section className="">
                    <div className="container-fluid w-90">
                        <h2 className="text-green text-center mb-lg-4 mt-1 fw-bold mb-3">Current Projects</h2>
                    </div>
                </section>

                <section className="">
                    <div className="container-fluid w-90">
                        <CardCarousel cards={projectsList} />
                    </div>
                </section>

                <section className="cards-wrapper">
                    {projectsList?.map((items: ProjectsInterface, index: number) => {
                        return (
                            <div
                                key={index}
                                className="project-cards"
                                onClick={() => {
                                    redirect(`/projects/${items?.slug}`);
                                }}
                            >
                                <div className="row justify-content-center align-items-center">
                                    <div className={`col-12 mt-4 mb-lg-4 mb-0 col-lg-6 ${isEven(index) ? 'order-0' : 'order-1'}`}>
                                        <h3 className="text-light hover-green my-3 fw-bold">{items?.title}</h3>
                                        {items?.stats.map((e: StatsInterface, i: number) => {
                                            return (
                                                <p key={i} className="project-facts text-light">
                                                    <span className="text-green fw-bold">{e?.value}</span> {e?.content} {e?.emoji}
                                                </p>
                                            );
                                        })}
                                    </div>
                                    <div className={`col-6 d-none d-lg-block ${isEven(index) ? 'order-1' : 'order-0'}`}>
                                        <img className="project-image mx-auto" src={items?.image} alt={items?.name} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
            <section className="section-green py-5 mt-5">
                <div className="container flex-lg-nowrap align-center justify-between">
                    <div className="col-12 col-lg-6 text-center">
                        <h2 className="align-items-center text-white justify-center d-flex h-100 mb-0 fw-bold">Get Started Now</h2>
                    </div>

                    <div className="col-12 col-lg-6 align-items-center justify-center d-flex">
                        <Link className="app-store me-3 " href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                            <img src="https://test.plantd.life/images/plantdimg/App-Store-White-1.png" alt="App Store" className="ms-auto" width="60%" />
                        </Link>
                        <Link className="play-store" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                            <img src="https://test.plantd.life/images/plantdimg/Google-Play-White-1.png" alt="Google Play" className="" width="60%" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
