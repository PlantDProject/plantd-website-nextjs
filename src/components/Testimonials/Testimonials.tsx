import { threeCardsBreakpoints } from '@/app/homepage/HomepageItems';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./testimonials.css"

export interface testimonialInterface {
    image: string;
    name: string;
    description: string;
}

export const homeTestimonialData = [
    {
        image: `next-images/homepage/Elissa.webp`,
        name: 'Elissa',
        description: `I joined Plantd because I wanted to
    make a positive impact on the environment while also having the chance to win
    exciting giveaways! By being a Plantd subscriber, I know I am helping create a
    more sustainable future through each and every tree that is planted monthly from
    my subscription! I highly recommend this app if you are looking for an easy and
    innovative way to be more environmentally conscious! Do your part!`,
    },
    {
        image: `next-images/homepage/Joelle.webp`,
        name: 'Joelle',
        description: `Being a Plantd subscriber has been
    beyond rewarding knowing I’m contributing to a better future for the next
    generations to come. It doesn’t have to be difficult to do your part! With
    Plantd, I can see exactly how my contributions are making the world a better
    place and it’s such a great feeling.`,
    },
    {
        image: `next-images/homepage/Alex.webp`,
        name: 'Alex',
        description: `I have been a Plantd subscriber for
    about 6 months now and that means 30 trees have been planted on my behalf! I am
    a big believer in saving the bees, trees and the seas so this subscription is a
    no brainer! On top of the moral benefits, Plantd offers giveaways! I won a brand
    new MacBook Pro!`,
    },
    {
        image: `next-images/homepage/Elissa.webp`,
        name: 'Elissa',
        description: `I joined Plantd because I wanted to
    make a positive impact on the environment while also having the chance to win
    exciting giveaways! By being a Plantd subscriber, I know I am helping create a
    more sustainable future through each and every tree that is planted monthly from
    my subscription! I highly recommend this app if you are looking for an easy and
    innovative way to be more environmentally conscious! Do your part!`,
    },
    {
        image: `next-images/homepage/Joelle.webp`,
        name: 'Joelle',
        description: `Being a Plantd subscriber has been
    beyond rewarding knowing I’m contributing to a better future for the next
    generations to come. It doesn’t have to be difficult to do your part! With
    Plantd, I can see exactly how my contributions are making the world a better
    place and it’s such a great feeling.`,
    },
    {
        image: `next-images/homepage/Alex.webp`,
        name: 'Alex',
        description: `I have been a Plantd subscriber for
    about 6 months now and that means 30 trees have been planted on my behalf! I am
    a big believer in saving the bees, trees and the seas so this subscription is a
    no brainer! On top of the moral benefits, Plantd offers giveaways! I won a brand
    new MacBook Pro!`,
    },
];

export const Testimonials = () => {
    return (
        <div className="col-12 mt-4" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <Swiper
                spaceBetween={20} // Space between slides
                slidesPerView={3.5} // How many slides to show at once
                centeredSlides={true}
                loop={true}
                breakpoints={threeCardsBreakpoints}
            >
                {homeTestimonialData?.map((items: testimonialInterface, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="ms-2 testimonial-div">
                                <div className="testimonial-box">
                                    <p className="text-white fs-14 testimonial-desc">{items?.description}</p>
                                    <p className="text-green fs-20 fw-700">{items?.name}</p>
                                </div>
                                <img className="testimonial-image" src={items?.image} alt={items?.image} />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
