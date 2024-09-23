// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SpeacialOffer.css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const SpeacialOffer = () => {
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
        {/*-----------Slider-------1-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/5Bdtt6f/gal-19.png" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  20% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------2-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/0yNbMTD/gal-21.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Single Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  30% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------3-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/xGzmTGP/gal-22.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  50% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------4-------*/}
        <SwiperSlide>
          <div className="border-2 border-rose-500 relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/dD7FgtL/gal-23.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Single Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  40% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/*-----------Slider-------5-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/S7CbmZ1/gal-24.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  20% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------6-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/WKJRDW4/gal-25.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Single Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  30% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------7-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/KjkGvCD/gal-26.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  50% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------8-------*/}
        <SwiperSlide>
          <div className="border-2 border-rose-500 relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/vZXFDTn/gal-5.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Single Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  40% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------9-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/6HJMFqJ/gal-27.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  20% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------10-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/NKTKNjD/gal-28.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Single Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  30% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------11-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/G3fwypZ/gal-29.png" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  50% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------12-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/RYVgJJm/gal-30.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Single Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  40% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------13-------*/}
        <SwiperSlide>
          <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
              <div className="object-cover w-full h-full">
                <img src="https://i.ibb.co/bzg1ZDL/gal-31.jpg" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-bold text-base text-[#ff6347]">
                  Family Room
                </p>
                <p className="block font-bold text-base text-[#ff6347]">
                  20% Discaunt
                </p>
              </div>
              <h1 className="text-[20px] font-bold text-[#008080]">
                Day per Night
              </h1>
              <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </p>
            </div>
            <div className="mb-6 px-3">
              <button className="block w-full rounded-md bg-[#008080] py-2 text-center text-white align-middle font-bold text-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpeacialOffer;
