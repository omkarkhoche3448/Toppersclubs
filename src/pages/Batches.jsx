import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

const gold = [
  {
    title: "Gold 1",
    disc: "2998 for 1 month",
    price: "1499 for 1 Month 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/l/jCBcHTAv", // Example link for Gold 1
  },
  {
    title: "Gold 2",
    disc: "5998 for 3 month",
    price: "2999 for 3 Month 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/l/j5qrJs6", // Example link for Gold 2
  },
];

const platinum = [
  {
    title: "Platinum 1",
    disc: "7998 for 6 month",
    price: "3999 for 6 Month 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/l/KOWqArvK", // Example link for Platinum 1
  },
  {
    title: "Platinum 2",
    disc: "11998 for 12 month",
    price: "5999 for 12 Months 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/l/Lme7vAh", // Example link for Platinum 2
  },
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
      <div>
        <div className="gold">
          <h1 className="text-2xl text-center">Gold Batches</h1>
          <div className="flex flex-wrap items-center justify-center">
            {gold.map((g, index) => (
              <div key={index} className="card flex flex-col gap-3 items-center justify-center text-slate-900 bg-[#FFC100] mb-4 p-10 m-5 rounded-lg">
                <h2 className="text-2xl font-semibold">{g.title}</h2>
                <p className="text-sm font-medium"> <s>&#x20B9;{g.disc}  </s> </p>
                <p className="text-base">&#x20B9;{g.price}</p>
                <p>({g.seats})</p>
                <button className="bg-indigo-500 text-white text-base py-1 rounded-lg px-2"><a href={g.link}>Join Now</a></button>
              </div>
            ))}
          </div>
        </div>
        <div className="Platinum">
        <h1 className="text-2xl text-center">Platinum Batches</h1>
          <div className="flex flex-wrap items-center justify-center">
            {platinum.map((g, index) => (
              <div key={index} className="card flex flex-col items-center gap-3 justify-center bg-slate-400 mb-4 p-10 m-5 rounded-lg">
                <h2 className="text-2xl font-semibold">{g.title}</h2>
                <p className="text-sm"> <s>&#x20B9;{g.disc} </s> </p>
                <p className="text-base font-medium">&#x20B9; {g.price}</p>
                <p>({g.seats})</p>
                <button className="bg-indigo-500 text-base py-1 px-2 rounded-lg"><a href={g.link}>Join Now</a></button>
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
