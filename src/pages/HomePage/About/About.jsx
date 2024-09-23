import Counter from "../../../Components/Counter/Counter";

const About = () => {
  return (
    <div className="container m-auto mt-5">
      <h1 className="text-3xl font-bold text-[#008080] mt-5">About Us</h1>
      <div className="border-2">
        <div className="flex gap-10 ">
          {/*------------Image-----------*/}
          <div className="flex-1 w-full h-[400px]">
            <img
              src="https://i.ibb.co.com/d4p9BRw/images-1.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          {/*------------Text-----------*/}
          <div className="flex-1">
            <div>
              <h1 className="text-3xl font-bold text-[#008080] mt-5">
                About Us
              </h1>
              <h1 className="text-5xl font-bold mt-6">Crowny Hotel</h1>
              <p className="py-6">
                Welcome to [HotelBooking], a leading platform for finding and
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
                <button className="bg-[#008080] text-white text-xl font-bold py-2 px-5 rounded-md cursor-pointer">
                  Downlode{" "}
                  <i className="fa-solid fa-download ml-2 hover:text-pink-500"></i>{" "}
                </button>
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
