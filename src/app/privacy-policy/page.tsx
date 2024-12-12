import { IFrameRenderer, defaultOGImage, fetchGraphQL } from '@/utils/helpers';
import { Metadata } from 'next';
import { GET_TNC_AND_POLICY } from '@/utils/GRAPHQL';
import './privacy-policy.css';

const description = '';

export const metadata: Metadata = {
    title: 'Privacy Policy | Plantd',
    description,
    openGraph: { title: 'Privacy Policy | Plantd', description, images: defaultOGImage },
};

export default async function Page() {
    const policyData = await fetchGraphQL(GET_TNC_AND_POLICY);
    const policyValue = policyData?.data?.getAllConfigurations[0]

    return (
        <div className='bg-dark-grey'>
            {/* Main container for the terms section */}
            <section className="policy-bg-home">
                <div className="header-text">
                    <h1 className="policy-title title-color">
                        Plantd Privacy Policy
                    </h1>
                </div>
            </section>

            {/* Privacy Policy Section */}
            <section className="py-5 policy-section">
                <div className="container mx-auto text-white">
                    <IFrameRenderer iframeHtml={policyValue?.htmlValue} />
                </div>
            </section>
        </div>
    );
}
