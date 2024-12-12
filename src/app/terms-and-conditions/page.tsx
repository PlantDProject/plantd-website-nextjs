import { IFrameRenderer, defaultOGImage, fetchGraphQL } from '@/utils/helpers';
import { Metadata } from 'next';
import { GET_TNC_AND_POLICY } from '@/utils/GRAPHQL';
import './terms-and-conditions.css'; 

const description = 'Plantd is a mobile application and is owned and operated by Clean Energy Ventures Inc. These terms and conditions are revised as of October 1, 2023.';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Plantd',
    description,
    openGraph: { title: 'Terms & Conditions | Plantd', description, images: defaultOGImage },
};

export default async function Page() {
    const tncData = await fetchGraphQL(GET_TNC_AND_POLICY);
    const tncValue = tncData?.data?.getAllConfigurations[1]
    return (
        <div className='bg-dark-grey'>
            {/* Main container for the terms section */}
            <section className="tnc-bg-home">
                <div className="header-text">
                    <h1 className="tnc-title title-color">
                        Plantd Terms and Conditions
                    </h1>
                </div>
            </section>

            {/* TERMS Section */}
            <section className="py-5 tnc-section">
                <div className="container mx-auto text-white">
                    <IFrameRenderer iframeHtml={tncValue?.htmlValue} />
                </div>
            </section>

        </div>
    );
}
