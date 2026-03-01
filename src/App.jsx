import React, { Suspense, useState } from "react";

import Container from "./Container";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import Banner from "./components/banner/Banner";
import FooterContainer from "./components/footer/FooterContainer";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";
import StatePlayer from "./components/playerState/StatePlayer";
const loadData = async () => {
  const res = await fetch("/players.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const [toggle, setToggle] = useState(true);
  const handleAvailable = () => {
    setToggle(true);
  };
  const handleSelected = () => {
    setToggle(false);
  };
  const dataPromise = loadData();
  return (
    <div>
      <Container>
        <Navbar></Navbar>
        <Banner></Banner>
        <StatePlayer
          handleAvailable={handleAvailable}
          handleSelected={handleSelected}
          toggle={toggle}
        ></StatePlayer>

        {toggle ? (
          <Suspense
            fallback={
              <p className="w-full  min-h-20 flex justify-center items-center">
                <span className="loading loading-bars loading-xl text-center"></span>
              </p>
            }
          >
            <Players dataPromise={dataPromise}></Players>
          </Suspense>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </Container>
      <FooterContainer></FooterContainer>
    </div>
  );
};

export default App;
