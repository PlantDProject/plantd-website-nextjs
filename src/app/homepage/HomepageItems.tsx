export const galleryImagesData = [
    { image: `/next-images/homepage/gallery-image1.webp`, alt: 'gallery-image1' },
    { image: `/next-images/homepage/gallery-image2.webp`, alt: 'gallery-image2' },
    { image: `/next-images/homepage/gallery-image3.webp`, alt: 'gallery-image3' },
    { image: `/next-images/homepage/gallery-image4.webp`, alt: 'gallery-image4' },
    { image: `/next-images/homepage/gallery-image5.webp`, alt: 'gallery-image5' },
    { image: `/next-images/homepage/gallery-image6.webp`, alt: 'gallery-image6' },
    { image: `/next-images/homepage/gallery-image7.webp`, alt: 'gallery-image7' },
    { image: `/next-images/homepage/gallery-image8.webp`, alt: 'gallery-image8' },
    { image: `/next-images/homepage/gallery-image9.webp`, alt: 'gallery-image9' },
    { image: `/next-images/homepage/gallery-image10.webp`, alt: 'gallery-image10' },
    { image: `/next-images/homepage/gallery-image11.webp`, alt: 'gallery-image11' },
    { image: `/next-images/homepage/gallery-image12.webp`, alt: 'gallery-image12' }
];
export const homeAboutData = [
    { image: `/next-images/homepage/homeAbout1.webp`, alt:'homeAbout1 img',  name: 'Individuals', url: "/individual" },
    { image: `/next-images/homepage/homeAbout2.webp`, alt:'homeAbout2 img', name: 'Businesses', url: "/business" },
    { image: `/next-images/homepage/homeAbout3.webp`, alt:'homeAbout3 img',  name: 'Fundraising', url: "/fundraiser" },
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
