'use client';

// Import necessary components and styles
import '../about.css'; // Custom CSS file for FAQ styling
import { SocialsBar } from '@/components/Socials/SocialsSection';
import { GreenInitiativeCardInterface, SubSectionInterface, greenInitiative, greenInitiativeCards } from '../_data/subsectionsData';
import { AboutUsSwiper } from '../_assets/SwiperComponent';
import { SectionContainer } from '../_assets/SectionContainer';
import CustomModal, { DataObj } from '@/components/Navigation/Modal/modal';
import { useState } from 'react';
import Image from 'next/image';

const defaultModalData = { title: '', description: '' };

const infoCards = (setData: any) => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {greenInitiativeCards.map((e: GreenInitiativeCardInterface, index: number) => {
                    return (
                        <div key={index} className="col-lg-4 col-md-6 mb-4 aos-init aos-animate greenInitiativeCard" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
                            <div className="bg-dark-grey py-4 br-12 d-flex flex-column h-100 justify-content-start text-center">
                                <Image width={75} height={75} src={e.image} className="d-flex mx-auto" alt={e.title} />
                                <h5 className="f-18 text-white mt-3 mx-2 mb-4">{e.title}</h5>
                                <p onClick={() => setData(e)} className="f-17 mt-auto mb-0 readMoreBtn">
                                    Read More
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const GreenInitiative = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<DataObj>(defaultModalData);

    const setData = (e: GreenInitiativeCardInterface) => {
        setModalData({ title: e.title, description: e.modalDescription });
        setShowModal(true);
    };

    const onClose = () => {
        setModalData(defaultModalData);
        setShowModal(false);
    };
    return (
        <div className="heading-top bg-dark-grey text-white">
            <div className="container">
                <div className="mx-0 mx-lg-5">
                    <section>
                        {greenInitiative.map((e: SubSectionInterface, index: number) => {
                            return <div key={index}>{SectionContainer(e, index)}</div>;
                        })}
                    </section>
                </div>
            </div>

            <div className="container-fluid bg-dark py-5">{infoCards(setData)}</div>

            <div className="container">
                <div className="mx-0 mx-lg-5">
                    <hr className="grey-hr" />

                    {AboutUsSwiper()}
                </div>
            </div>

            {SocialsBar()}

            {/* Modal to show after form submission */}
            <CustomModal isOpen={showModal} modalType="infoModal" onClose={onClose} data={modalData} />
        </div>
    );
};

export default GreenInitiative;
