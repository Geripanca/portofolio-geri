import React from "react";
import myProfile from "/Profile-face-Geri.jpg";
import myNewProfile from "/new-Profile-face-Geri.jpg";

function Hero() {
  return (
    <>
      {" "}
      <div className="font-pacifico px-5 relative">
        <div className="container w-3/4 mx-auto mt-1 relative">
          <img
            src={myProfile}
            alt="pic-profile-Geri"
            className="w-full h-auto transition-opacity duration-500 ease-in-out hover:opacity-0"
          />
          <img
            src={myNewProfile}
            alt="new-pic-profile-Geri"
            className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
          />
        </div>

        <div className="absolute bottom-[35%] right-[25%]  sm:bottom-36 sm:right-24 ">
          <a
            href="/CV-Geri Tri Panca Tamba.pdf"
            download="CV-Geri Tri Panca Tamba.pdf"
            className="bg-[#0B0B0C] p-2 sm:p-4 hover:bg-[#F0F0F0] font-anton text-[10px] sm:text-lg text-[#F0F0F0] hover:text-[#0B0B0C] rounded-full flex items-center justify-center"
          >
            SEE CV
          </a>
        </div>

        <div className="absolute p-4 italic text-center bottom-[5%] right-[25%] sm:bottom-5 lg:right-[20%] md:right-[18%] sm:right-[15%] text-[#FF0000] -rotate-[16deg] text-3xl sm:text-6xl hover:tracking-wide">
          Geri Panca
        </div>
      </div>
    </>
  );
}

export default Hero;
