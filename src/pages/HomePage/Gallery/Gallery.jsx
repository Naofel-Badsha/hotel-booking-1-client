// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Gallery.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Gallery = () => {
  return (
    <div className="container m-auto mt-10">
      <div>
        <h1 className="text-4xl font-bold py-10 text-center">
          Hotel Room Gallery
        </h1>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation
          autoplay={true}
          grabCursor={true}
          delay={"100"}
          loop={true}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/ysrYnkV/gal-1.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/P1V5rJR/gal-2.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/cNbtZBY/gal-3.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/QY3bV1v/gal-4.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/vZXFDTn/gal-5.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/r4TY1hQ/gal-6.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/mSzCvSD/gal-7.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/mbjL8yg/gal-8.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/mHn8XcL/gal-9.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/qkHdRX4/gal-10.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/MhHqtRr/gal-11.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/2P1D1yy/gal-12.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/302Shbp/gal-13.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/RjTW3VQ/gal-14.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/NTsSGgC/gal-15.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/Q6Nc1Nj/gal-16.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/fHXJLKF/gal-17.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/g62xZ3s/gal-18.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/5Bdtt6f/gal-19.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/gMTDTwD/gal-20.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/0yNbMTD/gal-21.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/xGzmTGP/gal-22.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/dD7FgtL/gal-23.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/S7CbmZ1/gal-24.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/WKJRDW4/gal-25.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/KjkGvCD/gal-26.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/6HJMFqJ/gal-27.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/NKTKNjD/gal-28.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/G3fwypZ/gal-29.png"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/RYVgJJm/gal-30.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/bzg1ZDL/gal-31.jpg"
              style={{ width: "100%", height: "40vh" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
