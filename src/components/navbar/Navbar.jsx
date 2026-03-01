import React from "react";
import Container from "../../Container";
import dollarImg from "../../assets/dollar.png";
import navImg from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className=" text-xl">
          <img src={navImg}></img>
        </a>
      </div>
      <div className="flex gap-1.5 items-center justify-between">
        <p className="">
          <span>6</span>
          <span> crore</span>
        </p>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
