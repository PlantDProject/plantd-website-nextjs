// components/Footer.js

import React from 'react';
import Link from 'next/link';
import './Footer.css';
import { poppinsNormal } from '@/utils/fonts';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={`footer-container ${poppinsNormal.className} fw-300`}>
            <div className="container-fluid footer text-white" data-nosnippet="true">
                <div className="row w-90 mx-auto">
                    <div className="col-md-4 footer-info">
                        <Image src="/next-images/logo-white.png" alt="plantd featured logo" className="foot-logo" width={200} height={100} />
                        <p className="mt-lg-4 mt-md-2 mt-4 f-15 mb-2 foot-para">Plantd is just a seedling – young, fun and exciting. We’re capturing the best of both worlds in a movement to help our members GO green to MAKE green.</p>
                    </div>
                    <div className="col-md-4 contact-info">
                        <div className="">
                            <h4 className="f-18 m-0">Contact us</h4>
                            <span className="f-15 fw-700">Email: </span>
                            <Link href="mailto:info@plantd.life" className="f-15 text-white">
                                info@plantd.life
                            </Link>
                            <h4 className="f-18 mt-lg-4 mb-lg-4 mt-4">Download App</h4>
                            <div className="foot-app-icon d-flex mb-md-0 mb-4">
                                <Link className="app-store" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank" style={{ width: '30%' }}>
                                    <Image src="/next-images/socials/app-store.png" alt="App Store" width={150} height={50} className="w-100 ms-auto" />
                                </Link>
                                <Link className="play-store" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank" style={{ width: '30%' }}>
                                    <Image src="/next-images/socials/play-store.png" alt="Google Play" width={150} height={50} className="w-100" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="f-18 mb-0">Useful links</h4>
                        <div className="useful-link-div d-flex justify-content-start">
                            <ul className="list-unstyled footer-link mt-lg-3 mt-md-1 mt-3 me-md-5 ">
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

                            <ul className="list-unstyled footer-link mt-lg-3 mt-md-1 ">
                                <li>
                                    <Link href="/privacy-policy" className="text-white f-15">
                                        Policies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-and-conditions" className="text-white f-15">
                                        Terms & conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="text-white f-15">
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
                        <div className="social-icons mt-md-3 mb-md-0 mt-4 mb-2">
                            <Link href="https://www.facebook.com/plantdmovement/" target="_blank" className="text-white me-2">
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link href="https://www.instagram.com/plantd/" target="_blank" className="text-white me-2">
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link href="https://twitter.com/plantdmovement" target="_blank" className="text-white me-2">
                                <i className="fa fa-twitter"></i>
                            </Link>
                            <Link href="https://www.linkedin.com/company/plantd-life/" target="_blank" className="text-white">
                                <i className="fa fa-linkedin"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center text-white mt-3">© <a className='text-white' href={`${process.env.WEBSITE_URL}/sitemap.xml`}>Plantd Life</a>, Inc 2024</div>
            </div>
        </footer>
    );
};

export default Footer;
