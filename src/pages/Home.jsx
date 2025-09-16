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
      className="min-h-screen bg-[#040517] py-16 md:py-24 flex flex-col items-center justify-center px-4"
    >
      {/* Main Heading with proper spacing */}
      <div className="text-center max-w-6xl mx-auto mb-8 md:mb-12">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white mb-6 md:mb-8 drop-shadow-2xl">
          Kickstart Your <span className="text-yellow-400">NEET Success</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-300 block mt-4 mb-4">
            with
          </span>
          <span className="text-yellow-400">Toppers Clubs</span>
          <br />
          <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl font-bold block mt-6">
            Your Path to the Top 1%!
          </span>
        </h1>
      </div>

      {/* Description with improved spacing */}
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
          Unlock Your True Potential with Toppers Clubs' Comprehensive Mentorship Program
          <br className="hidden md:block" />
          <span className="block mt-2 md:mt-4">
            Expert Guidance and Support to Propel You to Excellence and Secure Your
            Membership in the Elite Top 1%!
          </span>
        </p>
      </div>

      {/* Call to Action Button with proper spacing */}
      <div className="text-center">
        <button className="group relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl lg:text-2xl font-bold rounded-full text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
          <span className="relative z-10">
            <a href="#batches">Start Your Journey Now</a>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Additional spacing at bottom */}
      <div className="mt-16 md:mt-20"></div>
    </motion.div>
  );
};

export default Home;
