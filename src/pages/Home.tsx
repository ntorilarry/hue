import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import BgImg from "../assets/image/bgg.png"

function Home() {
  return (
    <div className="bg-white dark:bg-[#1A1A1A]">
      <div className="bgg">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default Home;
