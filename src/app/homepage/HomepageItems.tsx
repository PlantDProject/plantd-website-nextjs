export const galleryImagesData = [
    { image: `next-images/homepage/gallery-image1.webp`, alt: 'gallery-image1' },
    { image: `next-images/homepage/gallery-image2.webp`, alt: 'gallery-image2' },
    { image: `next-images/homepage/gallery-image3.webp`, alt: 'gallery-image3' },
    { image: `next-images/homepage/gallery-image4.webp`, alt: 'gallery-image4' },
    { image: `next-images/homepage/gallery-image5.webp`, alt: 'gallery-image5' },
    { image: `next-images/homepage/gallery-image6.webp`, alt: 'gallery-image6' },
    { image: `next-images/homepage/gallery-image7.webp`, alt: 'gallery-image7' },
    { image: `next-images/homepage/gallery-image8.webp`, alt: 'gallery-image8' },
    { image: `next-images/homepage/gallery-image9.webp`, alt: 'gallery-image9' },
    { image: `next-images/homepage/gallery-image10.webp`, alt: 'gallery-image10' },
    { image: `next-images/homepage/gallery-image11.webp`, alt: 'gallery-image11' },
    { image: `next-images/homepage/gallery-image12.webp`, alt: 'gallery-image12' }
];
export const homeAboutData = [
    { image: `next-images/homepage/homeAbout1.webp`, alt:'homeAbout1 img',  name: 'Individuals', url: "/individual" },
    { image: `next-images/homepage/homeAbout2.webp`, alt:'homeAbout2 img', name: 'Businesses', url: "/business" },
    { image: `next-images/homepage/homeAbout3.webp`, alt:'homeAbout3 img',  name: 'Fundraising', url: "/fundraiser" },
];
export const homeTestimonialData = [
    {
        image: `next-images/homepage/Elissa.webp`, name: 'Elissa', description: `I joined Plantd because I wanted to
    make a positive impact on the environment while also having the chance to win
    exciting giveaways! By being a Plantd subscriber, I know I am helping create a
    more sustainable future through each and every tree that is planted monthly from
    my subscription! I highly recommend this app if you are looking for an easy and
    innovative way to be more environmentally conscious! Do your part!` },
    {
        image: `next-images/homepage/Joelle.webp`, name: 'Joelle', description: `Being a Plantd subscriber has been
    beyond rewarding knowing I’m contributing to a better future for the next
    generations to come. It doesn’t have to be difficult to do your part! With
    Plantd, I can see exactly how my contributions are making the world a better
    place and it’s such a great feeling.` },
    {
        image: `next-images/homepage/Alex.webp`, name: 'Alex', description: `I have been a Plantd subscriber for
    about 6 months now and that means 30 trees have been planted on my behalf! I am
    a big believer in saving the bees, trees and the seas so this subscription is a
    no brainer! On top of the moral benefits, Plantd offers giveaways! I won a brand
    new MacBook Pro!` },
    {
        image: `next-images/homepage/Elissa.webp`, name: 'Elissa', description: `I joined Plantd because I wanted to
    make a positive impact on the environment while also having the chance to win
    exciting giveaways! By being a Plantd subscriber, I know I am helping create a
    more sustainable future through each and every tree that is planted monthly from
    my subscription! I highly recommend this app if you are looking for an easy and
    innovative way to be more environmentally conscious! Do your part!` },
    {
        image: `next-images/homepage/Joelle.webp`, name: 'Joelle', description: `Being a Plantd subscriber has been
    beyond rewarding knowing I’m contributing to a better future for the next
    generations to come. It doesn’t have to be difficult to do your part! With
    Plantd, I can see exactly how my contributions are making the world a better
    place and it’s such a great feeling.` },
    {
        image: `next-images/homepage/Alex.webp`, name: 'Alex', description: `I have been a Plantd subscriber for
    about 6 months now and that means 30 trees have been planted on my behalf! I am
    a big believer in saving the bees, trees and the seas so this subscription is a
    no brainer! On top of the moral benefits, Plantd offers giveaways! I won a brand
    new MacBook Pro!` }
];

export interface ProjectsInterface {
    title: string;
    about: string;
    name: string;
    bannerImage: string;
    slug: string;
}
export interface aboutInterface {
    image: string;
    alt: string;
    name: string;
    url: string;
}
export interface galleryInterface {
    image: string;
    alt: string;
}
export interface testimonialInterface {
    image: string;
    name: string;
    description: string;
}

export const threeCardsBreakpoints = {
    1200: {
        slidesPerView: 3.4,
        spaceBetween: 20,
    },
    992: {
        slidesPerView: 2.4,
    },
    768: {
        slidesPerView: 1.4,
        pagination: {clickable: true}
    },
    220: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {clickable: true}
    },
};
export const oneCardBreakpoints = {
    1200: {
        slidesPerView: 1.5,
        spaceBetween: 20,
    },
    992: {
        slidesPerView: 1.5,
    },
    480: {
        slidesPerView: 1.3,
    },
    220: {
        slidesPerView: 1.3,
        spaceBetween: 10,
    },
};
export const staticBreakpoints = {
    992: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false
    },
    600: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        loop: true
    },
};
