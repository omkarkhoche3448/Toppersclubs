import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

const Contact = () => {
  return (
    <>
    <div id='contact' className="bg-[#040517] text-blue-50 md:px-20 px-3">

    <motion.h1
          variants={fadeIn("up", 0.02)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
     className='md:px-20 px-4 py-5  text-lg text-justify md:text-center '>"Believe in your potential and embrace challenges as opportunities to grow. Your dedication, hard work, and perseverance will pave the way to success. Remember, every small step forward brings you closer to achieving your dreams."</motion.h1>
    <h2 className='px-5 text-xl font-semibold'>Best Of Luck For Your Future !</h2>
    <footer className=" text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Company */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About <span className='bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparentbg-clip-text text-transparent'>ToppersClubs</span></h2>
          <p className='text-base text-base'>
            We are dedicated to providing the best educational resources and
            support to help students achieve their academic and professional
            goals. Our team is passionate about empowering learners worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Links</h2>
          <ul className=' space-y-1'>
            <li><a href="#ourmentors" className="hover:underline text-lg">Our Mentors</a></li>
            <li><a href="#batches" className="hover:underline text-lg">Batches</a></li>
            <li><a href="#home" className="hover:underline text-lg">Home</a></li>
            <li><a href="#features" className="hover:underline text-lg">Features</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col gap-1'>
          <h2 className="text-xl font-bold mb-4">Contact Info</h2>
          <p className='text-lg' > <span className='font-semibold'>Email:</span> ayush.k@toppersclubs.com</p>
          <p className='text-lg'> <span className='font-semibold'>Phone No:</span> +91 8434124950</p>
          <p className='text-lg'> <span className='font-semibold'>Address:</span>  AIIMS Delhi Hostel no. 1 , <br /> East New , Delhi - 110029</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Toppers Clubs. All rights reserved.</p>
      </div>
    </footer>
    
    </div>
    </>
  )
}

export default Contact