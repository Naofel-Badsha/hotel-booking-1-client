//<i class="fa-regular fa-circle-check"></i>
const Price = () => {
  return (
    <div className="container m-auto">
      <h1 className="text-4xl font-bold py-10 text-center">Our Room Price</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/*---------Card------1---------*/}
        <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr bg-[#008080] p-8 text-white">
          <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
            <p className="block font-bold text-3xl antialiased  leading-normal text-white">
              Basic
            </p>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
              <span className="mt-2 text-4xl">$</span>01
              <span className="self-end text-4xl">/Day</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  1 Day Or Night $: 2000
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  12 Hour Service
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  2 Ac Or 1 Fan
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  24 Hours Internet/ Wifi
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  Life time technical support
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  6 Hours Food & Drink Services
                </p>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-5">
            <button
              className="block w-full  rounded-md bg-white text-center text-lg font-bold  text-[#008080] py-2 cursor-pointer"
              data-ripple-dark="true">
              Buy Now
            </button>
          </div>
        </div>
        {/*---------Card------2---------*/}
        <div className="relative flex w-full flex-col rounded-xl bg-gradient-to-tr bg-[#008080] p-8 text-white">
          <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
            <p className="block font-bold text-3xl antialiased leading-normal text-white">
              standard
            </p>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
              <span className="mt-2 text-4xl">$</span>03
              <span className="self-end text-4xl">/Day</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  3 Day Or Night $: 5000
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  12 Hour Service
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  3 Ac 2 Fan
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  24 Hours Internet/ Wif
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  Life time technical support
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  12 Hours Food & Drink Services
                </p>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-5">
            <button
              className="block w-full  rounded-md bg-white text-center text-lg font-bold  text-[#008080] py-2 cursor-pointer"
              data-ripple-dark="true"
            >
              Buy Now
            </button>
          </div>
        </div>
        {/*---------Card------3---------*/}
        <div className="relative flex w-full  flex-col rounded-xl bg-gradient-to-tr bg-[#008080] p-8 text-white">
          <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
            <p className="block font-bold text-3xl antialiased leading-normal text-white">
              Platinam
            </p>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
              <span className="mt-2 text-4xl">$</span>05
              <span className="self-end text-4xl">/Day</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  5 Day Or Night $: 8000
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  24 Hour Service
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  3 Ac 3 Fan
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  24 Hours Internet/ Wif
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  Life time technical support
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="border-2 w-8 h-8 flex items-center justify-center rounded-full">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <p className="block font-sans text-base antialiased font-bold leading-relaxed text-inherit">
                  24 Hours Food & Drink Services
                </p>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-5">
            <button
              className="block w-full  rounded-md bg-white text-center text-lg font-bold  text-[#008080] py-2 cursor-pointer"
              data-ripple-dark="true"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
