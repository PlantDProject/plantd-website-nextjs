'use client';

import { StatsInterface } from '../Projects';
import '../projects.css';
import SimpleSlider from './Slider';

export default function Project({ data }: any) {
    return (
        <div style={{ backgroundColor: '#f6f7fb !important' }}>
            <section className="bg-home" style={{ backgroundImage: `url(${data?.bannerImage})` }} id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1 className="title title-color mb-18 text-center fs-50">{data?.title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4 container row justify-content-between mx-auto align-items-center mb-4 d-flex flex-nowrap">
                <div className="col-6 pt-lg-4">
                    <h2 className="text-green-dark fw-bold">About</h2>
                    <p className="fs-20 mt-2">{data?.about}</p>
                </div>
                <div className="col-6 py-5">
                    <SimpleSlider assets={data?.imageItems} />
                </div>
            </section>

            <section className="container row justify-content-between mx-auto align-items-center mb-4">
                <div className="col-12 pt-lg-4">
                    <h2 className="text-green-dark fw-bold">The importance of this project:</h2>
                    <p className="fs-20 mt-2">{data?.importance}</p>
                </div>
            </section>

            <section>
                <div className="stats-container py-5">
                    <div className="w-90 mx-auto d-flex flex-wrap">
                        {data?.stats?.map((stats: StatsInterface, index: number) => {
                            return (
                                <div className="px-4 mt-lg-0 mt-md-0 mt-4 col-lg-3 col-md-6 text-white text-center" key={index}>
                                    <h3 className="fw-bold">
                                        {stats?.value} {stats?.emoji}
                                    </h3>
                                    <p className="fs-18 mb-0">{stats?.content}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
