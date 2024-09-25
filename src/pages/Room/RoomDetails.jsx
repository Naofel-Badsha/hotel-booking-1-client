import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";

const RoomDetails = () => {
  const roomDetails = useLoaderData();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    image,
    location,
    count,
    room_price,
    room_size,
    s_offer,
    room_type,
    avel_room,
    discount,
    room_status,
    day_night,
    category,
    bed_room,
    bathroom,
    review,
    rating,
    room_description,
  } = roomDetails;

  const hendelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const startDate = form.startDate.value;
    const EndDate = form.EndDate.value;

    const bookings = {
      bookId: _id,
      room_price,
      image,
      name,
      phone,
      email,
      startDate,
      EndDate,
    };
    console.log(bookings)

    axiosSecure.post("/booking", bookings)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} added to your Cart`,
          showConfirmButton: false,
          timer: 1500
        });
        //-----refetch cart to update the cart items count-----
        navigate('/booking')
        // refetch();
      }
    })
  };

  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"Room Details"}></SectionTitle>
      <div className="px-3">
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*-----------Image-------------*/}
          <div className="w-full h-[500px] flex-1">
            <img
              src={image}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/*-----------Details-------------*/}
          <div className="flex-1">
            <h2 className="text-[16px] md:text-2xl lg:text-2xl font-bold">
              Location:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {location}
              </small>
            </h2>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Our Room:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {count} Th
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Price:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                $ {room_price}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Room Size:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {room_size}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Services:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {s_offer}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Room Type:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {room_type}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Available Room:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {avel_room} Th
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Discount:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {discount} %
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Room Status:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {room_status}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Booking:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {day_night}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Category:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {category}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Bed Room:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {bed_room} Th
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Bath Room:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {bathroom} Th
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Customer Review:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium">
                {review}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Reting:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium ">
                {rating}
              </small>
            </p>
            <p className="text-[16px] md:text-2xl lg:text-2xl font-bold py-1">
              Room Description:{" "}
              <small className="text-[16px] md:text-xl lg:text-xl font-medium ">
                {room_description}
              </small>
            </p>

            <div className="card-actions justify-end">
              {/* <button onClick={hendelBooking} className="btn btn-primary">
                Booking
              </button> */}
            </div>
          </div>
        </div>

        {/*----------Reting--And--Booking---------Form-------*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/*----------Reting------Form----------*/}
          <div className="flex-1">
            {/*----------Text--------*/}
            <h1 className="text-xl md:text-2xl lg:text-3xl text-black">
              Reating Here
            </h1>
            {/*----------Form--------*/}
            <div className="card bg-white w-full shadow-2xl mt-4 border-2 border-[#008080]">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Text Reating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Review Text"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>

          {/*----------Booking------Form----------*/}
          <div className="flex-1">
            {/*----------Text--------*/}
            <h1 className="text-xl md:text-2xl lg:text-3xl text-black">
              Booking Here
            </h1>
            {/*----------Form--------*/}
            <div className="card bg-white w-full shadow-2xl mt-4 border-2 border-[#008080]">
              <form onSubmit={hendelBooking} className="card-body">
                {/*--------Colum------1------*/}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {/*-------------Input------1-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-xl font-bold">
                        Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Full Name"
                      className="input input-bordered bg-slate-100 text-black"
                      required
                    />
                  </div>
                  {/*-------------Input------2-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-xl font-bold">
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter Your Phone Number"
                      className="input input-bordered bg-slate-100 text-black"
                      required
                    />
                  </div>
                </div>

                {/*--------Colum------2------*/}
                <div className="">
                  {/*-------------Input------1-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-xl font-bold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="input input-bordered bg-slate-100 text-black"
                      required
                    />
                  </div>
                </div>
                {/*--------Colum------3------*/}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                  {/*-------------Input------1-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-xl font-bold">
                        Start Date
                      </span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      placeholder="Select Start Date"
                      className="input input-bordered bg-slate-100 text-black"
                      required
                    />
                  </div>
                  {/*-------------Input------2-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-black text-xl font-bold">
                        End Date
                      </span>
                    </label>
                    <input
                      type="date"
                      name="EndDate"
                      placeholder="Select End Date"
                      className="input input-bordered bg-slate-100 text-black"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#008080] text-white text-xl border-0">
                    Book....
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
