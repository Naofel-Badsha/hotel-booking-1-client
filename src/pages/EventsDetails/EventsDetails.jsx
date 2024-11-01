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
                    A cocktail party is a social occasion, usualy held in early
                    evening. Coocktails, other alcoholic drinks are served
                    alongside a selection of night nibbles, called conopes. The
                    dress code is quite dressy, and a cocktail party will
                    typically last for two to three house.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    These parties are social events where guests are encouraged
                    to sociallizo with ono other, mingle and converse.
                  </p>
                </div>
                <Link to="/">
                  <button className="btn  bg-[#008080] text-white text-xl border-0">
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
                    An event refers to an organized activity that people can
                    attend and is relevant to the performance, production or
                    celebration of music. in most cases, this means live
                    concerts, festivals and other similar activities.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    This musical night is for all who love music and
                    socializing.
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

          {/*---------Events------Details-----3------*/}
          <div className="flex gap-6 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                  Weekend Brunch ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    Brunch, that delightfil mid-morning fusion of breakfast and
                    lunch, embodies the essence of leisurely enjoyment. It is an
                    invitng accasion to gather friends, share stories and savar
                    a mediey of flavors.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    From innovative brunce concepts to mouthwatering menu
                    seicctions, we have got your brunce aspairations covered.
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
          <div className="flex  gap-6 flex-col lg:flex-row py-20">
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
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-black py-5">
                  Conference & Seminar ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    Hotel Name offers versatile conference and seminar
                    facilities designed to cater to all event needs. Equipped
                    with advanced audio-visual systems, customizable seating
                    arrangements, and complimentary high-speed Wi-Fi, our spaces
                    are ideal for business meetings, seminars, and corporate
                    gatherings.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Our experienced event planning team provides full support,
                    including catering options and breakout areas, to ensure a
                    seamless and productive experience for attendees. Hotel
                    Name is committed to making your event successful."
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
