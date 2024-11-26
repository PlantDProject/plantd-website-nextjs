// components/Layout.js
'use client';
import React from 'react';
import './Navbar.css';
import { aboutUsData, solutionsData } from './DropdownItems'; // Data for the dropdown menus
import Link from 'next/link';
import { light } from '@/utils/helpers'; // Helper functions for handling light/dark themes (unused in current code)
import { usePathname } from 'next/navigation'; // Hook to get the current pathname
import { redirect } from 'next/navigation'; // Helper to redirect programmatically

const Navbar = () => {
    // State for controlling dropdown visibility and navbar behavior
    const [showAboutUsDropdown, setShowAboutUsDropdown] = React.useState<boolean>(false);
    const [showProjectsDropdown, setShowProjectsDropdown] = React.useState<boolean>(false);
    const [showSolutionsDropdown, setShowSolutionsDropdown] = React.useState<boolean>(false);
    const [showBlogsDropdown, setShowBlogsDropdown] = React.useState<boolean>(false);
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true); // Checks if user is at the top of the page
    const [show, setShow] = React.useState<boolean>(false); // Controls the visibility of the mobile menu
    const [projectList, setProjectList] = React.useState<any>([]); // Stores project data
    const [blogList, setBlogList] = React.useState<any>([]); // Stores blog data
    const pathName = usePathname(); // Get current pathname

    // Fetch project and blog data when the component is mounted
    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // Fetch projects data from the API
            const projectsData = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
            const projectRes = await projectsData.json();
            setProjectList(projectRes?.projectList?.items || []); // Set the fetched project data
        } catch (error) {
            console.log(error);
            // Handle error (currently does nothing)
        }

        try {
            // Fetch blogs data from the external API (WordPress blog)
            const blogData = await fetch(`https://plantd.life/blogs/wp-json/wp/v2/posts`);
            const blogRes = await blogData.json();
            const firstFive = blogRes.slice(0, 5); // Get the first five blog posts
            setBlogList(firstFive); // Set the fetched blog data
        } catch (error) {
            console.log(error);
            // Handle error (currently does nothing)
        }
    };

    // Adjust mobile menu visibility based on screen size and pathname changes
    React.useEffect(() => {
        if (window && window.innerWidth > 991) setShow(true); // Show menu on larger screens
        else setShow(false); // Hide menu on smaller screens
        setShowAboutUsDropdown(false);
        setShowProjectsDropdown(false);
    }, [pathName]);

    // Lock scrolling on mobile when the menu is open
    React.useEffect(() => {
        if (show && window && window.innerWidth < 991) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [show]);

    // Set the initial state for larger screens
    React.useEffect(() => {
        if (window && window.innerWidth > 991) setShow(true);
    }, []);

    // Handle window resize to adjust menu visibility
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 991) {
                if (show) setShow(false); // Close menu on small screens
            } else {
                setShow(true); // Open menu on larger screens
            }
        });
    }, []);

    // Listen to the scroll event and check if the user is at the top of the page
    React.useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll); // Cleanup the event listener
        };
    }, []);

    const onScroll = React.useCallback(() => {
        setIsAtTop(window.scrollY === 0); // Update the state based on scroll position
    }, []);

    // Helper function to check if a link is active based on the current path
    const isActive = (path: string) => {
        return pathName.includes(path);
    };

    // Helper function to render individual nav items
    const getItem = (title: string, navigateTo: string, isNew: boolean = false, showArrow: boolean = false) => {
        return <li className={`nav-item color-white`}>{getLink(title, navigateTo, isNew, showArrow)}</li>;
    };

    // Helper function to render a Link component with optional 'New' tab or arrow
    const getLink = (title: string, navigateTo: string, isNew: boolean = false, showArrow: boolean = false) => {
        return (
            <Link className={`nav-link ${isActive(navigateTo) ? 'active' : ''}`} href={navigateTo}>
                {title}
                {isNew && <span className="new-tab">New</span>} {/* Optional 'New' tag */}
                {showArrow && <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />} {/* Optional arrow icon */}
            </Link>
        );
    };

    // Handle redirects for navigation with dropdown behavior for smaller screens
    const redirectTo = (path: string) => {
        setShowAboutUsDropdown(false);
        setShowProjectsDropdown(false);
        setShowSolutionsDropdown(false);
        setShowBlogsDropdown(false);

        switch (path) {
            case 'about':
                if (window && window.innerWidth < 991 && !showAboutUsDropdown) {
                    setShowAboutUsDropdown(true);
                    return;
                }
                redirect('/about');
                break;
            case 'projects':
                if (window && window.innerWidth < 991 && !showProjectsDropdown) {
                    setShowProjectsDropdown(true);
                    return;
                }
                redirect('/projects');
                break;
            case 'solutions':
                if (window && window.innerWidth < 991 && !showProjectsDropdown) {
                    setShowSolutionsDropdown(true);
                    return;
                }
                redirect('/solutions');
                break;
            case 'blogs':
                if (window && window.innerWidth < 991 && !showAboutUsDropdown) {
                    setShowBlogsDropdown(true);
                    return;
                }
                redirect('/about');
                break;
        }
    };

    // Close the navbar menu (for mobile devices)
    const closeNavbar = () => {
        setShow((prev) => !prev); // Toggle the menu visibility
        setShowAboutUsDropdown(false);
        setShowProjectsDropdown(false);
        setShowSolutionsDropdown(false);
        setShowBlogsDropdown(false);
    };

    return (
        <div className="container-fluid px-lg-5 px-2">
            <nav className={`navbar navbar-expand-lg fixed-top py-0 smooth ${isAtTop ? 'custom-nav' : 'bg-black'}`}>
                <div className="container-fluid px-lg-5 py-3 py-lg-0 px-2">
                    <Link className="navbar-brand col-3" href="/">
                        <img className="" src={light} width="100%" />
                    </Link>

                    <div className="d-flex align-items-center">
                        <ul className="mb-0 ps-lg-2 ps-0 d-block me-4 d-lg-none">
                            <li className="nav-item">
                                <Link className="btn primary-btn" href="sign-up">
                                    Sign Up Now
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile menu toggle button */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={closeNavbar}>
                            {show ? <i className="fa fa-times"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
                        </button>
                    </div>

                    <div className={`show ${show ? 'addHeight' : ''} custom-collapsible navbar-collapse`} id="navbarText">
                        {/* Navbar items */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
                            {/* About Us Dropdown */}
                            <li className={`nav-item color-white`} onMouseEnter={() => setShowAboutUsDropdown(true)} onMouseLeave={() => setShowAboutUsDropdown(false)}>
                                <Link className={`nav-link ${showAboutUsDropdown ? 'arrow-dropdown' : ''}`} href="#" onClick={() => redirectTo('about')}>
                                    About Us
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                {/* Dropdown menu for 'About Us' */}
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showAboutUsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="aboutDropdown">
                                    {aboutUsData?.map((item: any, index: number) => (
                                        <Link href={`/about/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                            <div className="col-2 col-lg-5 dropdown-img">
                                                <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                            </div>
                                            <div className="col-9 col-lg-7">
                                                <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            </li>

                            {/* Projects Dropdown */}
                            <li className={`nav-item color-white`} onMouseEnter={() => setShowProjectsDropdown(true)} onMouseLeave={() => setShowProjectsDropdown(false)}>
                                <Link className={`nav-link ${showProjectsDropdown ? 'arrow-dropdown' : ''} ${isActive('/projects') ? 'active' : ''}`} href="#" onClick={() => redirectTo('projects')}>
                                    Projects
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                {/* Dropdown menu for 'Projects' */}
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showProjectsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="projectsDropdown">
                                    {projectList?.map((item: any, index: number) => (
                                        <Link href={`/projects/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                            <div className="col-2 col-lg-5 dropdown-img">
                                                <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                            </div>
                                            <div className="col-9 col-lg-7">
                                                <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            </li>

                            {/* Solutions Dropdown */}
                            <li className={`nav-item color-white`} onMouseEnter={() => setShowSolutionsDropdown(true)} onMouseLeave={() => setShowSolutionsDropdown(false)}>
                                <Link className={`nav-link ${showSolutionsDropdown ? 'arrow-dropdown' : ''} ${isActive('/solutions') ? 'active' : ''}`} href="#" onClick={() => redirectTo('solutions')}>
                                    Solutions
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                {/* Dropdown menu for 'Solutions' */}
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showSolutionsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="solutionsDropdown">
                                    {solutionsData?.map((item: any, index: number) => (
                                        <Link href={`/solutions/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                            <div className="col-2 col-lg-5 dropdown-img">
                                                <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                            </div>
                                            <div className="col-9 col-lg-7">
                                                <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            </li>

                            {/* Blogs Dropdown */}
                            <li className={`nav-item color-white`} onMouseEnter={() => setShowBlogsDropdown(true)} onMouseLeave={() => setShowBlogsDropdown(false)}>
                                <Link className={`nav-link ${showBlogsDropdown ? 'arrow-dropdown' : ''} ${isActive('/blogs') ? 'active' : ''}`} href="#" onClick={() => redirectTo('blogs')}>
                                    Blogs
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                {/* Dropdown menu for 'Blogs' */}
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showBlogsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="blogsDropdown">
                                    {blogList?.map((item: any, index: number) => (
                                        <Link href={`/blogs/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                            <div className="col-2 col-lg-5 dropdown-img">
                                                <img src={item?.yoast_head_json?.og_image[0]?.url} alt={item?.title?.rendered} width="100%" />
                                            </div>
                                            <div className="col-9 col-lg-7">
                                                <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.title?.rendered}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    {/* Button to view more blogs */}
                                    <li className="col-4 btn-blog d-flex justify-center">
                                        <Link className="btn primary-btn text-light" href="/blogs">
                                            More Blogs
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Contact Us Link */}
                            {getItem('Contact Us', '/contact-us')}
                        </ul>

                        {/* Sign Up Button for larger screens */}
                        <ul className="mb-0 ps-lg-2 ps-0 d-none d-lg-block">
                            <li className="nav-item">
                                <Link className="btn primary-btn" href="sign-up">
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
