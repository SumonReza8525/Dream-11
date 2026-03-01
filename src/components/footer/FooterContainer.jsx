import React from "react";
import footerImg from "../../assets/bg-shadow.png";
const FooterContainer = () => {
  return (
    <div className="w-full border-2 mt-50 relative">
      <div className="p-2 border-2 border-white absolute top-[-25%] rounded-2xl w-[80%] min-h-50 mx-auto z-40 left-[10%] bg-[#ffffff3f]">
        <div
          className=" rounded-2xl flex flex-col items-center justify-center bg-white space-y-2 p-1.5 min-h-50 shadow-accent-content"
          style={{
            backgroundImage: `url(${footerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className="text-xl md:text-2xl lg:text-4xl font-bold">
            Subscribe to our Newsletter
          </p>
          <p className="text-gray-500 font-semibold text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-3">
            {" "}
            <input
              placeholder="Enter your email"
              className="border-2 px-3 py-1.5 rounded-xl bg-white border-gray-300"
              type="text"
              name=""
              id=""
            />
            <button className="bg-linear-to-r from-pink-400 to-yellow-400 text-black font-bold py-2 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black w-full min-h-96">footer2</div>
    </div>
  );
};

export default FooterContainer;
