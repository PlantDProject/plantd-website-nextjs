'use client';

import Link from 'next/link';
import './thankyou.css';
import { getImgUri } from '@/utils/helpers';
import Image from 'next/image';

export default function Thankyou({ onGoingEvents }: any) {
    const eventCards = (event: any, index: number) => {
        return (
            <Link href={`giveaways/${event?.eventSlug}`} key={index} className="col-md-6 col-lg-3 col-12 py-3 position-relative thankyou-giveaway-card">
                <Image src={getImgUri(event?.imageUrl)} className="my-2 ty-img mx-auto w-95" alt={event?.eventName} width={250} height={280} />
                <p className="px-4 py-2 fs-20 mb-0 fw-bold text-white">{event?.eventName}</p>
            </Link>
        );
    };

    return (
        <div className="bg-dark-grey text-white">
            <div className="thankyou-bg-home">
                <div className="container d-flex text-center flex-wrap align-items-center justify-center">
                    <div className="col-12">
                        <Image src="/next-images/headlogo.webp" className="mx-auto" width={250} height={130} alt="Plantd logo"/>
                    </div>
                    <div className="col-12">
                        <h1>Welcome to Plantd !</h1>
                        <h1>A Tree is being planted on Your behalf.</h1>
                    </div>
                    <div className="justify-content-center align-items-center col-12 d-flex my-5 flex-col flex-sm-row">
                        <Link className="play-store mb-4 mb-sm-0 me-sm-2" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank" style={{ width: '180px' }}>
                            <Image src="/next-images/socials/play-store-colored.png" alt="Google Play" width={180} height={60} />
                        </Link>
                        <Link className="app-store ms-sm-2" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank" style={{ width: '180px' }}>
                            <Image src="/next-images/socials/app-store-colored.png" alt="App Store" width={180} height={60} />
                        </Link>
                    </div>
                </div>
            </div>

            <section className="py-5 bg-black">
                <div className="container-fluid w-90 thankoyu-bg-explore">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-md-10 col-12 pt-lg-5 pt-2 pb-ld-3 pb-2">
                            <h2 className="title-heading text-center">Explore More</h2>
                            <p className="f-18 mt-2 mb-5 w-90 m-auto text-center">
                                Download the Plantd app to get started. Check your inbox for login details. See how many trees you planted. Track your impact. Share the movement with friends to receive cash incentives. <span className="text-green">Enter our epic experiences &amp; much more!</span>
                            </p>
                            <div className="thankyou-explore-more-images justify-center col-12 d-flex justify-center flex-col flex-sm-row">
                                <Image width={223} height={400} src="/next-images/thankyou/ty1.png" className="pb-lg-5 pb-3 pe-sm-3 pe-0 ty-img" alt="mobile-feature-page img" />
                                <Image width={223} height={400} src="/next-images/thankyou/ty2.png" className="pb-lg-5 pb-0 ps-sm-3 ps-0 ty-img" alt="mobile-giveaway-page img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 bg-black">
                <div className="container-fluid bg-dark-grey w-90 p-lg-5 p-md-4 px-1 py-4 d-flex flex-wrap justify-center">
                    <h2 className="title-heading text-center">Don’t Miss Out!</h2>
                    <p className="f-18 mt-2 mb-3 w-90 m-auto text-center">Enter to with our Epic Giveaways on the Plantd App.</p>
                    {onGoingEvents?.map((event: any, index: number) => eventCards(event, index))}
                </div>
            </section>
        </div>
    );
}
