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
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallers, setGallerys] = useState([])
  useEffect(() => {
    fetch('/roomGallery.json')
    .then(res => res.json())
    .then(data => setGallerys(data))
  },[] )

  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"Room Gallery"}></SectionTitle>
      <div className="px-3">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          autoplay={true}
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
          {
            gallers.map(item => <SwiperSlide>
              <img key={item.id}
                src={item.image}
                style={{ width: "100%", height: "40vh" }}
              />
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
