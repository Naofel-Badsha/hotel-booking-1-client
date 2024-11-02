// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"Client Review"}></SectionTitle>
      <div className="px-3">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
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
          <div>
            {/*-----------Slider-------1-------*/}
            {testimonials.map((item) => (
              <div key={item.id}>
                <SwiperSlide>
                  <div className="border-2 border-[#008080] rounded-xl p-4 w-full h-full">
                    <div className="flex items-center justify-between gap-4">
                      <div className="h-[80px] w-[80px]">
                        <img
                          src={item.image}
                          className="border-[2px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                        />
                      </div>
                      <div className="flex items-center">
                        <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
                        <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
                        <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
                        <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
                        <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
                      </div>
                    </div>
                    <div className="">
                      <h5 className="text-xl py-2 md:text-2xl lg:text-2xl font-bold text-black">
                        {item.name}
                      </h5>
                      <p className="text-slate-800 md:text-xl lg:text-xl mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
