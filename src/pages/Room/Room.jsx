import { useState } from "react";
import useRoom from "../../Hooks/useRoom";
import RoomCards from "./RoomCards";

const Room = () => {
  const [rooms] = useRoom();
  const [items, setItems] = useState(rooms);

  const filterItem = (categorItem) => {
    const updateItems = rooms.filter((carElem) => {
      return carElem.category === categorItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="container m-auto">
      <h1 className="text-5xl text-center py-10">Hotel Room</h1>
      {/*------------Button--------------*/}
      <div className="flex flex-wrap gap-6 py-10">
        <button className="px-5 py-1 text-black hover:text-white bg-[#008080] hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"onClick={() => setItems(rooms)}>All</button>
        <button className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"onClick={() => filterItem("Single")}>Single</button>
        <button className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"onClick={() => filterItem("Dubble")}>Dubble</button>
        <button className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"onClick={() => filterItem("Family")}>Family</button>
        <button className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"onClick={() => filterItem("Rest")}>Rest House</button>
      </div>
      {/*------------Card--------------*/}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <RoomCards key={item.id} item={item}></RoomCards>
        ))}
      </div>
    </div>
  );
};

export default Room;
