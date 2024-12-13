import { defaultOGImage, fetchGraphQL } from '@/utils/helpers';
import { Metadata } from 'next';
import ThankyouPage from './Thankyou';
import { GET_ONGOING_EVENTS } from '@/utils/GRAPHQL';

const title = 'Thank You | Plantd';
const description = 'Fight climate change with Plantd';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default async function Page() {
    const dataOngoing = await fetchGraphQL(GET_ONGOING_EVENTS);

    return <ThankyouPage onGoingEvents={dataOngoing?.data?.getOngoingEventsForWebsite?.events} />;
}
