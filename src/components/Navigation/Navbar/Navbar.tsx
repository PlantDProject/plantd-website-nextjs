// components/Layout.js
'use client';
import React from 'react';
import './Navbar.css';
import { AboutUs, DropdownData, ProjectsList } from './DropdownItems';
import Link from 'next/link';

const Navbar = () => {
    const [showGiveawaysDropdown, setShowGiveawaysDropdown] = React.useState<boolean>(false);
    const [showProjectsDropdown, setShowProjectsDropdown] = React.useState<boolean>(false);
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true);
    const [show, setShow] = React.useState<boolean>(true);

    const onScroll = React.useCallback(() => {
        const { scrollY } = window;
        console.log('scrollY', scrollY);
        setIsAtTop(window.scrollY === 0);
    }, []);

    React.useEffect(() => {
        //add eventlistener to window
        window.addEventListener('scroll', onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener('scroll', onScroll, {});
        };
    }, []);

    const getItem = (title: string, navigateTo: string, isNew: boolean = false, showArrow: boolean = false) => {
        return <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`}>{getLink(title, navigateTo, isNew, showArrow)}</li>;
    };

    const getLink = (title: string, navigateTo: string, isNew: boolean = false, showArrow: boolean = false) => {
        return (
            <Link className="nav-link" href={navigateTo}>
                {title}
                {isNew && <span className="new-tab">New</span>}
                {showArrow && <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />}
            </Link>
        );
    };

    return (
        <div className="container-fluid px-lg-5 px-2">
            <nav className={`navbar navbar-expand-lg fixed-top bg-body-tertiary py-0 smooth ${isAtTop ? 'custom-nav' : ''}`}>
                <div className="container-fluid px-lg-5">
                    <Link className="navbar-brand" href="/">
                        <img src="https://test.plantd.life/images/plantdimg/logo-dark.png" width="50%" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => {
                            console.log(show);
                            setShow((prev) => !prev);
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${show ? 'show' : 'collapse'} navbar-collapse`} id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
                            <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`} onMouseEnter={() => setShowGiveawaysDropdown(true)} onMouseLeave={() => setShowGiveawaysDropdown(false)}>
                                {getLink('About Us', '#', false, true)}
                                <ul className={`dropdown-menu ${showGiveawaysDropdown ? 'show' : ''}`} id="aboutDropdown">
                                    {AboutUs?.map((item: DropdownData, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item?.redirection} className="dropdown-item">
                                                    {item?.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>

                            <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`} onMouseEnter={() => setShowProjectsDropdown(true)} onMouseLeave={() => setShowProjectsDropdown(false)}>
                                {getLink('Projects', '#', false, true)}
                                <ul className={`dropdown-menu ${showProjectsDropdown ? 'show' : ''}`} id="projectsDropdown">
                                    {ProjectsList?.map((item: DropdownData, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item?.redirection} className="dropdown-item">
                                                    {item?.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>

                            {getItem('Blogs', '#')}
                            {getItem('Contact Us', '#')}
                            {getItem('Contribute', '#', true)}
                            {getItem('Giveaways', '/giveaways')}
                        </ul>

                        <ul className="mb-0 ps-2">
                            <li className="nav-item">
                                <Link className="btn primary-btn" href="#">
                                    Sign Up Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
