import { Link } from "react-router-dom";


const RoomCards = ({ room }) => {
  const {_id, img, avel_room, count } = room;
  return (
    <div>
  <Link to={`/roomDetails/${_id}`}>
  <div className="border-2 border-[#008080] relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <div className="w-full h-full">
            <img src={img} className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block text-base font-bold leading-relaxed text-blue-gray-900">
              Avelabel {avel_room}
            </p>
            <p className="block text-base font-bold leading-relaxed text-blue-gray-900">
              Review: {count}
            </p>
          </div>
          <div className="rating">
            <input
              type="radio"
              value={4}
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
  </Link>
    </div>
  );
};

export default RoomCards;
