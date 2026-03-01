import React from "react";
import footerImg from "../../assets/bg-shadow.png";
const FooterContainer = () => {
  return (
    <div className="w-full   mt-70 relative">
      <div className="p-2 border-2 border-white absolute top-[-20%] rounded-2xl w-[80%] min-h-50 mx-auto z-40 left-[10%] bg-[#ffffff3f]">
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
              className="border-2 px-3 py-1.5 rounded-xl bg-white border-gray-300 outline-0"
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
      <div className="bg-black w-full min-h-96 py-8 text-white">
        <div className="w-[80%]  mx-auto mt-32  md:mt-40 space-y-4 grid grid-cols-1 md:grid-cols-3 gap-8 p-2 ">
          <div>
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team <br />
              dedicated to providing the best <br /> services to our customers
            </p>
          </div>
          <div>
            <h3 className="text-xl  mb-2 font-bold">Quick Links</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start space-y-3">
            <h3 className="text-xl font-bold">Subscribe</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex gap-3">
              {" "}
              <input
                placeholder="Enter your email"
                className="border-2 px-3 py-1.5 rounded-xl border-gray-300 bg-white placeholder:text-gray-500 outline-0 text-black"
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
        <p className="text-center mt-10 text-gray-400">
          @2024 Your Company All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterContainer;
