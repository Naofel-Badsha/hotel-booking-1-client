const BookingCard = ({mBook, handelDelete}) => {
    const {_id, img, avel_room, count, room_description, room_price, room_size, avale, s_offer} = mBook
  return (
    <div className="container m-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-red-500 mt-5">
        <figure>
          <img
            src={img}
            className="w-[700px] h-[400px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{avel_room}</h2>
          <p>{room_description}</p>
          <p>{count}</p>
          <p>{room_price}</p>
          <p>{room_size}</p>
          <p>{avale}</p>
          <p>{s_offer}</p>
          <div className="flex items-center justify-around ml-10 ">
           <div onClick={() => handelDelete(_id)}><i className="fa-solid fa-trash-can-arrow-up text-2xl border-2 border-[#008080] w-[40px] h-[40px] flex justify-center items-center rounded-full p-5 cursor-pointer"></i></div>
           <div onClick={() => handelDelete(_id)}><i className="fa-regular fa-pen-to-square text-2xl border-2 border-[#008080] w-[40px] h-[40px] flex justify-center items-center rounded-full p-5 cursor-pointer"></i></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingCard;
