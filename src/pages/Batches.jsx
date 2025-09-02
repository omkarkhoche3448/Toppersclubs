import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

const gold = [
  {
    title: "Gold ",
    disc: "",
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
    disc: "",
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
    <div id="batches" className=" text-blue-50 z-10">
    

    <div className='absolute bottom-15 right-5 w-[250px] h-[350px] bg-gradient-to-tl from-pink-500 to-blue-700 bg-opacity-85 rounded-full md:blur-[70px] blur-[150px]'></div>


      <motion.div className="py-10 px-5 z-20"
       variants={fadeIn("up", 0.02)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-center text-4xl font-semibold mb-3">We Offer</h1>
        <p className="text-center text-xl">
          We provide you very flexible and smooth functioning where you can
          manage and stretch the duration of your plans as per your choice.
        </p>
        <p className="text-center text-xl">Accelerate your prep journey with plans as follows:</p>
        <p className="text-center text-xl ">Believe us, it's already the cheapest.</p>
      </motion.div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-10 mt-10">
        {/* Gold Batches */}
        <div className="flex-1 w-full max-w-md mx-auto mb-10 lg:mb-0 lg:mx-0">
          <h1 className="text-3xl text-center font-bold mb-6 text-yellow-400 drop-shadow">Gold Batches</h1>
          <div className="flex flex-col items-center gap-8">
            {gold.map((g, index) => (
              <div key={index} className="card w-full max-w-xs flex flex-col gap-4 items-center justify-center text-slate-900 bg-[#FFC100] p-8 rounded-2xl shadow-2xl border border-yellow-300">
                <h2 className="text-2xl font-bold mb-1">{g.title}</h2>
                {g.disc && <p className="text-sm font-medium text-gray-700"><s>&#x20B9;{g.disc}</s></p>}
                <p className="text-lg font-semibold">&#x20B9;{g.price}</p>
                <p className="text-base font-medium text-gray-800">{g.seats}</p>
                <a href={g.link} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 rounded-lg font-semibold transition">Join Now</button>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Platinum Batches */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
          <h1 className="text-3xl text-center font-bold mb-6 text-slate-300 drop-shadow">Platinum Batches</h1>
          <div className="flex flex-col items-center gap-8">
            {platinum.map((g, index) => (
              <div key={index} className="card w-full max-w-xs flex flex-col gap-4 items-center justify-center bg-gradient-to-br from-slate-300 to-slate-400 p-8 rounded-2xl shadow-2xl border border-slate-300">
                <h2 className="text-2xl font-bold mb-1 text-gray-800">{g.title}</h2>
                {g.disc && <p className="text-sm font-medium text-gray-600"><s>&#x20B9;{g.disc}</s></p>}
                <p className="text-lg font-semibold text-gray-900">&#x20B9; {g.price}</p>
                <p className="text-base font-medium text-gray-800">{g.seats}</p>
                <a href={g.link} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base py-2 rounded-lg font-semibold transition">Join Now</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    <motion.h1
          variants={fadeIn("up", 0.02)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
     className='md:px-20 px-4 py-5  text-lg text-justify md:text-center '>"Believe in your potential and embrace challenges as opportunities to grow. Your dedication, hard work, and perseverance will pave the way to success. Remember, every small step forward brings you closer to achieving your dreams."</motion.h1>
         <h2 className='px-5 text-xl text-center py-4 font-semibold'>Best Of Luck For Your Future !</h2>
      </div>
    </>
  );
};

export default Batches;
