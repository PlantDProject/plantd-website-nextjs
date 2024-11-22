// components/Layout.js
'use client';
import React from 'react';
import './Navbar.css';
import { aboutUsData, solutionsData } from './DropdownItems';
import Link from 'next/link';
import { dark, light } from '@/utils/helpers';
import { usePathname } from 'next/navigation';
import { redirect } from 'next/navigation';

const Navbar = () => {
    const [showAboutUsDropdown, setShowAboutUsDropdown] = React.useState<boolean>(false);
    const [showProjectsDropdown, setShowProjectsDropdown] = React.useState<boolean>(false);
    const [showSolutionsDropdown, setShowSolutionsDropdown] = React.useState<boolean>(false);
    const [showBlogsDropdown, setShowBlogsDropdown] = React.useState<boolean>(false);
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true);
    const [show, setShow] = React.useState<boolean>(true);
    const [projectList, setProjectList] = React.useState<any>([]);
    const [blogList, setBlogList] = React.useState<any>([]);
    const pathName = usePathname();

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const projectsData = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
            const projectRes = await projectsData.json();
            setProjectList(projectRes?.projectList?.items || []);
        } catch {}

        try {
            const blogData = await fetch(`https://plantd.life/blogs/wp-json/wp/v2/posts`);
            const blogRes = await blogData.json();
            const firstFive = blogRes.slice(0, 5);
            setBlogList(firstFive);
        } catch {}
    };
    React.useEffect(() => {
        if (window && window.innerWidth < 991) setShow(false);
        setShowAboutUsDropdown(false);
        setShowProjectsDropdown(false);
    }, [pathName]);

    React.useEffect(() => {
        if (window && window.innerWidth < 991) setShow(false);
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 991) {
                if (show) setShow(false);
            } else {
                setShow(true);
            }
        });
    }, []);

    React.useEffect(() => {
        //add eventlistener to window
        window.addEventListener('scroll', onScroll, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            window.removeEventListener('scroll', onScroll, {});
        };
    }, []);

    const onScroll = React.useCallback(() => {
        setIsAtTop(window.scrollY === 0);
    }, []);

    const isActive = (path: string) => {
        return pathName.includes(path);
    };

    const getItem = (title: string, navigateTo: string, isNew: boolean = false, showArrow: boolean = false) => {
        return <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`}>{getLink(title, navigateTo, isNew, showArrow)}</li>;
    };

    const getLink = (title: string, navigateTo: string, isNew: boolean = false, showArrow: boolean = false) => {
        return (
            <Link className={`nav-link ${isActive(navigateTo) ? 'active' : ''}`} href={navigateTo}>
                {title}
                {isNew && <span className="new-tab">New</span>}
                {showArrow && <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />}
            </Link>
        );
    };

    const redirectTo = (path: string) => {
        switch (path) {
            case 'projects':
                if (window && window.innerWidth < 991 && !showProjectsDropdown) {
                    setShowProjectsDropdown(true);
                    setShowAboutUsDropdown(false);
                    return;
                }
                redirect('/projects');
                break;
            case 'about':
                if (window && window.innerWidth < 991 && !showAboutUsDropdown) {
                    setShowProjectsDropdown(false);
                    setShowAboutUsDropdown(true);
                    return;
                }
                redirect('/about');
                break;
        }
    };

    const headerLogo = (isMobile: boolean = false) => {
        if (isMobile) return dark;

        if (isAtTop) return light;

        return dark;
    };

    return (
        <div className="container-fluid px-lg-5 px-2">
            <nav className={`navbar navbar-expand-lg fixed-top bg-body-tertiary py-0 smooth ${isAtTop ? 'custom-nav' : ''}`}>
                <div className="container-fluid px-lg-5 py-3 py-lg-0 px-2">
                    <Link className="navbar-brand" href="/">
                        <img className="d-none d-lg-block" src={headerLogo()} width="50%" />
                        <img className="d-lg-none" src={headerLogo(true)} width="50%" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow((prev) => !prev)}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className={`show ${show ? 'addHeight' : ''} custom-collapsible navbar-collapse`} id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
                            <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`} onMouseEnter={() => setShowAboutUsDropdown(true)} onMouseLeave={() => setShowAboutUsDropdown(false)}>
                                <Link className={`nav-link ${showAboutUsDropdown ? 'arrow-dropdown' : ''}`} href="#" onClick={() => redirectTo('about')}>
                                    About Us
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-4 dropdown-menu center-dropdown ${showAboutUsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="aboutDropdown">
                                    {aboutUsData?.map((item: any, index: number) => {
                                        return (
                                            <li className="p-3 mx-2 col-4 d-flex align-items-center justify-content-between" key={index}>
                                                <div className="col-5 dropdown-img">
                                                    <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                                </div>
                                                <div className="col-7">
                                                    <Link href={`/about/${item?.slug}`} className="dropdown-item fw-300">
                                                        {item?.name}
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>

                            <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`} onMouseEnter={() => setShowProjectsDropdown(true)} onMouseLeave={() => setShowProjectsDropdown(false)}>
                                <Link className={`nav-link ${showProjectsDropdown ? 'arrow-dropdown' : ''} ${isActive('/projects') ? 'active' : ''}`} href="#" onClick={() => redirectTo('projects')}>
                                    Projects
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-4 dropdown-menu center-dropdown ${showProjectsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="projectsDropdown">
                                    {projectList?.map((item: any, index: number) => {
                                        return (
                                            <li className="p-3 col-4 d-flex align-items-center justify-content-between" key={index}>
                                                <div className="col-5 dropdown-img">
                                                    <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                                </div>
                                                <div className="col-7">
                                                    <Link href={`/projects/${item?.slug}`} className="dropdown-item fw-300">
                                                        {item?.name}
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>

                            <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`} onMouseEnter={() => setShowSolutionsDropdown(true)} onMouseLeave={() => setShowSolutionsDropdown(false)}>
                                <Link className={`nav-link ${showSolutionsDropdown ? 'arrow-dropdown' : ''} ${isActive('/solutions') ? 'active' : ''}`} href="#" onClick={() => redirectTo('projects')}>
                                    Solutions
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-4 dropdown-menu center-dropdown ${showSolutionsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="projectsDropdown">
                                    {solutionsData?.map((item: any, index: number) => {
                                        return (
                                            <li className="p-3 col-4 d-flex align-items-center justify-content-between" key={index}>
                                                <div className="col-5 dropdown-img">
                                                    <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                                </div>
                                                <div className="col-7">
                                                    <Link href={`/projects/${item?.slug}`} className="dropdown-item fw-300">
                                                        {item?.name}
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                    <li className="col-4"></li>
                                </ul>
                            </li>

                            <li className={`nav-item ${isAtTop ? 'color-white' : 'color-black'}`} onMouseEnter={() => setShowBlogsDropdown(true)} onMouseLeave={() => setShowBlogsDropdown(false)}>
                                <Link className={`nav-link ${showBlogsDropdown ? 'arrow-dropdown' : ''} ${isActive('/blogs') ? 'active' : ''}`} href="#" onClick={() => redirectTo('projects')}>
                                    Blogs
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-4 dropdown-menu center-dropdown ${showBlogsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="projectsDropdown">
                                    {blogList?.map((item: any, index: number) => {
                                        return (
                                            <li className="p-3 col-4 d-flex align-items-center justify-content-between" key={index}>
                                                <div className="col-5 dropdown-img">
                                                    <img src={item?.yoast_head_json?.og_image[0]?.url} alt={item?.title?.rendered} width="100%" />
                                                </div>
                                                <div className="col-7">
                                                    <Link href={`/blogs/${item?.slug}`} className="dropdown-item fw-300">
                                                        {item?.title?.rendered}
                                                    </Link>
                                                </div>
                                            </li>
                                        );
                                    })}
                                    <li className="col-4 btn-blog">
                                        <Link className="btn primary-btn" href="/blogs">
                                            More Blogs
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {getItem('Contact Us', '/contact-us')}
                        </ul>

                        <ul className="mb-0 ps-lg-2 ps-0">
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
