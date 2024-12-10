// components/Layout.js
'use client';
import React from 'react';
import './Navbar.css';
import { aboutUsData, solutionsData } from './DropdownItems';
import Link from 'next/link';
import { light } from '@/utils/helpers';
import { usePathname } from 'next/navigation';
import { redirect } from 'next/navigation';

const Navbar = () => {
    const [showAboutUsDropdown, setShowAboutUsDropdown] = React.useState<boolean>(false);
    const [showProjectsDropdown, setShowProjectsDropdown] = React.useState<boolean>(false);
    const [showSolutionsDropdown, setShowSolutionsDropdown] = React.useState<boolean>(false);
    const [showBlogsDropdown, setShowBlogsDropdown] = React.useState<boolean>(false);
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true);
    const [show, setShow] = React.useState<boolean>(false);
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
            console.log('PROJECT', projectRes);
            const firstSixProjects = projectRes?.projectList?.items?.slice(0, 6);
            setProjectList(firstSixProjects);
        } catch {
            console.log('ERR');
        }

        try {
            const blogData = await fetch(`https://plantd.life/blogs/wp-json/wp/v2/posts`);
            const blogRes = await blogData.json();
            const firstSixBlogs = blogRes.slice(0, 6);
            setBlogList(firstSixBlogs);
        } catch {
            console.log('ERR');
        }
    };
    React.useEffect(() => {
        if (window && window.innerWidth > 991) setShow(true);
        else setShow(false);
        setShowAboutUsDropdown(false);
        setShowProjectsDropdown(false);
    }, [pathName]);

    React.useEffect(() => {
        if (show && window && window.innerWidth < 991) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
    }, [show]);

    React.useEffect(() => {
        if (window && window.innerWidth > 991) setShow(true);
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
        return <li className={`nav-item color-white`}>{getLink(title, navigateTo, isNew, showArrow)}</li>;
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
        setShowProjectsDropdown(false);
        setShowAboutUsDropdown(false);
        setShowSolutionsDropdown(false);
        setShowBlogsDropdown(false);
        switch (path) {
            case 'projects':
                if (window && window.innerWidth < 991 && !showProjectsDropdown) {
                    setShowProjectsDropdown(true);
                    return;
                }
                redirect('/projects');
                break;
            case 'about':
                if (window && window.innerWidth < 991 && !showAboutUsDropdown) {
                    setShowAboutUsDropdown(true);
                    return;
                }
                redirect('/about');
                break;
            case 'solutions':
                if (window && window.innerWidth < 991 && !showSolutionsDropdown) {
                    setShowSolutionsDropdown(true);
                    return;
                }
                // redirect('/solutions');
                break;
            case 'blogs':
                if (window && window.innerWidth < 991 && !showBlogsDropdown) {
                    setShowBlogsDropdown(true);
                    return;
                }
                redirect('/blogs');
                break;
        }
    };

    const getBtn = (path: string, name: string) => {
        return (
            <li className="col-4 offset-lg-8 mt-4 col-f btn-blog d-flex justify-center">
                <Link className="btn primary-btn text-light" href={path}>
                    More {name}
                </Link>
            </li>
        );
    };

    return (
        <div className="container-fluid px-lg-5 px-2">
            <nav className={`navbar navbar-expand-lg fixed-top py-0 smooth ${isAtTop ? 'custom-nav' : 'bg-black'}`}>
                <div className="container-fluid px-lg-5 py-3 py-lg-0 px-2">
                    <Link className="navbar-brand col-3" href="/">
                        <img className="" src={light} alt='logo' width="100%" />
                    </Link>

                    <div className="d-flex align-items-center">
                        <ul className="mb-0 ps-lg-2 ps-0 d-block me-4 d-lg-none">
                            <li className="nav-item">
                                <Link className="btn primary-btn" href="/contribute">
                                    Start Planting
                                </Link>
                            </li>
                        </ul>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow((prev) => !prev)}>
                            {show ? <i className="fa fa-times"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
                        </button>
                    </div>
                    <div className={`show ${show ? 'addHeight' : ''} custom-collapsible navbar-collapse`} id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
                            <li className={`nav-item color-white`} onMouseEnter={() => setShowAboutUsDropdown(true)} onMouseLeave={() => setShowAboutUsDropdown(false)}>
                                <Link className={`nav-link ${showAboutUsDropdown ? 'arrow-dropdown' : ''}`} href="#" onClick={() => redirectTo('about')}>
                                    About Us
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showAboutUsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="aboutDropdown">
                                    {aboutUsData?.map((item: any, index: number) => {
                                        return (
                                            <Link href={`/about/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                                <div className="col-2 col-lg-5 dropdown-img">
                                                    <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                                </div>
                                                <div className="col-9 col-lg-7">
                                                    <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.name}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}

                                    <div className="col-lg-4 d-none d-lg-block"></div>
                                    <div className="col-lg-4 d-none d-lg-block"></div>
                                </ul>
                            </li>

                            <li className={`nav-item color-white`} onMouseEnter={() => setShowProjectsDropdown(true)} onMouseLeave={() => setShowProjectsDropdown(false)}>
                                <Link className={`nav-link ${showProjectsDropdown ? 'arrow-dropdown' : ''} ${isActive('/projects') ? 'active' : ''}`} href="#" onClick={() => redirectTo('projects')}>
                                    Projects
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showProjectsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="projectsDropdown">
                                    {projectList?.map((item: any, index: number) => {
                                        return (
                                            <Link href={`/projects/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                                <div className="col-2 col-lg-5 dropdown-img">
                                                    <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                                </div>
                                                <div className="col-9 col-lg-7">
                                                    <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.name}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    {projectList.length > 6 && getBtn('/projects', 'Projects')}
                                </ul>
                            </li>

                            <li className={`nav-item color-white`} onMouseEnter={() => setShowSolutionsDropdown(true)} onMouseLeave={() => setShowSolutionsDropdown(false)}>
                                <Link className={`nav-link ${showSolutionsDropdown ? 'arrow-dropdown' : ''} ${isActive('/solutions') ? 'active' : ''}`} href="#" onClick={() => redirectTo('solutions')}>
                                    Solutions
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showSolutionsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="solutionsDropdown">
                                    {solutionsData?.map((item: any, index: number) => {
                                        return (
                                            <Link href={`${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                                <div className="col-2 col-lg-5 dropdown-img">
                                                    <img src={item?.bannerImage} alt={item?.name} width="100%" />
                                                </div>
                                                <div className="col-9 col-lg-7">
                                                    <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.name}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    <li className="col-4"></li>
                                </ul>
                            </li>

                            <li className={`nav-item color-white`} onMouseEnter={() => setShowBlogsDropdown(true)} onMouseLeave={() => setShowBlogsDropdown(false)}>
                                <Link className={`nav-link ${showBlogsDropdown ? 'arrow-dropdown' : ''} ${isActive('/blogs') ? 'active' : ''}`} href="#" onClick={() => redirectTo('blogs')}>
                                    Blogs
                                    <i className="fa fa-angle-down" style={{ marginLeft: 5 }} aria-hidden="true" />
                                </Link>
                                <ul className={`p-lg-4 mt-2 mt-lg-0 dropdown-menu center-dropdown ${showBlogsDropdown ? 'show d-flex flex-wrap align-items-center' : ''}`} id="blogsDropdown">
                                    {blogList?.map((item: any, index: number) => {
                                        return (
                                            <Link href={`/blogs/${item?.slug}`} className="p-lg-3 p-2 col-12 col-lg-4 d-flex align-items-center justify-content-lg-between justify-content-evenly" key={index}>
                                                <div className="col-2 col-lg-5 dropdown-img">
                                                    <img src={item?.yoast_head_json?.og_image[0]?.url} alt={item?.title?.rendered} width="100%" />
                                                </div>
                                                <div className="col-9 col-lg-7">
                                                    <p className="text-white dropdown-item m-0 ms-0 fw-300">{item?.title?.rendered}</p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                    {getBtn('/blogs', 'Blogs')}
                                </ul>
                            </li>

                            {getItem('Contact Us', '/contact-us')}
                        </ul>

                        <ul className="mb-0 ps-lg-2 ps-0 d-none d-lg-block">
                            <li className="nav-item">
                                <Link className="btn primary-btn" href="/contribute">
                                    Start Planting
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
