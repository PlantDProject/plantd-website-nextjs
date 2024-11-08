// components/Footer.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container-fluid footer" data-nosnippet="true">
                <div className="row w-90 mx-auto">
                    <div className="col-md-4 footer-info">
                        <img src="https://test.plantd.life/images/plantdimg/logo-white.png" alt="plantd featured logo" className="foot-logo" />
                        <p className="mt-lg-4 mt-md-2 mt-4 f-15 mb-2 foot-para">Plantd is just a seedling – young, fun and exciting. We’re capturing the best of both worlds in a movement to help our members GO green to MAKE green.</p>
                    </div>
                    <div className="col-md-4 contact-info">
                        <div className="">
                            <h4 className="f-18">Contact us</h4>
                            <span className="f-15 fw-700">Email:</span>
                            <Link href="mailto:info@plantd.life" className="f-15 text-white">
                                info@plantd.life
                            </Link>
                            <h4 className="f-18 mt-lg-4 mt-md-2 mt-4">Download App</h4>
                            <div className="foot-app-icon d-flex">
                                <Link href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                                    <img src="https://test.plantd.life/images/plantdimg/App-Store-White-1.png" alt="App Store" width={150} height={40} className="mt-3 me-md-2" />
                                </Link>
                                <Link href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                                    <img src="https://test.plantd.life/images/plantdimg/Google-Play-White-1.png" alt="Google Play" width={150} height={40} className="mt-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="f-18">Useful links</h4>
                        <div className="d-flex">
                            <ul className="list-unstyled footer-link mt-lg-3 mt-md-1 mt-3 me-md-5">
                                <li>
                                    <Link href="/about" className="f-15 text-white">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="text-white f-15">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faqs" className="text-white f-15">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="text-white f-15">
                                        Blogs
                                    </Link>
                                </li>
                            </ul>

                            <ul className="list-unstyled footer-link mt-lg-3 mt-md-1 mt-3 me-md-5">
                                <li>
                                    <Link href="/policies" className="text-white f-15">
                                        Policies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-white f-15">
                                        Terms & conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-white f-15">
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ambassador" className="text-white f-15">
                                        Become an ambassador
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="social-icons mt-3">
                            <Link href="https://facebook.com" className="text-white me-2">
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link href="https://instagram.com" className="text-white me-2">
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link href="https://twitter.com" className="text-white me-2">
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link href="https://linkedin.com" className="text-white">
                                <i className="fa fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white mt-3">© Plantd Life, Inc 2024</div>
            </div>
        </footer>
    );
};

export default Footer;
