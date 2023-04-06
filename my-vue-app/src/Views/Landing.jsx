import React from "react";
import { Footer } from "../Components/LandingComponents/Footer";
import { Hero } from "../Components/LandingComponents/Hero";
import { Hire } from "../Components/LandingComponents/Hire";
import { Work } from "../Components/LandingComponents/Work";

export const Landing = () => {
  return (
    <main className="bg-gradient-to-r from-rose-100 to-teal-100 font-D-DIN">
      <Hero />
      <Work />
      <Hire />
      <Footer />
    </main>
  );
};
