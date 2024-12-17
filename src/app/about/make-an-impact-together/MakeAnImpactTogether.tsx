'use client';

// Import necessary components and styles
import '../about.css'; // Custom CSS file for FAQ styling
import { SocialsBar } from '@/components/Socials/SocialsSection';
import { SubSectionInterface, makeAnImpact } from '../_data/subsectionsData';
import { AboutUsSwiper } from '../_assets/SwiperComponent';
import { SectionContainer } from '../_assets/SectionContainer';

const MakeAnImpactTogether = () => {

    return (
        <div className="heading-top bg-dark-grey text-white">
            <div className="container">
                <div className="mx-0 mx-lg-5">
                    <section>
                        {makeAnImpact.map((e: SubSectionInterface, index: number) => {
                            return <div key={index}>{SectionContainer(e, index)}</div>;
                        })}
                    </section>

                    <hr className="grey-hr" />

                    {AboutUsSwiper()}
                </div>
            </div>

            {SocialsBar()}
        </div>
    );
};

export default MakeAnImpactTogether;
