import React, { Suspense } from "react";

import Container from "./Container";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import Banner from "./components/banner/Banner";
import FooterContainer from "./components/footer/FooterContainer";
const loadData = async () => {
  const res = await fetch("/players.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const dataPromise = loadData();
  return (
    <div>
      <Container>
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense fallback={<h3>Loading,,</h3>}>
          <Players dataPromise={dataPromise}></Players>
        </Suspense>
      </Container>
      <FooterContainer></FooterContainer>
    </div>
  );
};

export default App;
