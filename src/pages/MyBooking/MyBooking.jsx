import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBooking from "../../Hooks/useBooking";
import Swal from "sweetalert2";

const MyBooking = () => {
  const [booking, refetch] = useBooking();
  const axiosSecure = useAxiosSecure();

  const handelBookingCancel = (_id) => {
    {
      console.log("deleted items----?", _id);
      Swal.fire({
        title: "Are you sure?",
        text: "Room is Cansel...!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/booking/${_id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Room Cansel successfylly",
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
    }
  };
  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"Booking Room"}></SectionTitle>
      <div className="px-3">
        {/*--------------Table-------------*/}
        <div className="overflow-x-auto w-full py-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-2xl font-bold bg-[#008080] text-white">
                <th>#</th>
                <th>Item Image</th>
                <th>Email</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/*---------row---------1---------*/}
              {booking.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-xl border-2 border-[#008080] h-20 w-20">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-xl text-black">{item.email}</td>
                  <td className="text-xl text-black">$: {item.room_price}</td>
                  <th>
                    <button
                      onClick={() => handelBookingCancel(item._id)}
                      className="btn text-xl text-white bg-[#ff004f] border-0 "
                    >
                      Cansel
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
