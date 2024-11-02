import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Price = () => {
  return (
    <div className="container m-auto py-5">
      <SectionTitle heading={"Room Price"}></SectionTitle>
      <div className="px-3">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/*---------Card------1---------*/}
          <div className="rounded-xl bg-[#008080] p-10 text-white">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
              <p className="block font-bold text-3xl antialiased  leading-normal">
                Basic
              </p>
              <h1 className="flex justify-center gap-1 mt-6 font-normal text-7xl">
                <span className="mt-2 text-4xl">$</span>01
                <span className="self-end text-4xl">/Day</span>
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">1 Day Or Night $: 2000</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">12 Hour Service</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">2 Ac Or 1 Fan</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">24 Hours Internet/ Wifi</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    Life time technical support
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    6 Hours Food & Drink Services
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*---------Card------2---------*/}
          <div className="rounded-xl bg-[#008080] p-10 text-white">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center  bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
              <p className="block font-bold text-3xl antialiased leading-normal">
                Standard
              </p>
              <h1 className="flex justify-center gap-1 mt-6 font-normal text-7xl">
                <span className="mt-2 text-4xl">$</span>03
                <span className="self-end text-4xl">/Day</span>
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">3 Day Or Night $: 5000</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">12 Hour Service</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">3 Ac 2 Fan</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">24 Hours Internet/ Wif</p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    Life time technical support
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    12 Hours Food & Drink Services
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/*---------Card------3---------*/}
          <div className="rounded-xl bg-[#008080] p-10 text-white">
            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
              <p className="block font-bold text-3xl antialiased leading-normal">
                Platinam
              </p>
              <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-7xl">
                <span className="mt-2 text-4xl">$</span>05
                <span className="self-end text-4xl">/Day</span>
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    5 Day Or Night $: 8000
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    24 Hour Service
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    3 Ac 3 Fan
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    24 Hours Internet/ Wif
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    Life time technical support
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <i className="fa-regular fa-circle-check text-xl"></i>
                  <p className="text-xl font-medium">
                    24 Hours Food & Drink Services
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
