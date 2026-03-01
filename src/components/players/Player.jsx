import React, { useState } from "react";
import userImg from "../../assets/user.png";
import flag from "../../assets/report.png";
const Player = ({ player, handleSelectedPlayers, selectedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    setIsSelected(true);
    handleSelectedPlayers(player);
  };

  return (
    <div className="border-2 border-gray-200 p-4 rounded-xl space-y-2">
      <img
        className="w-full object-cover rounded-xl"
        src={player.playerImage}
        alt=""
      />
      <div className="flex items-center gap-2">
        <img className="w-6" src={userImg} alt="" />
        <p className="font-bold">{player.playerName}</p>
      </div>

      <div className="flex justify-between items-center border-b-2 pb-3 border-gray-200">
        <div className="flex items-center gap-2.5">
          <img src={flag} alt="" />
          <p className="text-gray-400 font-semibold">{player.playerCountry}</p>
        </div>
        <p className="bg-gray-300 px-3 py-1.5 rounded-xl">
          Ratings : {player.rating}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <p className="font-semibold">{player.battingStyle}</p>
        <p className="text-gray-400 font-medium">{player.bowlingStyle}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">
          <span>Price in crore: $</span>
          <span>{player.playerPrice}</span>
        </p>
        <button
          disabled={isSelected || selectedPlayers.length >= 6}
          onClick={handleSelected}
          className={` px-3 py-1.5 rounded-2xl font-bold  ${isSelected || selectedPlayers.length > 6 ? "bg-green-600 text-white border-2 border-green-600" : "bg-gray-200 border-2 border-gray-400"}`}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
