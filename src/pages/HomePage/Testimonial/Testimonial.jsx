// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

// import required modules
import { Autoplay } from 'swiper/modules';
import "swiper/css/autoplay";

const Testimonial = () => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-4xl text-center py-10">User Testimonials</h1>
      <Swiper
        modules={[ Autoplay]}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {/*-----------Slider-------1-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/Drs30hD/rev-1.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------2-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/JzLhcqK/rev-2.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
              </div>
            </div>
            <div className="">
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------3-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/59thnDP/rev-3.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------4-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/H4kmffH/rev-4.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
              </div>
            </div>
            <div className="">
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------5-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/mzfF0LQ/rev-5.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------6-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/jvygcGx/rev-6.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
              </div>
            </div>
            <div className="">
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------7-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/2PgMh5f/rev-7.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------8-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/Fq5gYgW/rev-8.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
              </div>
            </div>
            <div className="">
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------9-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/m9b5LZc/rev-9.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------10-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/XJJF0PV/rev-10.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
              </div>
            </div>
            <div className="">
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------11-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/zHXmjhB/rev-11.webp"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------12-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/LQ4GPdX/rev-12.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-solid fa-star text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
                <i className="fa-regular fa-star-half-stroke text-xl text-[#008080]"></i>
              </div>
            </div>
            <div className="">
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/*-----------Slider-------13-------*/}
        <SwiperSlide>
          <div className="border-2 relative flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <div className="h-[58px] w-[58px]">
                <img
                  src="https://i.ibb.co/jHsVKCL/rev-13.jpg"
                  className="border-[3px] border-sky-500 relative inline-block rounded-full object-cover object-center"
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
              <h5 className="block text-xl antialiased font-bold text-[#008080]">
                Tania Andrew
              </h5>
              <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun!
              </p>
            </div>
          </div>
        </SwiperSlide>
        </div>

      </Swiper>
    </div>
  );
};

export default Testimonial;
