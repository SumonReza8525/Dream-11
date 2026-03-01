import React, { Suspense, useEffect, useState } from "react";

import Container from "./Container";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import Banner from "./components/banner/Banner";
import FooterContainer from "./components/footer/FooterContainer";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";
import StatePlayer from "./components/playerState/StatePlayer";

const App = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []); // empty dependency = run once

  // const dataPromise = loadData();
  const [selectedPlayers, setSelelctedPlayers] = useState([]);

  const handleSelectedPlayers = (player) => {
    if (selectedPlayers.length >= 6) {
      return; // stop here
    }
    setSelelctedPlayers([...selectedPlayers, player]);
  };
  // console.log(selectedPlayers);
  const [toggle, setToggle] = useState(true);
  const handleAvailable = () => {
    setToggle(true);
  };
  const handleSelected = () => {
    setToggle(false);
  };

  const handleDeletePlayer = (playerToDelete) => {
    const remaining = selectedPlayers.filter(
      (player) => player.playerName !== playerToDelete.playerName,
    );
    setSelelctedPlayers(remaining);
  };

  return (
    <div>
      <Container>
        <Navbar selectedPlayers={selectedPlayers}></Navbar>
        <Banner></Banner>
        <StatePlayer
          handleAvailable={handleAvailable}
          handleSelected={handleSelected}
          toggle={toggle}
          selectedPlayers={selectedPlayers}
        ></StatePlayer>

        {toggle ? (
          <Suspense
            fallback={
              <p className="w-full  min-h-20 flex justify-center items-center">
                <span className="loading loading-bars loading-xl text-center"></span>
              </p>
            }
          >
            <Players
              loadData={loadData}
              handleSelectedPlayers={handleSelectedPlayers}
              selectedPlayers={selectedPlayers}
            ></Players>
          </Suspense>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            handleDeletePlayer={handleDeletePlayer}
          ></SelectedPlayers>
        )}
      </Container>
      <FooterContainer></FooterContainer>
    </div>
  );
};

export default App;
