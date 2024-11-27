'use client';

import Link from 'next/link';
import { StatsInterface } from '../Projects';
import '../projects.css';
import SimpleSlider from './Slider';
import { IFrameRenderer } from '@/utils/helpers';
import { redirect } from 'next/navigation';

export default function Project({ data }: any) {
    const getColWidth = (length: number) => {
        switch (length) {
            case 1:
                return 'col-lg-12';
            case 2:
                return 'col-lg-6';
            case 3:
                return 'col-lg-4';
            case 4:
                return 'col-lg-3';
            default:
                break;
        }
    };

    return (
        <div style={{ backgroundColor: '#f6f7fb !important' }}>
            <section className="bg-home project-bg-home" style={{ backgroundImage: `url(${data?.bannerImage})` }} id="home">
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

            <section className="mt-4 container-fluid w-90 row justify-content-between mx-auto align-items-center mb-4 d-flex flex-lg-nowrap">
                <div className="col-12 col-lg-6 pt-lg-4 p-0">
                    <h2 className="text-green-dark fw-bold">About</h2>
                    <p className="fs-20 mt-2">{data?.about}</p>
                </div>
                <div className="col-12 col-lg-6 py-5">
                    <SimpleSlider assets={data?.imageItems} />
                </div>
            </section>

            <section className="container-fluid w-90 row justify-content-between mx-auto align-items-center pb-4">
                <div className="col-12 pt-lg-4 p-0">
                    <h2 className="text-green-dark fw-bold">The importance of this project:</h2>
                    <div className="fs-20 mt-2">
                        <IFrameRenderer iframeHtml={data?.importance} />
                    </div>
                </div>
            </section>

            <section>
                <div className="stats-container py-5">
                    <div className="w-90 mx-auto d-flex flex-wrap justify-center">
                        {data?.stats?.map((stats: StatsInterface, index: number) => {
                            return (
                                <div className={`px-4 mt-lg-0 mt-md-0 mt-4  col-md-6 text-white text-center ${getColWidth(data?.stats?.length)}`} key={index}>
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

            <section className="mt-4 container-fluid w-90 row justify-content-between mx-auto align-items-start mb-4 d-flex flex-lg-nowrap">
                <div className="col-12 col-lg-6 pt-lg-4 p-0">
                    {data?.communityBenefits && (
                        <div>
                            <h2 className="text-green-dark fw-bold">Community Benefits:</h2>
                            <p className="fs-20 mt-2 pe-lg-4">{data?.communityBenefits}</p>
                        </div>
                    )}

                    {data?.impacts && (
                        <div>
                            <h2 className="text-green-dark fw-bold">Impacts & Benefits:</h2>
                            <h3 className="text-green-dark fw-bold">Project benefits include:</h3>
                            <ul className="list-type-disc">
                                {data?.impacts?.map((impacts: string, index: number) => {
                                    return (
                                        <li className="fs-20" key={index}>
                                            {impacts}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}

                    <div className="lets-talk d-flex my-4 justify-center">
                        <Link className="btn primary-btn btn-rounded custom-btn py-2 px-5 start-planting mb-lg-0" onClick={() => {
                            redirect(`/contribute?project=${data?.slug}`)
                        }} href={``}>
                            Start Planting
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-lg-6 pt-lg-5 pb-5 p-0">
                    <IFrameRenderer iframeHtml={data?.iframe} />
                </div>
            </section>

            {data?.issuesToBeAddressed && (
                <section className="container-fluid w-90 row justify-content-between mx-auto align-items-center pb-4">
                    <div className="col-12 pt-lg-4">
                        <h2 className="text-green-dark fw-bold">Issues to be Addressed:</h2>

                        <ul className="list-type-disc">
                            {data?.issuesToBeAddressed?.map((issues: string, index: number) => {
                                return (
                                    <li className="fs-20" key={index}>
                                        {issues}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            )}
        </div>
    );
}
