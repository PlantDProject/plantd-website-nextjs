'use client';

import { poppinsBold, poppinsMedium } from '@/utils/fonts';
import './business.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Invoices | Acme Dashboard',
};

const Business = () => {
    const [formData, setFormData] = useState<any>({
        name: '',
        email: '',
        phoneNumber: '+1',
        organisation: '',
        tellUsMore: '',
        source: '',
    });
    console.log('FORM DATA', formData);

    const handleChange = (e: any, name: string) => {
        let value = e;

        if (name === 'phoneNumber' && e.length > 10) return;

        if (name === 'source') {
            value = e?.currentKey;
        }

        setFormData((prev: any) => {
            return { ...prev, [name]: value };
        });
    };

    const CTA = () => {
        return (
            <div className="lets-talk d-flex my-4 justify-center">
                <Link className="btn primary-btn btn-rounded" href="#form">
                    Let's Talk
                </Link>
            </div>
        );
    };

    return (
        <>
            <section className="top-container">
                <video autoPlay muted loop className="video custom-video">
                    <source src="/videos/header-1.mov" type="video/mp4" />
                </video>
                <div className="header-text">
                    <h1 className={`business-title title-color ${poppinsBold.className}`}>
                        For Business that
                        <br />
                        want to do <span className="text-green">more</span>
                    </h1>
                    <span className="green-line" />
                    <p className={`header-subtext ${poppinsMedium.className}`}>Our B2B solutions enable businesses to offset their carbon footprint by planting trees worldwide while supporting diverse carbon offset projects. With our One-to-One model, a tree is planted for every product or service sold, empowering companies to take meaningful climate action.</p>
                </div>
            </section>

            <section>
                <div className="w-90 mx-auto p-4 p-lg-5 my-5 business-cards d-flex flex-column flex-lg-row align-center text-white flex-wrap">
                    <div className="col-12 col-lg-12 order-0">
                        <h3 className={`${poppinsBold.className} text-center text-lg-start`}>One-to-One</h3>
                    </div>
                    <div className="col-12 col-lg-5 order-3 order-lg-2">
                        <span className="d-none d-lg-block green-line cards ms-4" />
                        <p className={poppinsMedium.className}>
                            Plantd’s One-to-One model empowers businesses to make a positive environmental impact with every sale. For each product or service sold, a tree is planted in a region that needs it most, helping to combat deforestation, support local communities, and offset carbon emissions. This initiative allows companies to take a direct and meaningful role in the fight against
                            climate change while showing their commitment to sustainability. By planting trees worldwide, businesses can not only reduce their carbon footprint but also contribute to the long-term health of our planet and improve the livelihoods of people in the communities we support.
                        </p>

                        {CTA()}
                    </div>

                    <div className="col-12 col-lg-6 order-1 order-lg-3 ms-auto mx-auto">
                        <img src="/images/business/business-first-section.png" className="img-fluid" />
                    </div>

                    <img src="/images/translucent-logo.png" className="first-section-img" />
                </div>
            </section>

            <section>
                <div className="w-90 mx-auto p-4 p-lg-5 my-5 business-cards d-flex flex-column flex-lg-row align-center text-white flex-wrap">
                    <div className="col-6"></div>
                    <div className="col-12 col-lg-5 ms-auto text-center text-lg-start order-0">
                        <h3 className={poppinsBold.className}>Climate Action Credits</h3>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-0 me-auto">
                        <img src="/images/business/business-second-section.png" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-5 order-2 order-lg-2">
                        <span className="d-none d-lg-block green-line cards" />
                        <p className={`${poppinsMedium.className} m-0`}>
                            Plantd offers businesses the opportunity to make a real climate impact by purchasing verified carbon credits. These credits support a variety of impactful projects, ranging from renewable energy initiatives to conservation efforts. Supported projects span multiple categories, including household and community solutions, renewable energy advancements, and waste
                            management improvements, ensuring a diverse selection for businesses to choose from. Whether you're looking to align with industry-specific needs or execute a specific sustainability mission, our platform allows you to support the projects that resonate with your values. Take a proactive step toward reducing your carbon footprint while driving meaningful change and
                            demonstrating your commitment to a sustainable future.
                        </p>

                        {CTA()}

                        <img src="/images/translucent-logo.png" className="second-section-img" />
                    </div>
                </div>
            </section>

            <section>
                <div className="w-90 mx-auto p-5 my-5 business-cards d-flex align-center text-white">
                    <div className="wavy-section">
                        <img src="/images/business/have-something.png" className="wavy-bg" />
                        <div className="d-flex justify-center">
                            <h3 className={`my-5 ${poppinsBold.className}`}>
                                <img src="/images/business/have-something-border.png" className="wavy-bg-heading" />
                                Have
                                <br />
                                something else
                                <br /> in mind?
                            </h3>
                        </div>
                        <p className={`wavy-section-p w-90 mx-auto px-5 py-4 text-center text-white ${poppinsMedium.className}`}>
                            <img src="/images/business/rectangle.png" className="wavy-rectangle" />
                            If your business has a custom solution in mind, we're here to help bring it to life. Reach out for a free consultation, and together we can build a tailored partnership that aligns with your sustainability goals. Whether it’s a unique carbon offset strategy, targeted reforestation efforts, or specialized project support, we’ll work closely with you to create a solution
                            that maximizes your impact. Let’s collaborate to propel your climate action initiatives and drive meaningful change for a more sustainable future.
                        </p>

                        {CTA()}
                    </div>
                </div>
            </section>

            <section>
                <div className="w-90 mx-auto p-3 p-md-5 my-5 business-cards business-form d-flex align-center text-white">
                    <div className="form-container col-12 col-lg-8 mx-auto py-4 px-4 px-md-5">
                        <h3 className={`${poppinsBold.className} mb-4`} id="form">
                            Let's Talk
                        </h3>

                        <form>
                            <div className="row">
                                <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                                    <Input
                                        classNames={{
                                            inputWrapper: ['px-0'],
                                        }}
                                        type="text"
                                        label="Name"
                                        labelPlacement="outside"
                                        value={formData.name}
                                        onValueChange={(e) => handleChange(e, 'name')}
                                    />
                                </div>
                                <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                                    <Input
                                        classNames={{
                                            inputWrapper: ['px-0'],
                                        }}
                                        type="email"
                                        label="Email Address"
                                        value={formData.email}
                                        labelPlacement="outside"
                                        onValueChange={(e) => handleChange(e, 'email')}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className={`inputClass border-0 d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                                    <Input
                                        classNames={{
                                            inputWrapper: ['px-0'],
                                        }}
                                        type="text"
                                        label="Phone Number"
                                        value={formData.phoneNumber}
                                        labelPlacement="outside"
                                        onValueChange={(e) => handleChange(e, 'phoneNumber')}
                                    />
                                </div>
                                <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                                    <Input
                                        classNames={{
                                            inputWrapper: ['px-0'],
                                        }}
                                        type="text"
                                        label="Organisation"
                                        value={formData.organisation}
                                        labelPlacement="outside"
                                        onValueChange={(e) => handleChange(e, 'organisation')}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                                    <Textarea
                                        classNames={{
                                            input: 'textarea-custom',
                                            inputWrapper: ['px-0', 'py-0'],
                                        }}
                                        name="tellUsMore"
                                        label="Tell Us More"
                                        value={formData.tellUsMore}
                                        labelPlacement="outside"
                                        onValueChange={(e) => handleChange(e, 'tellUsMore')}
                                        className=""
                                        variant="underlined"
                                    />
                                </div>
                                <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                                    <Select
                                        classNames={{
                                            trigger: 'px-3 py-3 custom-select d-flex justify-between',
                                            listbox: 'select-dropdown',
                                        }}
                                        labelPlacement={'outside-left'}
                                        label="How did you hear about us?"
                                        onSelectionChange={(e) => handleChange(e, 'source')}
                                    >
                                        <SelectItem key="Friends/Family" value="Friends/Family">
                                            Friends/Family
                                        </SelectItem>
                                        <SelectItem key="Email Marketing" value="Email Marketing">
                                            Email Marketing
                                        </SelectItem>
                                        <SelectItem key="Social" value="Social">
                                            Social
                                        </SelectItem>
                                        <SelectItem key="Other" value="Other">
                                            Other
                                        </SelectItem>
                                    </Select>

                                    {formData.source === 'Other' && (
                                        <Input
                                            classNames={{
                                                inputWrapper: ['px-0'],
                                            }}
                                            type="text"
                                            label="Other"
                                            value={formData.organisation}
                                            labelPlacement="outside"
                                            onValueChange={(e) => handleChange(e, 'organisation')}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="lets-talk d-flex my-4 justify-center">
                                <div className="btn primary-btn btn-rounded" onClick={() => {}}>
                                    Submit
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Business;
