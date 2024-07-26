import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Home2 = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.02)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      id="home"
      className="min-h-screen py-8 flex flex-col items-center justify-center"
    >
               <div className='absolute bottom-10 left-20 w-[250px] h-[250px] bg-indigo-700 bg-opacity-50 rounded-full blur-[90px] z-0'></div>
              

      <div className="leading-tight my-10">
        <h1 className="md:text-6xl text-3xl m-5 pt-10 drop-shadow-2xl text-white mx-auto text-center font-bold">
          Ace NEET with Toppers Clubs
        </h1>
        <h1 className="md:text-6xl text-3xl drop-shadow-2xl mx-auto font-semibold text-center  bg-gradient-to-r from-rose-600 to-blue-700 bg-clip-text text-transparent ">
          Top 1% awaits!
        </h1>
      </div>

      <p className="text-blue-50 md:w-2/5 w-4/5 my-2 font-medium text-center px-2 text-xl">
        Prepare for NEET with proven champions. If unsure of your path, seek
        guidance from those who've succeeded before.
        {/* Unlock Your True Potential with Toppers Clubs' Comprehensive Mentorship
        Program{" "}
        <div className="hidden md:block">
          <br />
        </div>{" "}
        Expert Guidance and Support to Propel You to Excellence and Secure Your
        Membership in the Elite Top 1%! */}
      </p>
      <div className="z-10">
      <a  href="#ourmentors">
        <button className="border-indigo-700 border-2 rounded-full mx-2 text-blue-50 font-semibold px-4 py-3 text-lg ">
        Meet the Mentors
        </button>
        </a>
        <a href="#batches">
        <button className="bg-gradient-to-r from-pink-600 to-indigo-700 mx-2 my-10 px-5 py-3 text-lg font-bold rounded-full text-blue-50">
           Start Now
        </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Home2;
