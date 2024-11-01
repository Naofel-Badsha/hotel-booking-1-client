import { Link } from "react-router-dom";

const EventsDetails = () => {
  return (
    <div className="container m-auto py-5">
      <div className="px-3">
        {/*-----------About-------Banner--------*/}
        <ul>
          <li className="relative">
            <img
              src="https://i.ibb.co.com/gSHYqZJ/Event-Banner.jpg"
              style={{
                width: "100%",
                height: "100vh",
                opacity: "0.7",
                objectFit: "cover",
              }}
            />
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <div className="text-center">
                <h3 className=" text-black text-3xl md:text-4xl lg:text-8xl font-bold py-5">
                  Our Events
                </h3>
                <p className=" text-black text-xl md:text-2xl lg:text-5xl font-normal py-5">
                  Enjoy Your Life
                </p>
              </div>
            </div>
          </li>
        </ul>

        {/*---------Events------Details---------*/}
        <div>
          {/*---------Events------Details-----1------*/}
          <div className="flex gap-6 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                  Cocktails & Bits?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    It is a 5 star deluxe property where the open ocaon meets
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    The sun kissed beaches, transparent turquoise- shaded
                  </p>
                </div>
                <Link to="/">
                  <button className="btn bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/h1TT0Gh/drinks.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*---------Events------Details-----2------*/}
          <div className="flex gap-6 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/ccZCYZy/Night-Music.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                  Music Night?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    It is a 5 star deluxe property where the open ocaon meets
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    The sun kissed beaches, transparent turquoise- shaded .
                  </p>
                </div>
                <Link to="/">
                  <button className="btn bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*---------Events------Details-----1------*/}
          <div className="flex gap-6 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                  Weekend Brunch ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    It is a 5 star deluxe property where the open ocaon meets
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    The sun kissed beaches, transparent turquoise- shaded
                  </p>
                </div>
                <Link to="/">
                  <button className="btn bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/P9Vf8yV/desserts.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*---------Events------Details-----4------*/}
          <div className="flex gap-6 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/8K3XPNh/Conference-Seminar.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                Conference & Seminar ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    It is a 5 star deluxe property where the open ocaon meets
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    The sun kissed beaches, transparent turquoise- shaded .
                  </p>
                </div>
                <Link to="/">
                  <button className="btn bg-[#008080] text-white text-xl border-0">
                    Back Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
