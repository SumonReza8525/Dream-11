import React from "react";

const SelectedPlayers = ({ selectedPlayers, handleDeletePlayer }) => {
  // console.log(selectedPlayers);

  return (
    <div>
      {selectedPlayers.map((player, index) => (
        <div
          className="flex justify-between items-center space-y-2.5"
          key={index}
        >
          <div className="flex gap-2 items-center">
            <img
              className="w-20 h-20 object-cover rounded-2xl"
              src={player.playerImage}
              alt=""
            />
            <div>
              <p className="text-xl font-bold">{player.playerName}</p>
              <p>{player.playerCountry}</p>
            </div>
          </div>
          <div
            onClick={() => handleDeletePlayer(player)}
            className="text-red-500 cursor-pointer"
          >
            Delete
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
