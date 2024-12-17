export const uspData = [
    {id:1, image: `/next-images/individual/doo1.webp`, alt: 'objective1 img', name: '<p className="f-17 mb-0 text-white">Plant<br /> Trees</p>', title: "Plant trees to make a difference", firstPoint: "Did you know planting 30 trees helps take 12 cars off the road for 4 weeks?", secondPoint: "Track your trees in the Plantd app and see the positive impact you make.", redirectTo: "/sign-up" },
    {id:2, image: `/next-images/individual/doo2.webp`, alt: 'objective2 img', name: '<p className="f-17 mb-0 text-white">Offset Your<br /> Footprint</p>', title: "Offset your carbon footprint", firstPoint: "Bad News: The average person in the US has a carbon footprint equivalent to driving 30K miles in a diesel car.", secondPoint: "Good News: Taking action has never been easier. Let’s join forces to do something about it!", redirectTo: "/sign-up" },
    {id:3, image: `/next-images/individual/doo3.webp`, alt: 'objective3 img', name: '<p className="f-17 mb-0 text-white">Refer<br /> and Earn</p>', title: "Going green pays off... literally!", firstPoint: "Recruit your friends to increase your impact and your earnings.", secondPoint: "Grow your network, plant more trees and earn real cash for every referral.", redirectTo: "/sign-up" },
    {id:4, image: `/next-images/individual/doo4.webp`, alt: 'objective4 img', name: '<p className="f-17 mb-0 text-white">Win Epic<br /> Experiences</p>', title: "Explore the planet you are saving", firstPoint: "Enter exclusive giveaways to win unique experiences.", secondPoint: "Sleeping in a jungle tree house? Sailing the deep blue ocean? Yes, please!", redirectTo: "/giveaways" },
];

export const appPerkData = [
    { image: `/next-images/individual/appperk1.png`, alt: 'app-perk1 img', name: '<p className="f-17 mb-0 text-white">Fight climate <br />change</p>' },
    { image: `/next-images/individual/appperk2.png`, alt: 'app-perk2 img', name: '<p className="f-17 mb-0 text-white">Reduce your Carbon <br />Footprint</p>' },
    { image: `/next-images/individual/appperk3.png`, alt: 'app-perk3 img', name: '<p className="f-17 mb-0 text-white">Track your Progress<br /> within our app</p>' },
    { image: `/next-images/individual/appperk4.png`, alt: 'app-perk4 img', name: '<p className="f-17 mb-0 text-white">Refer friends/family and <br />Earn cash</p>' }
];
export const leftWorkData = [
    { image: `/next-images/individual/hw1.webp`, alt: 'app-work1 img', title: 'Ongoing Tree Planting', subtext: 'Have trees planted monthly through subscription.', id: 1 },
    { image: `/next-images/individual/hw2.webp`, alt: 'app-work2 img', title: 'Big Giveaways', subtext: 'Members can enter contests to win prizes and VIP experiences.', id: 2 },
    { image: `/next-images/individual/hw3.webp`, alt: 'app-work3 img', title: 'Referral Rewards', subtext: 'Earn rewards by referring friends to join.', id: 3 }
];
export const rightWorkData = [
    { image: `/next-images/individual/hw4.webp`, alt: 'app-work4 img', title: 'Carbon Offset', subtext: 'Option to offset carbon footprint by funding certified projects.', id: 4 },
    { image: `/next-images/individual/hw5.webp`, alt: 'app-work5 img', title: 'News & Education', subtext: 'Articles and videos provide climate change info.', id: 5 },
    { image: `/next-images/individual/hw6.webp`, alt: 'app-work6 img', title: 'Leaderboards', subtext: 'Compare subscriber stats on trees, referrals, and offsets.', id: 6 }
];
export const mobileWorkData = [
    { image: `/next-images/individual/hw1.webp`, alt: 'app-work1 img', title: 'Ongoing Tree Planting', subtext: 'Have trees planted monthly through subscription.', id: 1 },
    { image: `/next-images/individual/hw2.webp`, alt: 'app-work2 img', title: 'Big Giveaways', subtext: 'Members can enter contests to win prizes and VIP experiences.', id: 2 },
    { image: `/next-images/individual/hw3.webp`, alt: 'app-work3 img', title: 'Referral Rewards', subtext: 'Earn rewards by referring friends to join.', id: 3 },
    { image: `/next-images/individual/hw4.webp`, alt: 'app-work4 img', title: 'Carbon Offset', subtext: 'Option to offset carbon footprint by funding certified projects.', id: 4 },
    { image: `/next-images/individual/hw5.webp`, alt: 'app-work5 img', title: 'News & Education', subtext: 'Articles and videos provide climate change info.', id: 5 },
    { image: `/next-images/individual/hw6.webp`, alt: 'app-work6 img', title: 'Leaderboards', subtext: 'Compare subscriber stats on trees, referrals, and offsets.', id: 6 }
];


export interface uspInterface {
    id:number
    image: string;
    alt: string;
    name: string;
    title: string;
    firstPoint: string;
    secondPoint: string;
    redirectTo: string;
}
export interface appPerkInterface {
    image: string;
    alt: string;
    name: string;
}
export interface leftWorkInterface {
    image: string;
    alt: string;
    title: string;
    subtext: string;
    id: number;
}
export interface rightWorkInterface {
    image: string;
    alt: string;
    title: string;
    subtext: string;
    id: number;
}
export interface mobileWorkInterface {
    image: string;
    alt: string;
    title: string;
    subtext: string;
    id: number;
}

export const staticBreakpoints = {
    992: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false
    },
    420: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        loop: true
    },
    220: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        loop: true
    }
};
export const appPerkBreakpoint = {
    992: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        loop: false
    },
    500: {
        slidesPerView: 1.6,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
    },
    420: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
    },
    220: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
    }
};
export const workBreakpoint = {
    992: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        loop: false
    },
    500: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
    },
    220: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
    }
};