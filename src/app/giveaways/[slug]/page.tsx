import { Metadata } from 'next';
import GiveawayDetails from './GiveawayDetails';
import { GET_EVENT_BY_ID, GET_EVENT_WINNERS } from '@/utils/GRAPHQL';
import { defaultOGImage, fetchGraphQL } from '@/utils/helpers';

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = await params;

    const response = await fetchGraphQL(GET_EVENT_BY_ID, { eventSlug: slug });
    const e = response?.data?.getEventByIdForWebsite;

    const ogData = { title: `Plantd | ${e?.eventTitle}`, description: e?.eventTitle, images: e?.imageUrl || defaultOGImage };

    return {
        title: `Plantd | ${e?.eventTitle}`,
        description: e?.eventTitle,
        openGraph: ogData,
        twitter: {
            card: e?.imageUrl || defaultOGImage,
            ...ogData,
        },
    };
}

export default async function Page({ params }: any) {
    const { slug } = await params;

    const responseEventData = await fetchGraphQL(GET_EVENT_BY_ID, { eventSlug: slug });

    const responseWinners = await fetchGraphQL(GET_EVENT_WINNERS, { eventId: responseEventData?.data?.getEventByIdForWebsite?.eventId, searchText: '' });

    return <GiveawayDetails eventData={responseEventData?.data?.getEventByIdForWebsite} winnersList={responseWinners?.data?.websiteGetWinners} />;
}
