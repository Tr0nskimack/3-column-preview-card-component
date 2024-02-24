import React from "react";

const App = () => {
  return (
    <div className="md:flex min-h-screen justify-center items-center p-3">
      {/* card1 */}
      <div className="">
        <div className="bg-[#e38826] w-[320px] h-[525px] rounded-t-md md:rounded-r-none md:rounded-l-md p-[50px] ">
          <img src="icon-sedans.svg" alt="" />
          <h1 className="uppercase font-fuente2 font-semibold text-3xl text-white my-6">
            sedans
          </h1>
          <p className="text-[#ffffffbf] leading-8 mb-[100px]">
            Choose a sedan for its affordability and excellent fuel economy.
            Idead for cruising in the city or on your next road trip.
          </p>

          <button className=" py-3 text-[#e38826] font-semibold bg-[#f2f2f2] px-6 w-[150px] rounded-full">
            Learn More
          </button>
        </div>
      </div>
      {/* card2 */}
      <div className="">
        <div className=" bg-[#006970] w-[320px] h-[525px] p-[50px] ">
          <img src="icon-suvs.svg" alt="" />
          <h1 className="uppercase font-fuente2 font-semibold text-3xl text-white my-6">
            suvs
          </h1>
          <p className="text-[#ffffffbf] leading-8 mb-[100px]">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect or your next family vacation and off-road adventures.
          </p>

          <button className=" py-3 text-[#006970] font-semibold bg-[#f2f2f2] px-6 w-[150px] rounded-full">
            Learn More
          </button>
        </div>
      </div>
      {/* card3 */}
      <div className="">
        <div className="bg-[#004241] w-[320px] rounded-b-md md:rounded-bl-none md:rounded-r-md  h-[525px] p-[50px] ">
          <img src="icon-luxury.svg" alt="" />
          <h1 className="uppercase font-fuente2 font-semibold text-3xl text-white my-6">
            luxury
          </h1>
          <p className="text-[#ffffffbf] leading-8 mb-[100px]">
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a loxury rental and arrive in style.
          </p>

          <button className=" py-3 text-[#004241] font-semibold bg-[#f2f2f2] px-6 w-[150px] rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
