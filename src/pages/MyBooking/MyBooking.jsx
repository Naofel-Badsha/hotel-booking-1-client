import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
//import Swal from "sweetalert2";


const MyBooking = () => {
    const [mBooks, setM]=useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/booking')
        .then(res => res.json())
        .then(data => setM(data))
    },[])
    // const hendelDelete = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //       })
          
    //}
    return (
        <div>
            <h1 className="text-4xl text-center font-bold py-10">My Booking Room</h1>
            {
            mBooks.map(mBook => <BookingCard key={mBook._id} mBook={mBook}></BookingCard>)
            }
        </div>
    );
};

export default MyBooking;