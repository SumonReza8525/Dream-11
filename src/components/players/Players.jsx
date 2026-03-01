import React from "react";
import Player from "./Player";
import StatePlayer from "../playerState/StatePlayer";

const Players = ({ loadData, handleSelectedPlayers, selectedPlayers }) => {
  const players = [...loadData];

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {players.map((player, index) => (
          <Player
            handleSelectedPlayers={handleSelectedPlayers}
            key={index}
            player={player}
            selectedPlayers={selectedPlayers}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
