"use client"
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground justify-start text-center underline mb-10">Latest Videos</h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                    },
                    585: {
                        slidesPerView: 2,
                    },

                    882: {
                        slidesPerView: 3,
                    },
                    1162: {
                        slidesPerView: 4,
                    },
                }}
                loop={true}
                centerInsufficientSlides={true}
                autoplay={{ delay: 1000 }}
                pagination={{ clickable: true }}
            >
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}
                {Slides()}

            </Swiper>
        </>
    );
};

const Slides = () => {
    return <>
        <SwiperSlide>
            <div className="w-full max-w-72 rounded-lg overflow-hidden shadow-lg mx-4 p-4 mb-10">
                <img
                    src="https://picsum.photos/800/370"
                    alt="Card Image"
                    width={500}
                    height={300}
                    className="w-full aspect-[5/3] object-cover rounded-lg"
                />
                <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold mb-2">Card Title</h3>
                    <p className="text-muted-foreground">
                        This is a description of the card content. It should be a bit longer than the title to demonstrate the layout.
                    </p>
                </div>
            </div>
        </SwiperSlide>
    </>
}