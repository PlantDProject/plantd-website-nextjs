import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderInterface, aboutUsSlider, sliderBreakpoints } from '../_data/subsectionsData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AboutUsSwiper = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '"></span>';
        },
    };

    const path = usePathname();

    console.log('PATH > ', path);

    const sliderItems = aboutUsSlider.filter((e : SliderInterface) => e.redirection !== path)

    return (
        <div className="col-12 mt-4 gallery-slider slider-div" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
            <Swiper
                slidesPerView={3} // How many slides to show at once
                spaceBetween={20}
                parallax={true}
                loop={false}
                draggable={false}
                speed={1000}
                modules={[Pagination]}
                pagination={pagination}
                breakpoints={sliderBreakpoints}
            >
                {sliderItems?.map((items: SliderInterface, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <Link href={items.redirection} key={index}>
                                <img className="gallery-images" src={items?.image} alt={items?.alt} width="90%" />
                                <p className="text-white mb-5 fw-bold fs-20 text-center mt-3">{items.alt}</p>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
