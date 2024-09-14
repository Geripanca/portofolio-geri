import React from "react";

function Judul() {
  return (
    <>
      <div className="flex flex-column p-5 justify-between border-2 border-black uppercase font-libre font-bold">
        <div className="p-1 border-2 border-black">
          <a href="/" className="">
            Kembali
          </a>
        </div>

        <div className="text-xl p-1">About</div>
        <div className="p-1">
          <img src="/copy-logo.svg" alt="just-logo" className="w-7 h-7" />
        </div>
      </div>
      <div className="flex justify-center font-libre uppercase p-3 border-b-2 border-black">
        <div className="text-6xl">news</div>
      </div>
      <div className="flex justify-between p-3 font-libre sm:text-[15px] text-[8px] uppercase border-b-2 border-black">
        <p>Art</p>
        <p>Computer Science</p>
        <p>Student</p>
        <p>Designer</p>
        <p>Blogger</p>
      </div>
    </>
  );
}

export default Judul;
