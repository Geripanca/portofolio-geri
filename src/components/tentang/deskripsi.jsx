import React from "react";

function Deskripsi() {
  return (
    <>
      <div class="grid grid-cols-12 ">
        <div class="col-span-7 border-r-2 border-b-2 border-black p-3 font-libre text-justify">
          <p className="indent-8">
            My name is Geri Tri Panca Tamba, and I am a student majoring in
            Computer Science Education at the Indonesian University of
            Education. I am passionate about{" "}
            <span className="bg-red-300">software development</span> ,{" "}
            <span className="bg-yellow-300">graphic design</span> , and{" "}
            <span className="bg-green-300">artificial intelligence</span> . I am
            eager to continue learning with enthusiasm.
          </p>
        </div>

        <div class="col-span-5 border-b-2 border-black">
          <img src="/Profile-face-Geri.jpg" alt="pic-Gei" />
        </div>
      </div>
      {/*  */}
      <div class="flex items-center justify-center py-10 border-b-2">
        <div class="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg px-20 mx-auto ">
          <ol class="relative border-l-4 border-black leading-loose font-libre">
            <li class="mb-10 ml-6 w-[400px]">
              <div class="absolute w-4 h-4 bg-white border-4 border-black rounded-full -left-[0.6rem]"></div>

              <p class="font-bold text-lg mb-1">
                SD Negeri 270 Gentra Masekdas
              </p>
              <p class="font-bold text-sm mb-2">2007 - 2013</p>
            </li>
            <li class="mb-10 ml-6 w-[400px]">
              <div class="absolute w-4 h-4 bg-white border-4 border-black rounded-full -left-[0.6rem]"></div>

              <p class="font-bold text-lg mb-1">SMP Negeri 25 Bandung</p>
              <p class="font-bold text-sm mb-2">2014 - 2017</p>
            </li>
            <li class="mb-10 ml-6 w-[400px]">
              <div class="absolute w-4 h-4 bg-white border-4 border-black rounded-full -left-[0.6rem]"></div>

              <p class="font-bold text-lg mb-1">SMA Negeri 17 Bandung</p>
              <p class="font-bold text-sm mb-2">2017 - 2020</p>
              <p>Jurusan Matematika Ilmu Pengetahuan Alam</p>
            </li>
            <li class="mb-10 ml-6 w-[400px]">
              <div class="absolute w-4 h-4 bg-white border-4 border-black rounded-full -left-[0.6rem]"></div>

              <p class="font-bold text-lg mb-1">
                Universitas Pendidikan Indonesia
              </p>

              <p class="font-bold text-sm mb-2">2020 - 2024</p>
              <p> Jurusan Pendidikan Ilmu Komputer</p>
              <p>GPA : 3.55</p>
            </li>
          </ol>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default Deskripsi;
