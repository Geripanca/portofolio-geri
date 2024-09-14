import React from "react";
import Judul from "../components/tentang/judul";
import Deskripsi from "../components/tentang/deskripsi";
import Skill from "../components/tentang/skill";

function Tentang() {
  return (
    <div className="w-full lg:w-1/2 mx-auto bg-[#F0F0F0] min-h-screen">
      <Judul />
      <Deskripsi />
      <Skill />
    </div>
  );
}

export default Tentang;
