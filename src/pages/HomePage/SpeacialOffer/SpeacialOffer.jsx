// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SpeacialOffer.css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import useRoom from "../../../Hooks/useRoom";
import RoomCards from "./../../Room/RoomCards";


const SpeacialOffer = () => {
  const [rooms] = useRoom();
  const populer = rooms.filter((item) => item.offerd === "populer");
  console.log(populer)

  return (
    <div className="container m-auto">
      <h1 className="font-bold text-4xl text-center py-10">
        Special Offers and Promotions
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        autoplay={true}
        // grabCursor={true}
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
          {
          populer.map(item => <SwiperSlide>
          <RoomCards key={item._id} item={item}></RoomCards>
          </SwiperSlide>)
          }
        </div>
      </Swiper>
    </div>
  );
};

export default SpeacialOffer;
