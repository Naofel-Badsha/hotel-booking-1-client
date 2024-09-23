import question from "../../../assets/Images/fqu/faq.png";
const Questuin = () => {
  return (
    <div className="container m-auto">
        <h1 className="text-4xl text-center font-bold py-10">Client Question</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex-1">
          <img src={question} className="border-2 p-5 rounded-md w-full h-[400px]  object-center" />
        </div>
        <div className="join join-vertical w-full flex-1">
          {/*-------Question--------1-------*/}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            How to book our hotel room...?
            </div>
            <div className="collapse-content">
              <p className="text-bold">Decide whether you want to book your hotel room through an online booking website, the hotels official website, by phone, in person, or through a travel agency</p>
            </div>
          </div>
          {/*-------Question--------2-------*/}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
             How is our hotel security?
            </div>
            <div className="collapse-content">
              <p className="text-bold">Read online reviews and ratings from previous guests to get an idea of their experiences regarding safety and security. Travel review websites and apps like TripAdvisor or Yelp can provide valuable insight</p>
            </div>
          </div>
          {/*-------Question--------3-------*/}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            Climb reviews of our hotels...? 
            </div>
            <div className="collapse-content">
              <p className="text-bold">Mention how close the hotel is to popular climbing destinations, crags, or climbing gyms. Provide information on whether its within walking distance or a short drive.
              Evaluate whether the hotel offers secure storage for climbing gear, such as a dedicated area for storing ropes, harnesses, and shoes.
              </p>
            </div>
          </div>
          {/*-------Question--------4-------*/}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What extra facilities do we provide to hotel clients...?
            </div>
            <div className="collapse-content">
              <p className="text-bold">Wi-Fi , Room Service, Fitness Center, Swimming Pool, Spa and Wellness Facilities, Airport Transfers, Accessibility Features, </p>
              <p className="text-bold">Business Center, Concierge Service, Shuttle Service, On-Site Dining, Parking, Entertainment, Bicycle Rentals</p>
              <p className="text-bold">Event and Meeting Spaces, Childcare Services, Pet-Friendly Amenities, Laundry and Dry Cleaning, Gift Shops and Boutiques, Cultural or Recreational Activities</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questuin;
