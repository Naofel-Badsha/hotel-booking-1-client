
const Contact = () => {
  return (
    <div className="container m-auto">
      <h1 className="text-4xl text-center font-bold py-10">Contact Us</h1>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter Your Frist Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <textarea
                name=""
                placeholder="Enter Youe Message"
                className="h-[120px] w-full outline-0 border-2 p-3 rounded-lg"
              ></textarea>
            </div>
            <input type="submit" value="Submit" className="bg-[#008080] py-2 rounded-lg text-center text-xl text-white font-bold cursor-pointer"/>
          </form>
        </div>
        <div>
          <img src="https://i.ibb.co/5BBmr5t/contact.jpg" className="w-full h-[430px] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
<form>
  {/*---------------Part----------------1-------------*/}
  <div className="md:flex gap-3">
    <div className="form-control md:w-1/2">
      <label className="input-group">
        <input
          type="text"
          placeholder="Enter Your Frist Name"
          className="p-3 w-full border-2 border-sky-600 outline-0"
        />
      </label>
    </div>
    <div className="form-control md:w-1/2 py-[5px]">
      <label className="input-group">
        <input
          type="text"
          placeholder="Enter Your Frist Name"
          className="p-3 w-full border-2 border-sky-600 outline-0"
        />
      </label>
    </div>
  </div>
  {/*---------------Part----------------1-------------*/}

  {/*---------------Part----------------2-------------*/}
  <div className="md:flex gap-3 mt-5">
    <div className="form-control md:w-1/2">
      <label className="input-group">
        <input
          type="text"
          placeholder="Enter Your Product Name"
          className="p-3 w-full border-2 border-sky-600 outline-0"
        />
      </label>
    </div>
    <div className="form-control md:w-1/2 py-[5px]">
      <label className="input-group">
        <input
          type="text"
          placeholder="Enter Your Phone Number"
          className="p-3 w-full border-2 border-sky-600 outline-0"
        />
      </label>
    </div>
  </div>
  {/*---------------Part----------------2-------------*/}
  <textarea
  //   className="mt-5 w-full p-3 h-[180px] border-2 border-sky-600 outline-0"
  //   name="tex-area"
  //   id=""
  //   placeholder="Enter Your Messages.....?
  //    "
  ></textarea>

  <button
    className="block font-bold  w-full select-none rounded-lg bg-gradient-to-r from-blue-200 from-0% via-sky-600 via-70%   py-3 px-6 text-center align-middle text-[18px]  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    data-ripple-light="true"
  >
    Countact Our
  </button>
</form>;
