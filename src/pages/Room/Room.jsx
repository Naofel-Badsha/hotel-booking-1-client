import { useState } from "react";
import useRoom from "../../Hooks/useRoom";
import RoomCards from "./RoomCards";

const Room = () => {
  const [rooms, refetch] = useRoom();
  const [items, setItems] = useState(rooms);

  const filterItem = (categorItem) => {
    const updateItems = rooms.filter((carElem) => {
      return carElem.category === categorItem;
    });
    setItems(updateItems);
    refetch();
  };
  return (
    <div className="">
      {/*-----------Rooms-------Banner--------*/}
      <ul>
        <li className="relative">
          <img
            src="https://i.ibb.co.com/TLHKmz3/Rooms-Banner.jpg"
            style={{
              width: "100%",
              height: "91vh",
              opacity: "0.7",
              marginTop: "100px",
              objectFit: "cover",
            }}
          />
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-5xl md:text-4xl lg:text-8xl font-bold py-5">
                Our Rooms
              </h3>
              <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold py-5">
                very Beautiful Rooms
              </p>
            </div>
          </div>
        </li>
      </ul>

      {/*------------------------*/}
      <div className="container m-auto py-5">
        <div className="px-3">
          {/*------------Button--------------*/}
          <div className="flex flex-wrap gap-6 py-10">
            <button
              className="px-5 py-1 text-black hover:text-white bg-[#008080] hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"
              onClick={() => setItems(rooms)}
            >
              All
            </button>
            <button
              className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"
              onClick={() => filterItem("Single")}
            >
              Single
            </button>
            <button
              className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"
              onClick={() => filterItem("Dubble")}
            >
              Dubble
            </button>
            <button
              className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"
              onClick={() => filterItem("Family")}
            >
              Family
            </button>
            <button
              className="px-5 py-1 text-black hover:text-white bg-slate-100 hover:bg-slate-700 cursor-pointer focus:bg-[#008080] focus:text-white text-2xl"
              onClick={() => filterItem("Rest")}
            >
              Rest House
            </button>
          </div>
          {/*------------Card--------------*/}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <RoomCards key={item.id} item={item}></RoomCards>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
