import React from "react";
import { Hero } from "../Components/LandingComponents/Hero";
import { Betawork } from "../Components/LandingComponents/Betawork";
import { Betahire } from "../Components/LandingComponents/Betahire";
import { Betafooter } from "../Components/LandingComponents/Betafooter";
import { Workandhire } from "../Components/LandingComponents/Workandhire";


export const Landing = () => {
  return (
    <main className="bg-gradient-to-r from-rose-100 to-teal-100 font-D-DIN">
      <Hero />
      <Workandhire />
      {/* <Betawork />
      <Betahire /> */}
      <Betafooter />
    </main>
  );
};
