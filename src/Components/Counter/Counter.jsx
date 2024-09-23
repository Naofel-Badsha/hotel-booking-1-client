import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {/*---------Counter---------Start---------*/}
        <div className="py-10">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
            {/*-------------Counter---------1---------*/}
            <div className="bg-[#008080] px-6 rounded-md py-5">
              <h1 className="text-center font-bold text-white  text-5xl md:text-5xl lg:text-6xl">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={30}
                    duration={4}
                    delay={0}
                  ></CountUp>
                )}
                +
              </h1>
              <h2 className="text-center text-black font-bold text-2xl md:text-3xl lg:text-3xl mt-2">
              Our Rooms
              </h2>
            </div>
            {/*-------------Counter---------2---------*/}
            <div className="bg-[#008080] px-6 rounded-md py-5">
              <h1 className="text-center font-bold text-white  text-5xl md:text-5xl lg:text-6xl">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={12000}
                    duration={20}
                    delay={0}
                  ></CountUp>
                )}
                +
              </h1>
              <h2 className="text-center text-black font-bold text-2xl md:text-3xl lg:text-3xl mt-2">
              Happy Client
              </h2>
            </div>
            {/*-------------Counter---------3---------*/}
            <div className="bg-[#008080] px-6 rounded-md py-5">
              <h1 className="text-center font-bold text-white  text-5xl md:text-5xl lg:text-6xl">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={20}
                    duration={4}
                    delay={0}
                  ></CountUp>
                )}
                +
              </h1>
              <h2 className="text-center text-black font-bold text-2xl md:text-3xl lg:text-3xl mt-2">
                Hotels Listed
              </h2>
            </div>
          </div>
        </div>
        {/*---------Counter---------End---------*/}
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
