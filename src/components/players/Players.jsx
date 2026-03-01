import React, { use } from "react";
import Player from "./Player";
import StatePlayer from "../playerState/StatePlayer";

const Players = ({ dataPromise }) => {
  const players = use(dataPromise);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {players.map((player, index) => (
          <Player key={index} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
