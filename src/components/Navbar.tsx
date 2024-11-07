// components/Layout.js
"use client";
import Link from 'next/link';
import React from 'react';
import './Navbar.css';

const Navbar = () => {

    const [showGiveawaysDropdown, setShowGiveawaysDropdown] = React.useState<boolean>(false)

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark p-0">
            <div className="container-fluid px-lg-5 px-2">
                <a className="navbar-brand" href="/">
                    <img
                        className="head-white"
                        src="https://test.plantd.life/images/plantdimg/logo-dark.png"
                        alt="plantd featured logo"
                        width="50%"
                    />
                    <img
                        className="head-dark d-none"
                        src="https://test.plantd.life/images/plantdimg/logo-dark.png"
                        alt="plantd featured logo"
                        loading="lazy"
                        width="50%"
                    />
                </a>
                <a className="navbar-brand-mobile d-none" href="/">
                    <img
                        className="head-white"
                        src="https://test.plantd.life/images/plantdimg/logo-dark.png"
                        alt="plantd featured logo"
                        width="50%"
                    />
                    <img
                        className="head-dark d-none"
                        src="https://test.plantd.life/images/plantdimg/logo-dark.png"
                        alt="plantd featured logo"
                        loading="lazy"
                        width="50%"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="mySidenav">
                                
                        <li className="nav-item dropdown" onMouseLeave={() => setShowGiveawaysDropdown(true)}>
                            <a
                                href="../about/"
                                className="nav-link smoothlink dropdown-trigger"
                                id="aboutLink"
                                data-dropdown-id="aboutDropdown"
                                onMouseEnter={() => {setShowGiveawaysDropdown(true)}}
                            >
                                About us <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className={`dropdown-menu ${showGiveawaysDropdown ? "show" : ""}`} id="aboutDropdown">
                                <li>
                                    <a href="../about/make-an-impact-together" className="dropdown-item">
                                        Make an Impact Together
                                    </a>
                                </li>
                                <li>
                                    <a href="../about/our-green-initiative-app" className="dropdown-item">
                                        Our Green initiative App
                                    </a>
                                </li>
                                <li>
                                    <a href="../about/reduce-your-carbon-footprint" className="dropdown-item">
                                        Reduce Your Carbon Footprint
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../about/never-underestimate-the-power-of-a-seed"
                                        className="dropdown-item"
                                    >
                                        Never Underestimate The Power of a Seed
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ambassador.plantd.life/" target="_blank" className="dropdown-item">
                                        Ambassadors
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                href="../projects"
                                id="projectLink"
                                className="nav-link smoothlink dropdown-trigger"
                                data-dropdown-id="projectDropdown"
                            >
                                Projects <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu" id="projectDropdown">
                                <li>
                                    <a
                                        href="../projects/projectDetail?senegal-farming-and-reforestation"
                                        className="dropdown-item"
                                    >
                                        Reforestation in Senegal
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../projects/projectDetail?long-leaf-pine-reforestation"
                                        className="dropdown-item"
                                    >
                                        Reforestation in Texas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../projects/projectDetail?louisiana-natural-disasters"
                                        className="dropdown-item"
                                    >
                                        Reforestation in Louisiana
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../projects/projectDetail?california-rim-wildfire"
                                        className="dropdown-item"
                                    >
                                        Reforestation in California
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../projects/projectDetail?climate-action-honduras"
                                        className="dropdown-item"
                                    >
                                        Reforestation in the Honduras
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../projects/projectDetail?climate-action-philippines"
                                        className="dropdown-item"
                                    >
                                        Reforestation in the Philippines
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://plantd.life/blogs/" className="nav-link smoothlink">
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a href="../contact-us" className="nav-link smoothlink">
                                Contact us
                            </a>
                        </li>
                        <li className="position-relative">
                            <a href="../contribute" className="nav-link smoothlink activate">
                                Contribute
                            </a>
                            <span className="newTip">New</span>
                        </li>
                        <li>
                            <a href="../giveaways" className="nav-link smoothlink">
                                Giveaways
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-button d-lg-inline-block">
                        <a href="../sign-up" className="btn btn-sm btn-soft-primary btn-round">
                            Sign Up Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
