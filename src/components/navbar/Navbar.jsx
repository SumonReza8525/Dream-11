import React from "react";
import Container from "../../Container";
import dollarImg from "../../assets/dollar.png";
import navImg from "../../assets/logo.png";
const Navbar = ({ selectedPlayers }) => {
  const prices = selectedPlayers.map((player) => player.playerPrice);
  // console.log(prices);

  let myPrice = 10;

  const totalPrice = prices.reduce((sum, price) => sum + price, 0);
  //

  const remaining = myPrice - totalPrice;

  if (remaining < 0) {
    alert("Low Balance");
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className=" text-xl">
          <img src={navImg}></img>
        </a>
      </div>
      <div className="flex gap-1.5 items-center justify-between">
        <p className="">
          <span>{remaining.toFixed(2)}</span>
          <span> crore</span>
        </p>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
