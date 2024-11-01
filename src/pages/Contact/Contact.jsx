import { FaEnvelope, FaPhone } from "react-icons/fa";
import { GiCrossroad } from "react-icons/gi";

const Contact = () => {
  return (
    <div className="">
      {/*-----------Facilities-------Banner--------*/}
      <ul>
        <li className="relative">
          <img
            src="https://i.ibb.co.com/SsSzY1Z/Contact.jpg"
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
                Our Contact
              </h3>
              <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold py-5">
                Enjoy Your Life
              </p>
            </div>
          </div>
        </li>
      </ul>

      {/*------------Contact-------Details--------*/}
      <div className="container m-auto py-5">
        <div className="px-3">
          {/*------------Heading---------*/}
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black text-center mt-20 py-16">
            7* Star Hotal Paradise
          </h2>

          {/*------------**********************-----------*/}
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {/*----------1-----------*/}
            <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-medium text-black">
              <GiCrossroad className="text-[#008080] text-2xl" /> Avenue Road,
              Dilli
            </h2>
            {/*----------2-----------*/}
            <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-medium text-black">
              <FaEnvelope className="text-[#008080] text-2xl" />{" "}
              7starhotel@gmail.com
            </h2>
            {/*----------3-----------*/}
            <h2 className="text-2xl flex items-center gap-3 md:text-3xl lg:text-3xl font-medium text-black">
              <FaPhone className="text-[#008080] text-2xl" /> +88 01722-458756
            </h2>
          </div>

          <div className="flex gap-10 flex-col-reverse lg:flex-row mt-10 py-20">
            {/*----------Form----------*/}
            <div className="flex-1 card w-full shrink-0 border-2">
              <form className="px-3 py-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl md:text-2xl lg:text-2xl text-black">Name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Name......."
                    className="input input-bordered border-0 outline-none w-full bg-slate-100 text-2xl text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl md:text-2xl lg:text-2xl text-black">Email</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Email......."
                    className="input input-bordered border-none outline-none bg-slate-100 text-2xl text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl md:text-2xl lg:text-2xl text-black">Message</span>
                  </label>
                  <textarea name="" id=""
                  placeholder="Message........"
                  className="input input-bordered border-0 outline-none bg-slate-100 text-2xl text-black w-full h-[150px]">

                  </textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#008080] border-0 text-white text-xl">Submit</button>
                </div>
              </form>
            </div>

            {/*------------Image----------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co/5BBmr5t/contact.jpg"
                className="w-full h-[550px] rounded-2xl  border-2"
              />
            </div>
          </div>
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
