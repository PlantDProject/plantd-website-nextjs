interface SneakPeakItems {
    image: string;
    text: string;
}

export const takeSneakPeakItems: SneakPeakItems[] = [
    {
        image: `/next-images/about/sneakPeak1.webp`,
        text: `Ongoing Tree Planting`,
    },
    {
        image: `/next-images/about/sneakPeak2.webp`,
        text: `Big Giveaways`,
    },
    {
        image: `/next-images/about/sneakPeak3.webp`,
        text: `Referral Rewards`,
    },
    {
        image: `/next-images/about/sneakPeak4.webp`,
        text: `Carbon Offset`,
    },
];

export const settings = {
    draggable: false,
    dots: false, // Disables dot navigation
    infinite: false, // Enables infinite scrolling
    speed: 500, // Set transition speed
    slidesToShow: 4, // Number of slides to show at once
    centerMode: false, // Center the active slide
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Disables navigation arrows
    responsive: [
        {
            breakpoint: 991, // Adjust settings for screens smaller than 767px (mobile)
            settings: {
                draggable: true,
                slidesToShow: 2, // Show only 1 slide at a time
                slidesToScroll: 1, // Scroll 1 slide at a time
                infinite: true, // Keep infinite scrolling
                dots: true, // Show navigation dots
            },
        },
        {
            breakpoint: 767, // Adjust settings for screens smaller than 767px (mobile)
            settings: {
                draggable: true,
                slidesToShow: 1, // Show only 1 slide at a time
                slidesToScroll: 1, // Scroll 1 slide at a time
                infinite: true, // Keep infinite scrolling
                dots: true, // Show navigation dots
            },
        },
    ],
};

export interface DataFormat {
    title: string;
    description: string;
    asset: string;
    redirect?: string;
    source?: string;
}

export const aboutUsData: DataFormat = {
    title: `More About Us`,
    description: `The world around us is changing. Climate change continues to be a global threat now more than ever especially during these times of uncertainty. The need for everyone to make an impact together paved the way for an idea that allows everyone to Go Green by Planting Trees while creating an everlasting impact.`,
    asset: '/next-videos/moreAboutUs.mp4',
    source: 'about',
};

export const aboutUsSections: DataFormat[] = [
    {
        title: `Making An Impact Together`,
        description: `Our mission is to empower individuals to take action against
        climate change. We
        want to enable people to effortlessly contribute to the reforestation efforts
        around the world. By doing so, we hope to achieve our goal of planting One
        Billion Trees worldwide thus creating a path towards a greener future.`,
        asset: '/next-images/about/impact.webp',
        redirect: '/',
    },
    {
        title: `Our Green Initiative App`,
        description: `We envision a greener future for our planet where a thriving
        community of
        different individual actions lead to an equally thriving ecosystem. Plantd is a
        Freemium-based mobile application that allows you to have trees planted on your
        behalf. It’s as easy as signing up for free and having ONE TREE PLANTED right
        away. Once signed up, you will have access to information about numerous
        projects and events around the world concerned with the Environment and
        Climate Change action. You will also see all of the giveaways you can join and try
        to win.<br />
        At Plantd, we believe that the bigger the impact you make, the bigger you should
        be rewarded. As a Plantd Subscriber, FIVE TREES will be planted on your behalf
        every month. Not only that, you will have TEN ENTRIES into our giveaways. That
        means MORE CHANCES TO WIN FOR YOU and MORE CHANCES TO WIN FOR THE
        PLANET because of MORE TREES PLANTED.
    `,
        asset: '/next-images/about/about-gif.gif',
        redirect: '/',
        source: 'initiative',
    },
    {
        title: `Reduce Your Carbon Footprint`,
        description: `By downloading the app, you will be able to track how big of an impact you are
        making. You will get to see how many trees you have planted, calculate your
        carbon emissions, and purchase carbon offsets from the many renewable
        projects Plantd is in full support of.`,
        asset: '/next-images/about/footprint.webp',
        redirect: '/',
    },
    {
        title: `Our Green Initiative App`,
        description: `Every year, we lose 15 Billion Trees as a result of climate change and
        deforestation. We recognize that a global crisis can seem overwhelming but
        PLANTD is here to help you #DoYourPart. We are just a seedling that is growing
        with you as we work together to make an impact! Join the Movement, Spread the
        Word, and help us make our way to #OneBillionTrees.`,
        asset: '/next-images/about/seed.webp',
        redirect: '/',
    },
];
