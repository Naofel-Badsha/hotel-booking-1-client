const AddRoom = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl my-4 text-black font-bold">
        Add Room
      </h1>
      <hr />
      {/*-----------Form---------*/}
      <div className="px-2">
        <form className="">
          {/*----------Set--------1---------*/}
          <div className="flex gap-4 flex-col lg:flex-row">
            {/*------------Input-------1--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Image
                </span>
              </label>
              <input
                type="file"
                placeholder="Chose Image...."
                className="file-input file-input-bordered  text-white bg-blue-gray-100"
              />
            </div>
            {/*------------Input-------2--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Location
                </span>
              </label>
              <input
                type="text"
                placeholder="Location...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
          </div>
          {/*----------Set--------2---------*/}
          <div className="flex gap-4 flex-col lg:flex-row mt-4">
            {/*------------Input-------3--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Size
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Size...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------4--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Per Room Tk
                </span>
              </label>
              <input
                type="text"
                placeholder="Location...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------4--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Count
                </span>
              </label>
              <input
                type="text"
                placeholder="Count...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
          </div>
          {/*----------Set--------3---------*/}
          <div className="flex gap-4 flex-col lg:flex-row mt-4">
            {/*------------Input-------5--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Offer
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Offers...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------6--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Types
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Types...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------7--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                Available Room
                </span>
              </label>
              <input
                type="text"
                placeholder=" Available Room...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
          </div>
          {/*----------Set--------4---------*/}
          <div className="flex gap-4 flex-col lg:flex-row mt-4">
            {/*------------Input-------8--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Discount
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Biscount...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------9--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Status
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Status...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------10--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                Day Night
                </span>
              </label>
              <input
                type="text"
                placeholder="Day Night...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
          </div>
          {/*----------Set--------5---------*/}
          <div className="flex gap-4 flex-col lg:flex-row mt-4">
            {/*------------Input-------11--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Category
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Category...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------12--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                Bed Room
                </span>
              </label>
              <input
                type="text"
                placeholder="Bed Room...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------13--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                Bath Room
                </span>
              </label>
              <input
                type="text"
                placeholder="Bath Room...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div> 
          </div>
          {/*----------Set--------6---------*/}
          <div className="flex gap-4 flex-col lg:flex-row mt-4">
            {/*------------Input-------14--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                  Room Review
                </span>
              </label>
              <input
                type="text"
                placeholder="Room Review...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------15--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                Room Rating
                </span>
              </label>
              <input
                type="text"
                placeholder="Bed Rating...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div>
            {/*------------Input-------16--------*/}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl text-black font-bold">
                Description
                </span>
              </label>
              <input
                type="text"
                placeholder="Bath Description...."
                className="input input-bordered text-black bg-blue-gray-50 border-0 outline-0 placeholder:text-gray-600"
              />
            </div> 
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#008080ef] border-0 text-white text-xl ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
