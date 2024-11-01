import { Link } from "react-router-dom";
import Counter from "../../../Components/Counter/Counter";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="container m-auto py-5">
      {/*----------Section-----Title---------*/}
      <SectionTitle heading={"Our About"}></SectionTitle>
      <div className="px-3">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-10 flex-col lg:flex-row">
          {/*------------Image-----------*/}
          <div className="flex-1 w-full h-[400px]">
            <img
              src="https://i.ibb.co.com/HYdk7P8/Home-22.jpg"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/*------------Text-----------*/}
          <div className="flex-1">
            <div>
              <h3 className="text-3xl font-bold mt-6">Crowny Hotel</h3>
              <p className="py-6 md:text-xl lg:text-xl text-slate-800 text-justify">
                Welcome to HotelBooking, a leading platform for finding and
                booking hotels worldwide. Whether you’re looking for
                budget-friendly stays, luxury resorts, or anything in between,
                we’ve got you covered. Our platform offers a seamless booking
                process, with a wide selection of accommodations, transparent
                pricing, and exclusive deals. Trusted by thousands of travelers,
                we pride ourselves on providing excellent customer service and
                24/7 support to make your travel planning effortless. With
                listings in over 100 countries, [HotelBooking] ensures that your
                next stay is comfortable, secure, and perfectly suited to your
                needs.
              </p>
              <div>
                <Link to="/aboutDetails">
                  <button className="btn bg-[#008080] border-0 text-white text-xl font-bold">
                    About More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Counter></Counter>
      </div>
    </div>
  );
};

export default About;
