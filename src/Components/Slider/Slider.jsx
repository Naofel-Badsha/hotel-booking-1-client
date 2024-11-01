import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

const Slider = () => {
  const [homeSliders, setHomeSliders] = useState([]);
  useEffect(() => {
    fetch("homeImage.json")
      .then((res) => res.json())
      .then((data) => setHomeSliders(data));
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        grabCursor={true}
        delay={"100"}
        loop={true}
        pagination={{ clickable: true }}
      >
        {/*----------Slider----------1--------*/}
        <div>
          {homeSliders.map((item) => (
            <ul key={item.id}>
              <li className="relative">
                <SwiperSlide>
                  <img
                    src={item.image}
                    style={{               
                      width: "100%",
                      height: "91vh",
                      marginTop: "100px",
                      opacity: "0.7",
                      objectFit: "cover",}}
                  />
                  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                    <div>
                      <h3 className="text-white text-5xl md:text-4xl lg:text-8xl font-bold py-5">
                        Enjoy Your Dream Vacation
                      </h3>
                      <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold py-5">
                        Booking Hotels, Flights and stay packges at lowest
                        price!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
