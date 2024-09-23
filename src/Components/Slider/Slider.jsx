import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Slider = () => {
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
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/SdQSWv0/home-1.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7"}}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------2--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/Bfr1M4b/home-2.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------3--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/HGvMNvD/home-3.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------4--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/Ms77Fk2/home-4.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------5--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/VgF2r1Q/home-5.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------6--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/55JBWMP/home-6.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------7--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/stn5D5s/home-7.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------8--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/VMGctM1/home-8.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
        {/*----------Slider----------9--------*/}
        <ul>
          <li className="relative">
            <SwiperSlide>
              <img
                src="https://i.ibb.co/QYgzCxD/home-9.jpg"
                style={{ width: "100%", height: "100vh", opacity: "0.7" }}
              />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <div>
                  <h3 className=" text-black text-3xl md:text-4xl lg:text-6xl font-bold py-2">
                    Enjoy Your Dream Vacation
                  </h3>
                  <p className=" text-black text-xl md:text-2xl lg:text-3xl font-normal py-2">
                    Booking Hotels, Flights and stay packges at lowest price!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </li>
        </ul>
      </Swiper>
    </div>
  );
};

export default Slider;
