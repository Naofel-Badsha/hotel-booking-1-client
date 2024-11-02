import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Events = () => {
  return (
    <div className="container m-auto py-5">
      {/*----------Section-----Title---------*/}
      <SectionTitle heading={"Our Events"}></SectionTitle>
      <div className="px-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*--------Event-----1------*/}
          <div className="border-2 card shadow-xl">
            <img
              src="https://i.ibb.co.com/h1TT0Gh/drinks.jpg"
              className="w-full h-[350px] object-cover rounded-t-xl"
            />
            <div className="mb-6 px-6">
              <h4 className="text-black text-xl py-3 font-bold">
                Cocktails & Bits
              </h4>
              <Link to="/eventsDetails">
                <button className="btn bg-[#008080] border-0 text-white text-lg">
                  Lern More
                </button>
              </Link>
            </div>
          </div>
          {/*--------Event-----2------*/}
          <div className="border-2 card shadow-xl">
            <img
              src="https://i.ibb.co.com/ccZCYZy/Night-Music.jpg"
              className="w-full h-[350px] object-cover rounded-t-xl"
            />
            <div className="mb-6 px-6">
              <h4 className="text-black text-xl py-3 font-bold">Music Night</h4>
              <Link to="/eventsDetails">
                <button className="btn bg-[#008080] border-0 text-white text-lg">
                  Lern More
                </button>
              </Link>
            </div>
          </div>
          {/*--------Event-----3------*/}
          <div className="border-2 card shadow-xl">
            <img
              src="https://i.ibb.co.com/P9Vf8yV/desserts.jpg"
              className="w-full h-[350px] object-cover rounded-t-xl"
            />
            <div className="mb-6 px-6">
              <h4 className="text-black text-xl py-3 font-bold">
                Weekend Brunch
              </h4>
              <Link to="/eventsDetails">
                <button className="btn bg-[#008080] border-0 text-white text-lg">
                  Lern More
                </button>
              </Link>
            </div>
          </div>
          {/*--------Event-----4------*/}
          <div className="border-2 card shadow-xl">
            <img
              src="https://i.ibb.co.com/8K3XPNh/Conference-Seminar.jpg"
              className="w-full h-[350px] object-cover rounded-t-xl"
            />
            <div className="mb-6 px-6">
              <h4 className="text-black text-xl py-3 font-bold">
                Conference & Seminar
              </h4>
              <Link to="/eventsDetails">
                <button className="btn bg-[#008080] border-0 text-white text-lg">
                  Lern More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
