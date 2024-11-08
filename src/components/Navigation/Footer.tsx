// Import React and Next.js hooks

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [appLink, setAppLink] = useState('');
    const isSpecialPage =
        typeof window !== 'undefined' &&
        (window.location.pathname.includes('projects') ||
            window.location.pathname.includes('giveaways') ||
            window.location.pathname.includes('about'));

    useEffect(() => {
        if (window.location.hostname === 'plantd.life') {
            setAppLink('https://app.plantd.life/MW/Footer/AppDownload');
        } else {
            setAppLink('https://app-test.plantd.life/MW/Footer/AppDownload');
        }
    }, []);

    return (
        <div className="container-fluid w-90 footer" data-nosnippet="true">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-info">
                                {/* <img
                                    className="foot-logo"
                                    src={
                                        isSpecialPage
                                            ? '../images/plantdimg/logo-white.png'
                                            : 'images/plantdimg/logo-white.png'
                                    }
                                    alt="plantd featured logo"
                                    loading="lazy"
                                /> */}
                                <p className="text-muted mt-lg-4 mt-md-2 mt-4 f-15 mb-2 foot-para">
                                    Plantd is just a seedling – young, fun, and exciting. We’re capturing the best of
                                    both worlds in a movement to help our members GO green to MAKE green.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center contact-info">
                            <div className="mt-4">
                                <h4 className="text-muted f-18">Contact us</h4>
                                <span className="text-muted f-15 fw-700">Email:</span>
                                <a onClick={() => {}} className="text-muted f-15" href="mailto:info@plantd.life">
                                    info@plantd.life
                                </a>
                                <h4 className="text-muted f-18 mt-lg-4 mt-md-2 mt-4">Download App</h4>
                                <div className="foot-app-icon">
                                    <a onClick={() => {}} href={appLink} target="_blank" rel="noopener noreferrer">
                                        {/* <img
                                            src={
                                                isSpecialPage
                                                    ? '../images/plantdimg/App-Store-White-1.png'
                                                    : 'images/plantdimg/App-Store-White-1.png'
                                            }
                                            className="mt-3 me-md-2"
                                            width="30%"
                                            alt="app-store img"
                                            loading="lazy"
                                        /> */}
                                    </a>
                                    <a onClick={() => {}} href={appLink} target="_blank" rel="noopener noreferrer">
                                        {/* <img
                                            src={
                                                isSpecialPage
                                                    ? '../images/plantdimg/Google-Play-White-1.png'
                                                    : 'images/plantdimg/Google-Play-White-1.png'
                                            }
                                            className="mt-3"
                                            width="30%"
                                            alt="play-store img"
                                            loading="lazy"
                                        /> */}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 usefullinks">
                            <div className="mt-4">
                                <h4 className="text-muted f-18">Useful links</h4>
                                <div className="d-flex flex-row link-head">
                                    <ul className="list-unstyled footer-link mt-lg-3 mt-md-1 mt-3 me-md-5">
                                        <li>
                                            <Link href="#">About us</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Projects</Link>
                                        </li>
                                        <li>
                                            <Link href="#">FAQs</Link>
                                        </li>
                                        {/* Add other useful links as needed */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
