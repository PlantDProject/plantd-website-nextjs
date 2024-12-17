'use client';

// Import necessary components and styles
import '../about.css'; // Custom CSS file for FAQ styling
import { SocialsBar } from '@/components/Socials/SocialsSection';
import { SubSectionInterface, reduceYourCarbonFootprint, reduceYourCarbonFootprintBulletPoints } from '../_data/subsectionsData';
import { AboutUsSwiper } from '../_assets/SwiperComponent';
import { DescriptionSection, SectionContainer } from '../_assets/SectionContainer';

const ReduceYourCrabonFootprint = () => {
    return (
        <div className="heading-top bg-dark-grey text-white">
            <div className="container">
                <div className="mx-0 mx-lg-5">
                    <section>
                        {reduceYourCarbonFootprint.map((e: SubSectionInterface, index: number) => {
                            return <div key={index}>{SectionContainer(e, index)}</div>;
                        })}

                        <ul className="bullets">
                            {reduceYourCarbonFootprintBulletPoints.map((e: SubSectionInterface, index: number) => {
                                return (
                                    <div key={index} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
                                        <li className="fs-28">
                                            <h3 className="mb-4">{e.title}</h3>
                                        </li>

                                        <div className={`fs-20 mb-5`}>{DescriptionSection(e.description)}</div>
                                    </div>
                                );
                            })}
                        </ul>
                    </section>

                    <hr className="grey-hr" />

                    {AboutUsSwiper()}
                </div>
            </div>

            {SocialsBar()}
        </div>
    );
};

export default ReduceYourCrabonFootprint;
