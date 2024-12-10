import { Metadata } from 'next';
import { defaultOGImage, fetchGraphQL } from '@/utils/helpers';
import { GET_ONGOING_EVENTS, GET_PAST_EVENTS } from '@/utils/GRAPHQL';
import Giveaways from './GiveawayList';

const description = 'Welcome to Plantd All Access! Here you can enter for a chance to win awesome Experiences. Check in daily to see what’s new.';

export const metadata: Metadata = {
    title: 'Giveaways',
    description,
    openGraph: { title: 'Giveaways', description, images: defaultOGImage },
};

export default async function Page() {
    const [dataOngoing, dataPast] = await Promise.all([fetchGraphQL(GET_ONGOING_EVENTS), fetchGraphQL(GET_PAST_EVENTS, { page: 1, size: 10 })]);
    return <Giveaways onGoingEvents={dataOngoing?.data?.getOngoingEventsForWebsite?.events} completedEvents={dataPast?.data?.getPastEventsForWebsite?.events} />;
}
