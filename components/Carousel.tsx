// components/Carousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({ slides }: { slides: any[] }) => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            
            pagination={{
                dynamicBullets: true,
              }}
            className="swiper-container"
            modules={[Pagination]}
        >
            <div className="swiper-wrapper">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide relative">
                        <div className="layer1 bg-yellow-400 rounded-lg shadow-lg w-80 h-80 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                        <div className="swiper-card rounded-lg overflow-hidden shadow-lg w-80 h-80 bg-white  dark:bg-gray-700 transform -translate-x-1 -translate-y-1 z-1 flex flex-col items-center justify-center">
                            <img src={slide.image} alt={slide.description} className="w-20 h-auto object-cover mb-4" />
                            <p className="text-gray-800 dark:text-white text-lg text-center">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
        
    );
};

export default Carousel;
