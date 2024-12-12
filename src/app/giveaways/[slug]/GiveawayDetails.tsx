'use client';

import '../giveaway.css';
import { IFrameRenderer, getImgUri, light } from '@/utils/helpers';
import CountdownTimer from './CountdownTimer';
import Link from 'next/link';
import CustomModal from '@/components/Navigation/Modal/modal';
import { useState } from 'react';

const GiveawayDetail = ({ eventData, winnersList }: any) => {
    const eventdate = new Date(eventData?.eventDate);
    const isCompleted = eventdate < new Date();
    const [isOpen, setIsOpen] = useState(false);
    const sweepData = <IFrameRenderer iframeHtml={eventData?.sweepstakeRules} />;

    const onClose = () => {
        setIsOpen(false);
    };

    const getTimeDate = (type: string) => {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        const eventday = week[new Date(eventData?.eventDate).getDay()];
        const eventdate = new Date(eventData?.eventDate).getDate();
        const eventyear = new Date(eventData?.eventDate).getFullYear();
        const eventmonth = month[new Date(eventData?.eventDate).getMonth()];

        switch (type) {
            case 'day':
                return eventday;
            case 'date':
                return eventdate;
            case 'month':
                return eventmonth;
            case 'year':
                return eventyear;
        }
    };
    return (
        <div>
            {/* Top Section */}

            <section className="bg-home giveaway-bg-home" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <img className="mx-auto" src={light} alt='logo' width="180px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Section */}

            <section className="bg-black py-5">
                <div className="row justify-content-center align-items-center text-center w-90 m-auto image-bg bg-dark-grey">
                    <div className="col-12 py-3 my-5 position-relative w-90 py-lg-5 py-md-4 py-3 px-lg-5 px-md-3 px-1 img-bg">
                        {/* Giveaway Title  */}

                        <h1 className="title text-white mb-4">{eventData?.eventTitle}</h1>

                        {/* Giveaway Title  */}

                        <div className="row align-items-center">
                            {/* Giveaway Video  */}

                            <div className="col-lg-5 col-12">
                                <video poster={getImgUri(eventData?.eventThumbnail)} controls className="videoAudioHeight">
                                    <source src={getImgUri(eventData?.videoUrl)} type="video/mp4" />
                                </video>
                            </div>

                            {/* Giveaway Video  */}

                            {/* Giveaway Countdown/Ended Text  */}

                            {isCompleted ? (
                                <div className="col-lg-7 col-12">
                                    <div className="lets-talk d-flex my-4 justify-center flex-wrap">
                                        <div className="col-12 fs-24 text-white fw-bold text-center">This Giveaway ended on</div>
                                        <div className="col-12 fs-24 text-green text-center">
                                            {getTimeDate('date')} {getTimeDate('month')} {getTimeDate('year')}
                                        </div>
                                        {winnersList?.length > 0 && (
                                            <div className="lets-talk d-flex my-4 justify-center">
                                                <Link className="btn primary-btn btn-rounded custom-btn py-1 px-3 how-to-enter-btn" href="#winners">
                                                    Show winner/s
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="col-lg-7 col-12">
                                    <h4 className="fw-normal text-white mb-4 mt-4 mt-lg-0">TIME REMAINING</h4>
                                    <CountdownTimer time={eventData?.eventDate} />
                                    <div className="lets-talk d-flex my-4 justify-center">
                                        <Link className="btn primary-btn btn-rounded custom-btn py-1 px-3 how-to-enter-btn" href="#howToEnter">
                                            How to Enter?
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Giveaway Countdown/Ended Text  */}
                        </div>

                        {/* Giveaway Description  */}

                        <div className="fs-22 text-left text-white px-3 mt-5">
                            <IFrameRenderer iframeHtml={eventData?.eventDescription} />
                        </div>

                        {/* Giveaway Description  */}

                        {/* How To Enter Section */}

                        <section className="row justify-content-center align-items-center text-center w-95 m-auto mb-4 py-lg-5 py-md-4 py-3 px-lg-5 px-md-3 px-1" id="howToEnter">
                            <h2 className="title mb-5 text-center fs-40 my-5 text-green how-to-enter">How to Enter?</h2>
                            <ol className="timeline">
                                <li className="timeline-item ">
                                    <div className="timeline-item-number fs-30">1</div>
                                    <div className="col-lg-6 col-12">
                                        <div className="fs-22 text-white text-left pb-lg-3 pb-2">Download the Plantd App.</div>
                                        <div className="fs-22 text-green text-left pb-lg-3 pb-0">Scan the QR code to download the Plantd app or Click below.</div>
                                    </div>
                                    <div className="foot-app-icon justify-content-start d-flex mb-md-0 mb-4 mt-2">
                                        <Link className="play-store me-2" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank" style={{ width: '150px' }}>
                                            <img src="/next-images/socials/play-store-colored.png" alt="Google Play" className="" />
                                        </Link>
                                        <Link className="app-store" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank" style={{ width: '150px' }}>
                                            <img src="/next-images/socials/app-store-colored.png" alt="App Store" className="" />
                                        </Link>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4 px-5 py-3 px-lg-0 py-lg-0">
                                        <img src="/next-images/giveaways/scanner-img-1.png" />
                                    </div>
                                </li>
                                <li className="timeline-item ">
                                    <div className="timeline-item-number fs-30">2</div>
                                    <div className="col-lg-6 col-12">
                                        <div className="fs-22 text-white text-left pb-lg-3 pb-2">Create Your Account.</div>
                                        <div className="fs-22 text-green text-left pb-lg-3 pb-0">Create your account with few quick steps or Sign-in with Google or Apple.</div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-4 px-5 py-3 px-lg-0 py-lg-0">
                                        <img src="/next-images/giveaways/scanner-img-2.png" />
                                    </div>
                                </li>
                                <li className="timeline-item ">
                                    <div className="timeline-item-number fs-30">3</div>
                                    <div className="col-lg-6 col-12">
                                        <div className="fs-22 text-white text-left pb-lg-3 pb-2">Subscribe to enter our {eventData?.eventTitle}</div>
                                        <div className="fs-22 text-green text-left pb-lg-3 pb-0">Submit your 10 chances to win. All it takes is one click!</div>
                                    </div>
                                    <div className="foot-app-icon d-flex mb-md-0 mb-4"></div>
                                    <div className="d-flex justify-content-center mt-4 px-5 py-3 px-lg-0 py-lg-0">
                                        <img src="/next-images/giveaways/scanner-img-3.png" />
                                    </div>
                                </li>
                            </ol>
                        </section>

                        {/* How To Enter Section */}

                        {/* Giveaway Ends on Section */}

                        {!isCompleted && (
                            <div className="row justify-center align-items-center mb-5">
                                <div className="col-12 col-lg-4 fs-24 text-white fw-bold text-center ends-on">
                                    Giveaway <br />
                                    Ends On:
                                </div>
                                <div className="col-12 col-lg-4 eventdate-div">
                                    <p className="f-15 text-white mb-0">{getTimeDate('day')}</p>
                                    <h3 className="text-green m-0 fw-bold">
                                        {getTimeDate('date')}
                                        <br />
                                        {getTimeDate('month')}
                                    </h3>
                                </div>
                                <div className="col-12 col-lg-4 fs-24 text-white fw-bold text-center">{getTimeDate('year')}</div>
                            </div>
                        )}

                        {/* Giveaway Ends on Section */}

                        {/* Enter now button */}

                        {!isCompleted && (
                            <div className="lets-talk d-flex my-4 justify-center">
                                <Link className="btn primary-btn btn-rounded custom-btn py-1 px-3" href={`https://app.plantd.life/MW/GiveawayDetail?eventId=${eventData?.eventId}`}>
                                    Enter Now
                                </Link>
                            </div>
                        )}

                        {/* Enter now button */}

                        {/* Winners Section */}

                        {isCompleted && (
                            <div id="winners">
                                <h3 className="text-white my-4">Winner / s</h3>
                                <div className="row justify-around">
                                    {winnersList?.map((e: any, i: string) => {
                                        return (
                                            <div key={i} className="col-12 col-md-4 d-flex align-items-center justify-center flex-column">
                                                <img src="/next-images/giveaways/userIcon.png" width={150} alt="Winner Dummy Image"></img>
                                                <p className="fs-22 text-white mt-3">
                                                    {e?.user?.firstName} {e?.user?.lastName}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Winners Section */}

                        {/* Sweepstake Rules */}

                        <div className="lets-talk d-flex my-4 justify-center ">
                            <a onClick={() => setIsOpen(true)} className="text-green text-decoration-underline cursor-pointer">
                                Sweepstakes Rules
                            </a>
                        </div>
                        <CustomModal isOpen={isOpen} modalType="sweepstake" sweepData={sweepData} onClose={onClose} />

                        {/* Sweepstake Rules */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GiveawayDetail;
