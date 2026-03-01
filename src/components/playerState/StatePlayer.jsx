import React from "react";

const StatePlayer = () => {
  return (
    <div className="flex justify-between items-center my-14">
      <p className="font-bold text-xl">Available Players</p>
      <div className="flex justify-between items-center gap-2 px-4 py-2 border-amber-200 border-2 rounded-xl">
        <p>Available</p> <p>Selected</p>
      </div>
    </div>
  );
};

export default StatePlayer;
