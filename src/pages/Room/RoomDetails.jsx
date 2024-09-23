import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const roomDetails = useLoaderData();
  const {img, avel_room, count, room_description, room_price, room_size, avale, s_offer,} = roomDetails;
  
  
   const hendelBooking = () => {
    const bookingggg = {img, avel_room, count, room_description, room_price, room_size, avale, s_offer}
    console.log(bookingggg)
    fetch('http://localhost:5000/booking', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingggg),
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
          Swal.fire(
            'Room Booking Success!',
            'You clicked the button!',
            'success'
          )
        }
      })
   };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            className="w-[400px]"
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
          <div className="card-actions justify-end">
            <button onClick={hendelBooking} className="btn btn-primary">Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
