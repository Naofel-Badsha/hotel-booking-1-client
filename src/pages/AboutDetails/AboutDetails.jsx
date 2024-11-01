import { Link } from "react-router-dom";

const AboutDetails = () => {
  return (
    <div className="container m-auto py-5">
      <div className="px-3">
        {/*-----------About-------Banner--------*/}
        <ul>
          <li className="relative">
            <img
              src="https://i.ibb.co.com/7CtysXX/About-Details.jpg"
              style={{ width: "100%", height: "100vh", opacity: "0.7" }}
            />
            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
              <div className="text-center">
                <h3 className=" text-black text-3xl md:text-4xl lg:text-8xl font-bold py-5">
                  About Us
                </h3>
                <p className=" text-black text-xl md:text-2xl lg:text-5xl font-normal py-5">
                  Enjoy You Vacation
                </p>
              </div>
            </div>
          </li>
        </ul>

        {/*-----------About-------Details------------*/}
        <div>
          {/*-----------About-------Details------1------*/}
          <div className="flex gap-6 flex-col-reverse lg:flex-row py-20">
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                  See Our Hotel Room ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    It is a 5 star deluxe property where the open ocaon meets
                    the lagoon and the warm sundet yellow of memorable evenings
                    by the beach luiis you to sleep in a heaben of trees.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    The sun kissed beaches, transparent turquoise- shaded
                    seawater, less human interforence, and adorable colorful
                    corais will surely kindle your love for nature and bring the
                    child in you. Five Star has a vast storage of a unique
                    varienty of marine species that will make you awestruck
                    during the antire trip.
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
                src="https://i.ibb.co.com/8bdv6Bg/About-Details-3.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/*-----------About-------Details------2------*/}
          <div className="flex gap-6 flex-col lg:flex-row py-20">
            {/*---------Image---------*/}
            <div className="flex-1">
              <img
                src="https://i.ibb.co.com/gvzSy72/About-Details2.jpg"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            {/*---------Text---------*/}
            <div className="flex-1">
              <div>
                <h2 className="text-2xl  md:text-3xl lg:text-3xl font-bold text-black py-5">
                  Whay Choose US ?
                </h2>
                <div className="py-5">
                  <p className="text-xl text-slate-700 text-justify">
                    We can here to give you unforgettable memorices full of
                    luxury and comfort In-spite of our top-class services we
                    never exploit as we offer reasonable reats along with a
                    diversified range of adjustable options for our esteemed
                    clients.
                  </p>
                  <p className="text-xl text-slate-700 text-justify mt-4">
                    Having the heightes number of online reviews and an
                    exceptional performance at online booking websites we are
                    commited to exercise extreme care and concern in our
                    hospitality as we aim to delever the best host experience.
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

          {/*-----------About-------Creative------Team------*/}
          <div className="py-20">
            <h2 className="text-2xl md:text-3xl lg:text-3xl text-center font-bold text-black mb-16">Our Creative Team</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/*-----------Mermber-----1-------*/}
            <div className="border-2 border-[#008080] py-8 px-5 shadow-xl rounded-lg hover:-translate-y-2 duration-100">
               <img src="https://i.ibb.co.com/QYBn1CV/test-1.jpg" className="w-40 h-40 object-cover rounded-full m-auto"/>
               <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-center text-black">James Smits</h3>
               <h4 className="text-xl font-bold text-center text-[#008080] py-2">Administrator</h4>
               <p className="text-xl text-slate-700">Bringing forth the ability to handle a variety of clerical and Administrative tasks to ensure smooth hotel corperation </p>
            </div>
            {/*-----------Mermber-----2-------*/}
            <div className="border-2 border-[#008080] py-8 px-5 shadow-xl rounded-lg hover:-translate-y-2 duration-100">
               <img src="https://i.ibb.co.com/5vv4w07/istockphoto-1464618883-612x612.jpg" className="w-40 h-40 object-cover rounded-full m-auto"/>
               <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-center text-black">Mical Cleark</h3>
               <h4 className="text-xl font-bold text-center text-[#008080] py-2">Manager</h4>
               <p className="text-xl text-slate-700">Experiences Hotel Manager with a proven track record in delivering exceptional customer services amd achieving budgeted profitability.</p>
            </div>
            {/*-----------Mermber-----3-------*/}
            <div className="border-2 border-[#008080] py-8 px-5 shadow-xl rounded-lg hover:-translate-y-2 duration-100">
               <img src="https://i.ibb.co.com/ZKgh9Wc/test-7.jpg" className="w-40 h-40 object-cover rounded-full m-auto"/>
               <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mt-4 text-center text-black">Aston Agar</h3>
               <h4 className="text-xl font-bold text-center text-[#008080] py-2">Assistant Officer</h4>
               <p className="text-xl text-slate-700">proficient in picking up new procedures and task quickly while elevating customer services standards in ever role.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
