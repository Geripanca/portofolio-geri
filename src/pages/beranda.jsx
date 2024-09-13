import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

function Beranda() {
  return (
    <div className="w-full lg:w-1/2 mx-auto bg-[#F0F0F0] sm:p-5 p-0">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default Beranda;
