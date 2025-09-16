import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

const gold = [
  {
    title: "Gold ",
    originalPrice: "11999",
    disc: "50% OFF Limited Time",
    price: "5999 for 3 month",
    seats: "Limited Seats Available",
    link: "https://rzp.io/l/Lme7vAh", // Example link for Gold 1
  },
  // {
  //   title: "Gold ",
  //   disc: "5998 for 3 month",
  //   price: "2999 for 3 Month 50% Off",
  //   seats: "Limited Seats Available",
  //   link: "https://rzp.io/l/j5qrJs6", // Example link for Gold 2
  // },
];

const platinum = [
  {
    title: "Platinum ",
    originalPrice: "19999",
    disc: "MEGA DISCOUNT 50% OFF",
    price: "9999 Till neet 2026",
    seats: "Limited Seats Available",
    link: "https://rzp.io/rzp/DINd1zvp", // Example link for Platinum 1
  },
  // {
  //   title: "Platinum 2",
  //   disc: "11998 for 12 month",
  //   price: "5999 for 12 Months 50% Off",
  //   seats: "Limited Seats Available",
  //   link: "https://rzp.io/l/Lme7vAh", // Example link for Platinum 2
  // },
];


const Batches = () => {
  return (
    <>
    <div id="batches" className="text-blue-50 z-10 py-20 px-4">
      {/* Header Section */}
      <motion.div className="max-w-4xl mx-auto text-center mb-16"
       variants={fadeIn("up", 0.02)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-5xl font-bold mb-6">Choose Your Plan</h1>
        <p className="text-xl text-gray-300 mb-4">
          Flexible and affordable plans designed to accelerate your NEET preparation journey.
        </p>
        <p className="text-lg text-yellow-400 font-semibold">Limited time offers - Don't miss out!</p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Gold Plan */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
              50% OFF
            </div>
            
            <div className="text-center">
              {/* Plan Header */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gold Plan</h3>
              <div className="mb-6">
                <span className="text-lg text-red-500 line-through">₹11,999</span>
                <div className="text-4xl font-bold text-green-600 mt-2">₹5,999</div>
                <p className="text-gray-600 mt-1">for 3 months</p>
                <p className="text-sm text-green-600 font-semibold mt-2">Save ₹6,000!</p>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">3 Month Access</span>
                </div>
              
              </div>
              
              <p className="text-sm text-orange-600 font-semibold mb-6">Limited Seats Available</p>
              
              <a href="https://rzp.io/l/Lme7vAh" target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Platinum Plan */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-xl p-8 relative overflow-hidden border-2 border-purple-500">
            {/* Most Popular Badge */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
            </div>
            
            {/* Discount Badge */}
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
              50% OFF
            </div>
            
            <div className="text-center mt-4">
              {/* Plan Header */}
              <h3 className="text-2xl font-bold mb-2">Platinum Plan</h3>
              <div className="mb-6">
                <span className="text-lg text-red-400 line-through">₹19,999</span>
                <div className="text-4xl font-bold text-purple-400 mt-2">₹9,999</div>
                <p className="text-gray-300 mt-1">till NEET 2026</p>
                <p className="text-sm text-green-400 font-semibold mt-2">Save ₹10,000!</p>
              </div>
              
              {/* Features */}
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">Access till NEET 2026</span>
                </div>
               
              </div>
              
              <p className="text-sm text-orange-400 font-semibold mb-6">Limited Seats Available</p>
              
              <a href="https://rzp.io/rzp/DINd1zvp" target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div className="max-w-4xl mx-auto text-center mt-20"
          variants={fadeIn("up", 0.02)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
      >
        <p className="text-lg text-gray-300 mb-6 italic">
          "Believe in your potential and embrace challenges as opportunities to grow. Your dedication, hard work, and perseverance will pave the way to success. Remember, every small step forward brings you closer to achieving your dreams."
        </p>
        <h2 className="text-2xl font-bold text-yellow-400">Best Of Luck For Your Future!</h2>
      </motion.div>
    </div>
    </>
  );
};

export default Batches;
