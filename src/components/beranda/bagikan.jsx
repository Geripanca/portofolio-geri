import React from "react";

function Bagikan({ isOpen, onClose }) {
  const urlToShare = "https://portofolio-geri.vercel.app/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(urlToShare);
    alert("Link berhasil disalin!");
  };

  const socialMediaLogos = [
    {
      name: "Whatsapp",
      url: "/whatsapp-logo.svg",
      getHref: (url) =>
        `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
    },
    {
      name: "Telegram",
      url: "/telegram-logo.svg",
      getHref: (url) =>
        `https://t.me/share/url?url=${encodeURIComponent(
          url
        )}&text=Bagikan%20ke%20Telegram`,
    },
    {
      name: "Facebook",
      url: "/facebook-logo.svg",
      getHref: (url) =>
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
    },
    {
      name: "Messenger",
      url: "/messenger-logo.svg",
      getHref: (url) => `fb-messenger://share?link=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-[9999]  ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative mx-3 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          <img src="/close-logo.svg" alt="Close icon" className="w-6 h-6" />
        </button>
        <h2 className="text-2xl text-[#0B0B0C] font-bold mb-4">Share!</h2>
        <div className="flex flex-col font-oswald italic">
          <div className="flex space-x-3 justify-center mb-3">
            {socialMediaLogos.map((social, index) => (
              <a
                key={index}
                href={social.getHref(urlToShare)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
              >
                <img
                  src={social.url}
                  alt={`${social.name} logo`}
                  className="w-full h-full object-contain"
                />
              </a>
            ))}
          </div>
          <button
            onClick={handleCopyLink}
            className="bg-black text-white p-2 rounded hover:bg-gray-900 mx-3 my-1"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bagikan;
