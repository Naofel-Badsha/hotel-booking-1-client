import { Link } from "react-router-dom";

const RoomCards = ({ item }) => {
  const { _id, image, location, day_night, category, discount, room_price } =
    item;
  return (
    <div>
      <div className="border-2 border-[#008080] shadow-md rounded-xl">
        {/*---------Image---------*/}
        <div className="mx-4 mt-4 overflow-hidden rounded-xl">
          <div className="w-full h-96">
            <img src={image} className="w-full h-full object-cover" />
          </div>
        </div>
        {/*---------Text---------*/}
        <div className="px-6 py-3 text-start">
          <div className="flex items-center justify-between">
            <p className="md:text-xl lg:text-xl text-slate-800">
              {category} Room
            </p>
            <p className="font-bold text-base text-[#008080]">
              {discount}% Discaunt
            </p>
          </div>
          <h1 className="text-[20px] font-bold text-[#000]">{day_night}</h1>
          {/*------Location------and-----Price------*/}
          <div className="flex items-center justify-between">
            {/*---------Location---------*/}
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-location-dot text-xl text-[#008080]"></i>
              <p className="md:text-xl lg:text-xl text-slate-800">{location}</p>
            </div>
            {/*---------Price--------*/}
            <p className="font-bold text-base text-[#008080]">
              Price: $ {room_price}
            </p>
          </div>
        </div>

        <Link to={`/roomDetails/${_id}`}>
          <div className="mb-4 px-3">
            <button className="btn block w-full bg-[#008080] text-white text-xl border-0">
              Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default RoomCards;
