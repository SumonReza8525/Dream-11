import React from "react";

const StatePlayer = ({
  handleSelected,
  handleAvailable,
  toggle,
  selectedPlayers,
}) => {
  return (
    <div className="flex justify-between items-center my-14">
      <p className="font-bold text-lg md:text-xl">
        {toggle ? "Available players" : "Selected Players"}
      </p>
      <div className="flex justify-between items-center  ">
        <button
          onClick={handleAvailable}
          className={` px-2 md:px-4 py-2 rounded-l-xl border-2 border-r-0 border-gray-500 ${toggle && "bg-amber-300"}`}
        >
          Available
        </button>{" "}
        <button
          onClick={handleSelected}
          className={`px-2 md:px-4 py-2 rounded-r-xl  border-2 border-l-0 border-gray-500 text-nowrap ${toggle || "bg-amber-300"}`}
        >
          Selected (<span>{selectedPlayers.length}/6</span>)
        </button>
      </div>
    </div>
  );
};

export default StatePlayer;
