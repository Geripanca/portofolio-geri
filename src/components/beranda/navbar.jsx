import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import Kontak from "./kontak";
import Bagikan from "./bagikan";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBagikanOpen, setIsBagikanOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  const openBagikan = () => setIsBagikanOpen(true);
  const closeBagikan = () => setIsBagikanOpen(false);
  return (
    <>
      <div className="font-greatVibes ">
        <div className="flex w-3/4  mx-auto mb-1 sm:space-x-14 space-x-4 sm:text-xl text-sm  justify-center font-bold text-[#3A3A3A] capitalize">
          <button
            onClick={openModal}
            className="hover:bg-[#0B0B0C] hover:text-[#F0F0F0]"
          >
            social
          </button>
          <button
            onClick={openContact}
            className="hover:bg-[#0B0B0C] hover:text-[#F0F0F0]"
          >
            contact
          </button>
          <button
            onClick={openBagikan}
            className="hover:bg-[#0B0B0C] hover:text-[#F0F0F0]"
          >
            share
          </button>
        </div>
        <div className="flex w-3/4   text-[#3A3A3A] sm:text-2xl md:text-3xl xl:text-4xl text-lg  justify-between px-3 sm:space-x-4 space-x-2 mx-auto items-center uppercase font-anton">
          <Link
            to="/tentang"
            className="sm:hover:tracking-widest hover:tracking-wider"
          >
            About
          </Link>
          <Link
            to="/portofolio"
            className="sm:hover:tracking-widest hover:tracking-wider"
          >
            Portofolio
          </Link>
          <a
            href="https://outstatic-blog-geri.vercel.app/"
            className="sm:hover:tracking-widest hover:tracking-wider"
          >
            Blog
          </a>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <Kontak isOpen={isContactOpen} onClose={closeContact} />
        <Bagikan isOpen={isBagikanOpen} onClose={closeBagikan}></Bagikan>
      </div>
    </>
  );
}

export default Navbar;
