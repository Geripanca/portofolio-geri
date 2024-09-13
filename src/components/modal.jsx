import React from "react";

const socialMediaLogos = [
  {
    name: "Facebook",
    url: "/facebook-logo.svg",
    href: "https://www.facebook.com/profile.php?id=100092171979816&mibextid=ZbWKwL",
  },
  {
    name: "Instagram",
    url: "/instagram-logo.svg",
    href: "https://www.instagram.com/geri3panca?igsh=ZG93OXZiNWtsbmdo",
  },
  {
    name: "Linkedin",
    url: "linkedin-logo.svg",
    href: "https://www.linkedin.com/in/geri-tri-panca-tamba-930146264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Github",
    url: "github-logo.svg",
    href: "https://github.com/Geripanca",
  },
];

function Modal({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-[9999]  ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full  relative mx-3 sm:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          <img src="/close-logo.svg" alt="Close icon" className="w-6 h-6" />
        </button>
        <h2 className="text-2xl text-[#0B0B0C] font-bold mb-4">Follow Me!</h2>
        <div className="flex space-x-4">
          {socialMediaLogos.map((social, index) => (
            <a
              key={index}
              href={social.href}
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
      </div>
    </div>
  );
}

export default Modal;
