import { Metadata } from 'next';
import GiveawayDetails from './GiveawayDetails';
import { GET_EVENT_BY_ID, GET_EVENT_WINNERS } from '@/utils/GRAPHQL';
import { defaultOGImage } from '@/utils/helpers';

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = await params;

    const response = await fetch(`${process.env.API_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_EVENT_BY_ID,
            variables: { eventSlug: slug },
        }),
    });

    const data = await response.json();
    const e = data?.data?.getEventByIdForWebsite;

    return {
        title: `Plantd | ${e?.eventTitle}`,
        description: e?.eventTitle,
        openGraph: {
            title: `Plantd | ${e?.eventTitle}`,
            description: e?.eventTitle,
            images: e?.eventThumbnail || defaultOGImage,
        },
        twitter: {
            card: e?.eventThumbnail || defaultOGImage,
            title: `Plantd | ${e?.eventTitle}`,
            description: e?.eventTitle,
            images: e?.eventThumbnail || defaultOGImage,
        },
    };
}

export default async function Page({ params }: any) {
    const { slug } = await params;

    const responseEventData = await fetch(`${process.env.API_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_EVENT_BY_ID,
            variables: { eventSlug: slug },
        }),
    });

    const eventData = await responseEventData.json();

    const responseWinners = await fetch(`${process.env.API_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_EVENT_WINNERS,
            variables: { eventId: eventData?.data?.getEventByIdForWebsite?.eventId, searchText: '' },
        }),
    });

    const winnersList = await responseWinners.json();

    return <GiveawayDetails eventData={eventData?.data?.getEventByIdForWebsite} winnersList={winnersList?.data?.websiteGetWinners} />;
}
