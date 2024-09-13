import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Kontak({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm("xzzpqrpe");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const socialMediaLogos = [
    {
      name: "Whatsapp",
      url: "/whatsapp-logo.svg",
      href: "https://wa.me/6288706382919?text=Hai%20Geri%21",
    },
    {
      name: "Telegram",
      url: "/telegram-logo.svg",
      href: "https://t.me/@Geri2501?text=Hai%20Geri%21",
    },
    {
      name: "Gmail",
      url: "/gmail-logo.svg",
      href: "mailto:geripanca5@gmail.com?subject=Hello%20there&body=Hai%20Geri.",
    },
  ];

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-[9999] ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          <img src="/close-logo.svg" alt="Close icon" className="w-6 h-6" />
        </button>
        <h2 className="text-2xl text-[#0B0B0C] font-bold mb-4">Contact Me!</h2>
        <div className="flex space-x-4 justify-center">
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
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-black"></div>
          <span className="mx-4 text-black">or</span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        <div className="font-oswald text-[14px]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black text-white border my-1 focus:ring-white focus:ring-2 focus:ring-inset rounded-lg py-4 pl-3 w-full"
              placeholder="Enter Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black text-white border my-1 focus:ring-white focus:ring-2 focus:ring-inset rounded-lg py-4 pl-3 w-full"
              placeholder="Enter Email"
              required
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-black text-white border my-1 focus:ring-white focus:ring-2 focus:ring-inset rounded-lg py-4 pl-3 w-full"
              placeholder="Contents"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-[#FF0000] hover:bg-red-900 text-white p-3 rounded-lg"
              >
                kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kontak;
