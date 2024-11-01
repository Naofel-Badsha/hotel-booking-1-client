import question from "../../../assets/Images/fqu/faq.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Questuin = () => {
  return (
    <div className="container m-auto py-5">
      {/*----------Section-----Title---------*/}
      <SectionTitle heading={"Client Question"}></SectionTitle>
      <div className="px-3">
        <div className="flex items-center gap-4 md:gap-6 lg:gap-10 flex-col lg:flex-row">
          {/*----------Images---------------*/}
          <div className="flex-1">
            <div className="w-full h-[500px]">
              <img
                src={question}
                className=" rounded-md w-full h-full object-center"
              />
            </div>
          </div>
          {/*---------Accrodion---------------*/}
          <div className="flex-1">
            <div id="accordion-collapse" data-accordion="collapse">
              {/*---------Question-------1--------*/}
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5  rtl:text-right text-gray-500 border border-b-0   dark:text-gray-400 hover:bg-gray-100  gap-3"
                >
                  <span className="text-2xl font-medium text-black">
                    Can I Request a late check-out...?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="text-xl text-slate-700">
                    "Dear [Hotel Name] team, I hope you’re well. I’m reaching
                    out to see if a late check-out would be possible for my
                    reservation. It would greatly assist with my travel
                    schedule. Please let me know if there’s an additional fee,
                    or if there are any specific requirements. Thank you!"
                  </p>
                </div>
              </div>

              {/*---------Question-------2--------*/}
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 rtl:text-right text-gray-500 border border-b-0   dark:text-gray-400 hover:bg-gray-100  gap-3"
                >
                  <span className="text-2xl font-medium text-black">
                    Is Wi-fi available in the rooms...?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="text-xl text-slate-700">
                    "Hello [Hotel Name] team, I hope you're doing well. Could
                    you please confirm if Wi-Fi is available in the rooms for
                    guest use? Also, is it complimentary, or is there an
                    additional charge? I would appreciate any details about the
                    service. Thank you very much!"
                  </p>
                </div>
              </div>

              {/*---------Question-------3--------*/}
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 rtl:text-right text-gray-500 border border-b-0   dark:text-gray-400 hover:bg-gray-100  gap-3"
                >
                  <span className="text-2xl font-medium text-black">
                    Are pets allawed to the hotel....?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="text-xl text-slate-700">
                    "Hello [Hotel Name] team, I hope you're well. I wanted to
                    ask if pets are allowed at your hotel. If so, could you
                    please provide information on any specific pet policies or
                    additional fees? I’d appreciate any details regarding this.
                    Thank you very much for your help!"
                  </p>
                </div>
              </div>

              {/*---------Question-------4--------*/}
              <h2 id="accordion-collapse-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 rtl:text-right text-gray-500 border border-b-0   dark:text-gray-400 hover:bg-gray-100  gap-3"
                >
                  <span className="text-2xl font-medium text-black">
                    Can I make dietary requests for dining....?
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-4"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p className="text-xl text-slate-700">
                    "Hello [Hotel Name] team, I hope you're well. I’d like to
                    ask if it's possible to make specific dietary requests for
                    dining options at your hotel. Are there available
                    accommodations for allergies or special diets? Any details
                    on how to make requests would be greatly appreciated. Thank
                    you!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questuin;
