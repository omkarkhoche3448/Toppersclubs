import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

const gold = [
  {
    title: "Gold 1",
    disc: "2998 for 1 month",
    price: "1499 for 1 Month 50% Off",
    seats: "Limited Seats Available",
    link: "https://razorpay.com/payment-link/plink_OYzP4MrR1VSF4f", // Example link for Gold 1
  },
  {
    title: "Gold 2",
    disc: "5998 for 3 month",
    price: "2999 for 1 Month 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/i/qci9emj71", // Example link for Gold 2
  },
];

const platinum = [
  {
    title: "Platinum 1",
    disc: "7998 for 6 month",
    price: "3999 for 6 Month 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/i/qci9emj71", // Example link for Platinum 1
  },
  {
    title: "Platinum 2",
    disc: "11998 for 12 month",
    price: "5999 for 12 Months 50% Off",
    seats: "Limited Seats Available",
    link: "https://rzp.io/i/qci9emj71", // Example link for Platinum 2
  },
];


const Batches = () => {
  return (
    <>
    <div id="batches" className="bg-[#040517] text-blue-50">


      <motion.div className="py-10 px-5"
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
                <h2 className="text-2xl">{g.title}</h2>
                <p className="text-sm"> <s>{g.disc}  </s> </p>
                <p className="text-base">{g.price}</p>
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
                <h2 className="text-2xl">{g.title}</h2>
                <p className="text-sm"> <s>{g.disc} </s> </p>
                <p className="text-base">{g.price}</p>
                <p>({g.seats})</p>
                <button className="bg-indigo-500 text-base py-1 px-2 rounded-lg"><a href={g.link}>Join Now</a></button>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default Batches;
