import React, { useState, useEffect } from "react";
import { SiGooglemessages } from "react-icons/si";
import logo from "../assets/logo_TC.jpg";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";



const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  


  // const ChangeBg = () =>{
  //   console.log("Scrolling Value ");
  //   console.log(window.scrollY);
  // }

  // window.addEventListener("scroll", ChangeBg);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close the menu
  };

  const detectSectionInView = () => {
    const sections = document.querySelectorAll("section, div[id]");
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", detectSectionInView);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", detectSectionInView);
    };
  }, []);

  const links = ["home", "features", "ourmentors", "batches", "contact"];

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        x: { stiffness: 1000, velocity: -100 }
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 1,
        x: { stiffness: 1000, velocity: -100 }
      }
    },
  };
  
  

  return (
    <div className="flex md:flex-row flex-col bg-[#040517] justify-between items-center px-4 md:px-20 py-4 fixed w-full z-10">
      <div className="flex items-center w-full md:w-auto justify-between">
        <div className="flex items-center">
          <a href="home" className="flex gap-1 items-center justify-center">
          <img src={logo} className="md:w-16 w-8 rounded-xl" alt="Logo" />
          <h1 className="font-bold text-2xl text-blue-50">
            ToppersClubs
          </h1>
          </a>
        </div>
        <div className="md:hidden block items-center p-1">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="text-blue-50 text-[1.86rem]  border-2 border-indigo-700" />
            ) : (
              <IoMdMenu className="text-blue-50 text-3xl border-2 border-indigo-700" />
            )}
          </button>
        </div>
      </div>
      <div>
        {isSmallScreen ? (
          <motion.nav
            animate={isMenuOpen ? "open" : "closed"}
            variants={variants}
            className={`shadow md:flex w-full ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex md:flex-row items-start flex-col p-4">
              {links.map((link) => (
                <li
                  key={link}
                  onClick={() => handleScroll(link)}
                  className={`text-white capitalize text-lg font-medium rounded-md ${
                    link === "contact" ? "px-6 md:px-20" : "mx-6"
                  } py-1.5 cursor-pointer transition ease-linear duration-500 ${
                    activeSection === link &&
                    link !== "contact"
                      ? "decoration-2 shadow-0_35px_105px_rgba(0,191,255,0.25) transition ease-linear duration-100 underline-offset-4 decoration-solid decoration-sky-500 underline"
                      : "text-white"
                  } hover:text-gray-400 flex items-center`}
                >
                  <div className="flex items-center">
                    {link === "ourmentors" ? "Our Mentors" : link}
                    {link === "contact" }
                  </div>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : (
          <nav className="shadow md:flex w-full">
            <ul className="flex md:flex-row items-start flex-col p-4">
              {links.map((link) => (
                <li
                  key={link}
                  onClick={() => handleScroll(link)}
                  className={`text-white capitalize text-lg font-medium tracking-wider rounded-full ${
                    link === "contact" ? "px-6 border-2 border-indigo-700 rounded-full mx-10  md:px-5" : "mx-6"
                  } py-1.5 cursor-pointer transition ease-linear duration-200 ${
                    activeSection === link &&
                    link !== "contact"
                      ? "decoration-2 shadow-0_35px_105px_rgba(0,191,255,0.25) transition ease-linear duration-100 underline-offset-4 decoration-solid decoration-sky-500 underline"
                      : "text-white"
                  } hover:text-pink-500 flex items-center   `}
                >
                  <div className="flex items-center">
                    {link === "ourmentors" ? "Our Mentors" : link}
                    <div className="bg-white text-slate-900">
                    {link === "contact" 
                      // <SiGooglemessages className="ml-2" />
                    }

                    </div>
                    {/* {link === "contact" 
           
                    } */}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
