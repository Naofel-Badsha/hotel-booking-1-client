import { FaArrowUp } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ElegantAccommodation = () => {
  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"Elegant Accommodation"}></SectionTitle>
      <p className="text-xl text-slate-700 py-3 text-center mb-6">
        The total to 200 guestrooms and suits have been immaculately decorated
        with complete attention to the comfort of our guests.
      </p>

      <div className="px-3">
        <div className="flex items-center gap-6 flex-col lg:flex-row">
          {/*----------Image--------*/}
          <div className="flex-1 w-full">
            <img
              src="https://i.ibb.co.com/XJnn3cD/648c6fbc2b4da9c936d70d0468d6d880.jpg"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          {/*----------Text--------*/}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-black font-bold">Our Facilities</h2>
              <h2 className="text-xl text-black font-bold">Views All</h2>
            </div>
            {/* <h3 className="text-xl text-[#008080] ">Facilities</h3> */}
            <hr className="bg-slate-400 py-[1px]"></hr>
            {/*-------Facilities------1-------*/}
            <div className="flex items-center justify-between  py-4">
              <p className="text-xl">Dinning</p>
              <FaArrowUp className="rotate-45 text-2xl hover:text-black duration-100 text-[#008080] cursor-pointer" />
            </div>
            <hr className="bg-slate-400 py-[1px]"></hr>
            {/*-------Facilities------2-------*/}
            <div className="flex items-center justify-between  py-4">
              <p className="text-xl">Banquet</p>
              <FaArrowUp className="rotate-45 text-2xl hover:text-black duration-100 text-[#008080] cursor-pointer" />
            </div>
            <hr className="bg-slate-400 py-[1px]"></hr>
            {/*-------Facilities------3-------*/}
            <div className="flex items-center justify-between  py-4">
              <p className="text-xl">Swimming Pool</p>
              <FaArrowUp className="rotate-45 text-2xl hover:text-black duration-100 text-[#008080] cursor-pointer" />
            </div>
            <hr className="bg-slate-400 py-[1px]"></hr>
            {/*-------Facilities------4-------*/}
            <div className="flex items-center justify-between  py-4">
              <p className="text-xl">Lusury Suite</p>
              <FaArrowUp className="rotate-45 text-2xl hover:text-black duration-100 text-[#008080] cursor-pointer" />
            </div>
            <hr className="bg-slate-400 py-[1px]"></hr>
            {/*-------Facilities------5-------*/}
            <div className="flex items-center justify-between  py-4">
              <p className="text-xl">Events</p>
              <FaArrowUp className="rotate-45 text-2xl hover:text-black duration-100 text-[#008080] cursor-pointer" />
            </div>
            <hr className="bg-slate-400 py-[1px]"></hr>
            {/*-------Facilities------6-------*/}
            <div className="flex items-center justify-between  py-4">
              <p className="text-xl">Night Music</p>
              <FaArrowUp className="rotate-45 text-2xl hover:text-black duration-100 text-[#008080] cursor-pointer" />
            </div>
            <hr className="bg-slate-400 py-[1px]"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantAccommodation;
