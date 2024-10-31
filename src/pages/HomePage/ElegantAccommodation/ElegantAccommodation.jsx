import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ElegantAccommodation = () => {
  return (
    <div>
      <SectionTitle heading={"Elegant Accommodation"}></SectionTitle>
      <p className="text-xl text-slate-700 py-3">
        The total to 200 guestrooms and suits have been immaculately decorated
        with complete attention to the comfort of our guests.
      </p>

      <div>
        {/*----------Image--------*/}
        <div>
          <img
            src="https://i.ibb.co.com/XJnn3cD/648c6fbc2b4da9c936d70d0468d6d880.jpg"
            className="w-full h-[400px] object-cover"
          />
        </div>
        {/*----------Text--------*/}
        <div>
          <div className="flex- justify-between">
            <h2>Our</h2>
            <h2>Views All</h2>
          </div>
          <h3>Facilities</h3>
          <hr></hr>
          <div>
            <p>Dinning</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantAccommodation;
