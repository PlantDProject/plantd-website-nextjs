import { trackMixpanelEvent } from './mixpanel';
import { trackPosthogEvent } from './posthog';

const regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const regexEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
const regexName = /^[a-zA-Z.]+(?: [a-zA-Z.]+)*$/;

// Validators (implement these according to your needs)
export const isNameValid = (name: string) => {
    return name && name.trim().length > 0 && regexName.test(name.trim());
};
export const isEmailValid = (email: string) => regexEmail.test(email);

export const isPhoneNumberValid = (e: string) => {
    return regexPhoneNumber.test(e);
};

export const defaultOGImage = 'https://plantd.life/images/plantdimg/plantdRecOg.jpg';

export const isEven = (n: number) => {
    return n % 2 == 0;
};

export const getDay = (date: string) => {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[new Date(`${date}`).getDay()];
};
export const getDate = (date: string) => {
    const edate = date.split(',');
    return edate[0].split(' ');
};

interface IFrameRendererProps {
    iframeHtml: string;
}

export const IFrameRenderer: React.FC<IFrameRendererProps> = ({ iframeHtml }) => {
    return <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />;
};

export const getImgUri = (uri: string) => {
    if (uri?.includes('https')) return uri;

    return `${process.env.API_URL}${uri}`;
};

export const light = 'https://test.plantd.life/images/plantdimg/logo-white.png';
export const dark = 'https://test.plantd.life/images/plantdimg/logo-dark.png';

export const trackEvent = (e: any, data: any = {}) => {
    trackMixpanelEvent(e, data);
    trackPosthogEvent(e, data);
};

export const galleryImagesData = [
    { image: `next-images/home/gallery-image1.webp`, alt: 'gallery-image1' },
    { image: `next-images/home/gallery-image2.webp`, alt: 'gallery-image2' },
    { image: `next-images/home/gallery-image3.webp`, alt: 'gallery-image3' },
    { image: `next-images/home/gallery-image4.webp`, alt: 'gallery-image4' },
    { image: `next-images/home/gallery-image5.webp`, alt: 'gallery-image5' },
    { image: `next-images/home/gallery-image6.webp`, alt: 'gallery-image6' },
    { image: `next-images/home/gallery-image7.webp`, alt: 'gallery-image7' },
    { image: `next-images/home/gallery-image8.webp`, alt: 'gallery-image8' },
    { image: `next-images/home/gallery-image9.webp`, alt: 'gallery-image9' },
    { image: `next-images/home/gallery-image10.webp`, alt: 'gallery-image10' },
    { image: `next-images/home/gallery-image11.webp`, alt: 'gallery-image11' },
    { image: `next-images/home/gallery-image12.webp`, alt: 'gallery-image12' }
];
export const homeAboutData = [
    { image: `next-images/home/homeAbout1.webp`, name: 'Individual', url: "" },
    { image: `next-images/home/homeAbout2.webp`, name: 'Businesses', url: "/business" },
    { image: `next-images/home/homeAbout3.webp`, name: 'Fundraising', url: "/fundraiser" },
];
export const homeTestimonialData = [
    { image: `next-images/home/Elissa.webp`, name: 'Elissa', description: `I joined Plantd because I wanted to
    make a positive impact on the environment while also having the chance to win
    exciting giveaways! By being a Plantd subscriber, I know I am helping create a
    more sustainable future through each and every tree that is planted monthly from
    my subscription! I highly recommend this app if you are looking for an easy and
    innovative way to be more environmentally conscious! Do your part!` },
    { image: `next-images/home/Joelle.webp`, name: 'Joelle', description: `Being a Plantd subscriber has been
    beyond rewarding knowing I’m contributing to a better future for the next
    generations to come. It doesn’t have to be difficult to do your part! With
    Plantd, I can see exactly how my contributions are making the world a better
    place and it’s such a great feeling.` },
    { image: `next-images/home/Alex.webp`, name: 'Alex', description: `I have been a Plantd subscriber for
    about 6 months now and that means 30 trees have been planted on my behalf! I am
    a big believer in saving the bees, trees and the seas so this subscription is a
    no brainer! On top of the moral benefits, Plantd offers giveaways! I won a brand
    new MacBook Pro!` },
    { image: `next-images/home/Elissa.webp`, name: 'Elissa', description: `I joined Plantd because I wanted to
    make a positive impact on the environment while also having the chance to win
    exciting giveaways! By being a Plantd subscriber, I know I am helping create a
    more sustainable future through each and every tree that is planted monthly from
    my subscription! I highly recommend this app if you are looking for an easy and
    innovative way to be more environmentally conscious! Do your part!` },
    { image: `next-images/home/Joelle.webp`, name: 'Joelle', description: `Being a Plantd subscriber has been
    beyond rewarding knowing I’m contributing to a better future for the next
    generations to come. It doesn’t have to be difficult to do your part! With
    Plantd, I can see exactly how my contributions are making the world a better
    place and it’s such a great feeling.` },
    { image: `next-images/home/Alex.webp`, name: 'Alex', description: `I have been a Plantd subscriber for
    about 6 months now and that means 30 trees have been planted on my behalf! I am
    a big believer in saving the bees, trees and the seas so this subscription is a
    no brainer! On top of the moral benefits, Plantd offers giveaways! I won a brand
    new MacBook Pro!` }
];
