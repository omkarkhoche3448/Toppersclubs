import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Home = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.02)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      id="home"
      className="min-h-screen bg-[#040517] py-8 flex flex-col items-center justify-center"
    >
      <h1 className="md:text-6xl text-3xl m-5 pb-6 pt-28 drop-shadow-2xl leading-tight text-white mx-auto text-center font-semibold">
      {/* Achieve Excellence */}
      Kickstart Your NEET Success  <br /> <span className="md:text-4xl text-xl" >with </span> <br /> Toppers Clubs <br />
        <span className="bg-gradient-to-r from-rose-600 to-indigo-700 bg-clip-text text-transparent">
          {" "}
          Your Path to the Top 1%!{" "}
        </span>{" "}
      </h1>
      <p className="text-blue-50 text-center font-bold px-2 text-lg">
        Unlock Your True Potential with Toppers Clubs' Comprehensive Mentorship
        Program{" "}
        <div className="hidden md:block">
          <br />
        </div>{" "}
        Expert Guidance and Support to Propel You to Excellence and Secure Your
        Membership in the Elite Top 1%!
      </p>
      <button className="bg-gradient-to-r from-pink-600 to-indigo-700 my-10 px-5 py-3 text-xl font-bold rounded-full text-blue-50">
        <a href="#batches"> Starts Your Jouney Now</a>
      </button>
    </motion.div>
  );
};

export default Home;
