import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Welcome = () => {
  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"7* WelCome"}></SectionTitle>
      <div className="flex gap-6 flex-col-reverse lg:flex-row">
        {/*---------Text---------*/}
        <div className="flex-1">
          <div>
            <h4 className="text-xl font-bold text-black">WelCome to</h4>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black py-4">
              7* Star Hotel Paradise
            </h2>
            <div className="py-5">
              <p className="text-xl text-slate-700 text-justify">
                It is a 5 star deluxe property where the open ocean meets the
                lagoon and the warm sunset yellow of memorable evenings by the
                beach lulls you to sleep in a heaven tress.
              </p>
              <p className="text-xl text-slate-700 text-justify mt-4">
                Discover the beautiful nature, the culture ond traditions of
                Seven Star Hotel. Treat your family to a garcious eveironment,
                where personalised service is the standard. For your next
                importane event,choose from our wide range of venue options.
              </p>
            </div>
            <button className="btn bg-[#008080] text-white text-xl border-0">Learn More</button>
          </div>
        </div>
        {/*---------Image---------*/}
        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/9TPPnky/istockphoto-641448082-612x612.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
