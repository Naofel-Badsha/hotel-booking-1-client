
// import RoomCards from "./RoomCards";
// import useRoom from "../../Hooks/useRoom";

const Room = () => {
  // const [rooms] = useRoom;
  // console.log(rooms);
  return (
    <div className="container  m-auto">
      <h1 className="text-4xl text-center font-bold py-10">Hotel room</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* {
        item.map((item) => (
          <RoomCards key={item._id} item={item}></RoomCards>
        ))
        } */}
      </div>
    </div>
  );
};

export default Room;

