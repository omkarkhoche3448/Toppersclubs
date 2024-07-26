import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home2 from "./pages/Home2";
import Features from "./pages/Features";
import Batches from "./pages/Batches";
import Contact from "./pages/Contact";
import Mentors_3d from "./pages/Mentors_3d";
import WhatsAppButton from "./components/WhatsAppButton";
import { MdClose } from "react-icons/md";
import Mentors from "./pages/Mentors";


import img2 from "./assets/mentor_img2.jpeg";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-auto">
      <div className="bg-white md:w-2/5 w-5/6 rounded-lg p-8">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <MdClose className="bg-[#040517] text-blue-50" size={24} />
          </button>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center gap-2">
          {/* <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p>Modal content goes here...</p> */}
          <img className="w-60 rounded-lg" src={img2} alt="" />
          <h2 className="md:text-3xl text-2xl font-medium text-center">Get Mentorship From <br /> <span className="font-semibold">Soyeb Aftab</span> <br /> AIR-1</h2>
          <h3 className="text-lg">On TopperClubs</h3>
          <button onClick={onClose} className="text-xl text-blue-50 px-2 py-1 rounded-lg bg-indigo-500"><a href="#batches">Limited Seats Join Now !</a></button>

        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling of background content
    }, 5000); // Show modal after 5 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };
  }, []); // Empty dependency array ensures effect runs only once

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ''; // Restore scrolling when modal is closed
  };

  return (
    <>
      <div className="bg-[#040517]">
        <Navbar />
        <Home2 />
        <Features />
        <Mentors/>
        {/* <Mentors_3d /> */}
        <Batches />
        <Contact />

      </div>

      {showModal && <Modal onClose={closeModal} />}

      <div className="fixed z-10 bottom-5 right-6">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default App;
