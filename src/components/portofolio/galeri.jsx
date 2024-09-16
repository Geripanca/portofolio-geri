import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

function Galeri() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar yang dipilih

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_API_KEY,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data fetched:", data);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk menangani klik pada gambar
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid grid-cols-[30%_70%] border-b-2 border-black ">
        <div className="py-6 px-2">
          <Link
            to="/"
            className="sm:text-lg text-[15px] font-libre font-bold uppercase underline"
          >
            Back
          </Link>
        </div>
        <div className="p-4">
          <h1 className="font-anton sm:text-5xl text-xl">Portofolio</h1>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="min-h-screen p-4">
              <div
                className="bg-black w-full max-w-lg h-auto sm:h-[500px] rounded-lg mx-auto cursor-pointer"
                onClick={() => handleImageClick(project.url_gambar)} // Klik gambar
              >
                <img
                  src={project.url_gambar}
                  alt={project.title}
                  className="w-full h-full object-cover mx-auto mt-4 rounded-lg"
                />
              </div>
              <div className="px-3 py-2">
                <h2 className="font-bold text-xl">{project.title}</h2>
                <p className="text-gray-600">{project.deskripsi}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal untuk preview gambar */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeri;
