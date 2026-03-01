import React from "react";
// import heroImg from "../../assets/bg-shadow.png";

import banner from "../../assets/banner-main.png";
const Banner = () => {
  return (
    <div
      className="h-90 bg-cover bg-center bg-no-repeat flex items-center flex-col justify-center rounded-2xl my-16 space-y-3 py-4
  bg-[radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.6),transparent_40%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.5),transparent_40%),linear-gradient(to_right,rgba(0,0,0,0.95),rgba(0,0,0,0.95))]"
    >
      <img className="w-40" src={banner} alt="" />
      <h2 className="font-bold text-white text-xl text-center lg:text-3xl xl:text-5xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-[#ffffff86]">Beyond Boundaries Beyond Limits</p>
      <div className="border-2 border-[#E7FE29] rounded-xl p-1.5">
        <button className="bg-[#E7FE29] rounded-xl px-3 py-1.5 font-semibold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
