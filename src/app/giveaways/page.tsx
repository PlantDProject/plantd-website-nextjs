import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import { GET_ALL_EVENTS } from '@/utils/GRAPHQL';
import Giveaways from './GiveawayList';

const description = 'Welcome to Plantd All Access! Here you can enter for a chance to win awesome Experiences. Check in daily to see what’s new.';

export const metadata: Metadata = {
    title: 'Giveaways',
    description,
    openGraph: { title: 'Giveaways', description, images: defaultOGImage },
};

const variables = {
    status: 'COMPLETED',
    searchText: '',
    page: 1,
    size: 1000,
};

export default async function Page() {
    const response = await fetch(`${process.env.API_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_ALL_EVENTS,
            variables,
        }),
    });

    const data = await response.json();
    const events = data?.data?.getEventsForWebsite?.events;
    const onGoingEvents = events?.filter((event: any) => event?.eventStatus === 'Ongoing' && event?.status === 'true');
    const completedEvents = events?.filter((event: any) => event?.eventStatus === 'Completed' && event?.status === 'true');
    console.log('ongoing', onGoingEvents);
    console.log('completedEvents', completedEvents);

    return <Giveaways onGoingEvents={onGoingEvents} completedEvents={completedEvents} />;
}
