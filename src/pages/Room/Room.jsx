import { useLoaderData } from "react-router-dom";
import RoomCards from "./RoomCards";

const Room = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className="container  m-auto">
      <h1 className="text-4xl text-center font-bold py-10">Hotel room</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
        rooms.map((room) => (
          <RoomCards key={room.id} room={room}></RoomCards>
        ))
        }
      </div>
    </div>
  );
};

export default Room;

