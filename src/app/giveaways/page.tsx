import { Metadata } from 'next';
import './giveaway.css';
import Link from 'next/link';
import { GET_ALL_EVENTS } from '@/utils/GRAPHQL';
import { defaultOGImage, getDate, getDay, isEven } from '@/utils/helpers';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

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

export default async function Giveaways() {
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

    const eventCards = (event: any, index: number, isOnGoing: boolean = false) => {
        return (
            <div key={index} className="row justify-content-center align-items-center text-center w-95 m-auto mb-4 image-bg" style={{ backgroundImage: isEven(index) ? `url('https://test.plantd.life/images/plantdimg/projectbg.jpg')` : `url('https://test.plantd.life/images/plantdimg/giveawaybg.jpg')` }}>
                <div className="col-12 py-3 position-relative">
                    <div className="position-absolute eventdate-div">
                        <p className="f-15 text-white mb-0">{getDay(event?.eventDate)}</p>
                        <h3 className="text-white m-0 fw-bold">
                            {getDate(event?.eventDate)[0]}
                            <br />
                            {getDate(event?.eventDate)[1].toUpperCase()}
                        </h3>
                    </div>
                    <h3 className="title-heading text-white text-center fw-bold">{event?.eventName}</h3>
                    <img src={event?.imageUrl} className="my-2 ty-img mx-auto" alt="Chhath Mahaparv img" />
                    <div>
                        <Link href={`giveaways/${event?.eventSlug}`} className="btn btn-sm btn-soft-primary btn-rounded py-2 px-5">
                            View Details
                        </Link>
                    </div>

                    {isOnGoing && (
                        <>
                            <Popover placement="top">
                                <PopoverTrigger>
                                    <div className="position-absolute eventshare-div">
                                        <i className="fa fa-files-o text-green" aria-hidden="true"></i>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="px-1 bg-light px-2 br-20">
                                        <div className="text-small fs-10 text-green">link copied</div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <section className="bg-home " id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1 className="title title-color mb-5 text-center fs-40">Plantd Giveaway List</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 bg-black giveawayHead">
                <div className="container-fluid w-90">
                    <h3 className="title-sub-heading title-color text-center fw-600">
                        Welcome to Plantd All Access! Here you can enter for a chance to win awesome Experiences. Check in daily to see what’s new.
                        <br /> <span className="text-green">Don’t Miss Out!</span>
                    </h3>
                </div>
            </section>

            <section className="pt-5 bg-black">
                <div className="container-fluid bg-dark-grey w-90 p-lg-5 p-md-4 px-1 py-4">{onGoingEvents.length > 0 && onGoingEvents?.map((event: any, index: number) => eventCards(event, index, true))}</div>
            </section>

            <section className="pt-5 bg-black">
                <div className="container-fluid bg-dark-grey w-90 p-lg-5 p-md-4 px-1 py-4">{completedEvents.length > 0 && completedEvents?.map((event: any, index: number) => eventCards(event, index))}</div>
            </section>
        </>
    );
}
