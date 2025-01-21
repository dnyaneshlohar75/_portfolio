import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Slider({images}: {images: string[]}) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      scrollbar={{ draggable: true }}
      className="flex items-center justify-center w-full"
    >
      {images?.map((image) => (
        <SwiperSlide className="w-32 h-32">
          <img src={image} alt="image" className="object-cover w-full h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
