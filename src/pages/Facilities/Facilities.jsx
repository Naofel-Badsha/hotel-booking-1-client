import { BiSolidDrink } from "react-icons/bi";
import { FaDumbbell, FaWifi } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { MdMapsHomeWork, MdOutlineBedroomParent } from "react-icons/md";
import { PiSecurityCameraFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Facilities = () => {
  return (
    <div>
      {/*-----------Facilities-------Banner--------*/}
      <ul>
        <li className="relative">
          <img
            src="https://i.ibb.co.com/J770Rjd/Facilities-Banner-1.jpg"
            style={{
              width: "100%",
              height: "91vh",
              marginTop: "100px",
              opacity: "0.7",
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-5xl md:text-4xl lg:text-8xl font-bold py-5">
                Our Facilities
              </h3>
              <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold py-5">
                Enjoy Your Life
              </p>
            </div>
          </div>
        </li>
      </ul>

      {/*-----------Facilities-------Details--------*/}
      <div className="container m-auto py-5">
        <div className="px-3">
          {/*------------Heading---------*/}
          <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black text-center mt-20 py-5">
            We Offer You The Best Features
          </h2>

          {/*-----------Facilities-------Details-----1-------*/}
          <div className="flex gap-16 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <FaWifi className="text-[#008080]" /> High Speed Wi-Fi ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    Our Network solutions are custom engineered for unique needs
                    of hotel, resorts, casinos, and other commercial venues,
                    ensuring stable, secure, high speed internet cunnection at
                    all times.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Wired and wireless internet service ensure that all users
                    are guaranteed an online experionce and keeps them coming
                    back to the hotel.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/VjLZ7kH/wifi-clone.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*-----------Facilities-------Details-----2-------*/}
          <div className="flex gap-16 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/xSRWTDF/7.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <MdOutlineBedroomParent className="text-[#008080]" />{" "}
                  Luxurious Bedding ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    The breathoble fabrics of luxury beadding in our hotel helps
                    to regulate temperature, keeping you cool and comfortable
                    while you sleep.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Additionally, hyprallergenic materials reduce the risk of
                    allergies and skin irritation, contributing to a healthier
                    sleep environment.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*-----------Facilities-------Details-----3-------*/}
          <div className="flex gap-16 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <FaDumbbell className="text-[#008080]" />
                  Gym & Fitness ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    A well equipped gym is one of the best amenities you can
                    provide for your hotel guesis. Offering a well equipped
                    hotel gym is a great way to provide added value for your
                    guests.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Many traveiers want to stay active and fit on the read, so
                    gym can be a crucial option while choosing the hotel.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/3pC0S05/Gym.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*-----------Facilities-------Details-----4-------*/}
          <div className="flex gap-16 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/hfHm8rf/swimming-1.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <FaPersonSwimming className="text-[#008080]" />
                  Swimming Pool ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    Going on holiday should be a time of relaxation, indulgence
                    and comfort -so it is no wander we take pride on having
                    pools.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    It can be a great way to unwind after a busy day of
                    sightseeing or work and provide an excelellent opportunity
                    to soak up the sun and enjoy you vacation.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*-----------Facilities-------Details-----5-------*/}
          <div className="flex gap-16 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <MdMapsHomeWork className="text-[#008080]" />
                  Private Balcony ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    A terrace is essentially a private oasis for you and your
                    guests. If you have a busy day, a terrace is a perfect place
                    to kick back and relax with a glass of wine in the evening.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Our hostel's terrace suite is decked out with a set of
                    couches, making it the perfect place to relax.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/pn9rdzP/balcony.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*-----------Facilities-------Details-----6-------*/}
          <div className="flex gap-16 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/XzSbVgc/deesert-2.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <IoFastFood className="text-[#008080]" />
                  In-Room Dining ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    Our Hotel Offers you the facillity of in-room dinning where
                    you can choose food from the in-house menu and get it
                    delivered in the comfort of your room.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Where a guest orders this kinds of room services, a member
                    of the staff delever the food to their room and serve the
                    guest before leaving.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*-----------Facilities-------Details-----7-------*/}
          <div className="flex gap-16 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <BiSolidDrink className="text-[#008080]" />
                  Free Drinks ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    To ensure that our guests have a good time, we provide
                    complimentary beverages and drinks.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Hotel mixologists and beverages experts craft intricate
                    mocktails in taste and persentation, whics elevates the
                    overall dining experience.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/BVnNybB/Drinks.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*-----------Facilities-------Details-----8-------*/}
          <div className="flex gap-16 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/XpYKHr7/outdoor-security-2.webp"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-bold text-black py-5">
                  <PiSecurityCameraFill className="text-[#008080]" />
                  High Security ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    Guests expect their possessions to be secure during their
                    stay at the hotel. Our hotel security services cover beyond
                    certifying the safety of individuals.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    This sense of protection fasters beliefs and improves the
                    overall guest experience.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
