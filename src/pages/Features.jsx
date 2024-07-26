import React from 'react'
import MultiCardCarousel from '../components/MultiCardCarousel';
import ResponsiveCardsSlider from '../components/ResponsiveCardsSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

const Features = () => {
  return (
    <div id="features" className="min-h-screen py-3  flex flex-col justify-start ">
       <div className='absolute md:bottom-15 bottom-10 right-10 md:w-[250px] md:h-[350px] w-[100px] h-[50px] bg-gradient-to-tl from-pink-500 to-blue-700 bg-opacity-85 rounded-full md:blur-[70px] blur-[150px] bg-transparent'></div>
      {/* <MultiCardCarousel></MultiCardCarousel> */}
      <motion.div className='md:px-20 flex flex-col items-center justify-center py-5 px-6'
      variants={fadeIn("up", 0.01)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}>
      <h1 className=' text-blue-50 text-4xl text-center font-semibold py-5 my-3'>Explore <span className='bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparentbg-clip-text text-transparent'>Toppers Clubs'</span> Key Offerings</h1>
      <p className='text-blue-50 w-3/4 text-center text-lg'>At Toppers Clubs, our mentors diligently track your progress throughout the week. Engage in our weekly Mega Discussions where experts tailor strategies to your unique needs, ensuring every step aligns with your goals and aspirations. Empower your journey with personalized guidance and strategic planning at every turn.</p>
      </motion.div>
  
      <ResponsiveCardsSlider></ResponsiveCardsSlider>
    </div>
  )
}

export default Features