import { Link } from "react-router-dom";

const RoomCards = ({ item }) => {
  const { _id, image, avel_room, count } = item;
  return (
    <div>
      <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <div className="w-full h-full">
            <img src={image}
            className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-bold text-base text-[#ff6347]">
              Single Room
            </p>
            <p className="block font-bold text-base text-[#ff6347]">
              40% Discaunt
            </p>
          </div>
          <h1 className="text-[20px] font-bold text-[#008080]">
            Day per Night
          </h1>
          <p className="block font-sans text-sm  font-normal leading-normal text-gray-700 ">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </p>
        </div>

        <Link to={`/roomDetails/${_id}`}>
          <div className="mb-6 px-3">
            <button className="btn block w-full bg-[#008080] text-white text-xl border-0">Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoomCards;

{
  /*  */
}
