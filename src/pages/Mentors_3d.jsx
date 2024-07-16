import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/mentor_img1.jpeg";
import img2 from "../assets/mentor_img2.jpeg";
import img3 from "../assets/mentor_img3.jpg";
import img4 from "../assets/mentor_img4.jpg";
import img5 from "../assets/mentor_img5.jpg";
import img6 from "../assets/mentor_img6.jpg";

import { motion } from 'framer-motion';
import { fadeIn } from '../Variants';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const data = [
    {
      Name: "Mrinal Kutteri",
      img: img1,
      rank: "AIR 1",
      info: "Mrinal Kutteri secured AIR 1 in the NEET Exam.",
    },
    {
      Name: "Soyeb Aftab",
      img: img2,
      rank: "AIR 1",
      info: "Soyeb Aftab achieved AIR 1 in the NEET Exam.",
    },
    {
      Name: "Deepak Sahu",
      img: img3,
      rank: "AIR 5",
      info: "Deepak Sahu secured AIR 5 in the NEET Exam.",
    },
    {
      Name: "Raj Gajera",
      img: img5,
      rank: "AIR 33",
      info: "Raj Gajera achieved AIR 33 in the NEET Exam.",
    },
    {
      Name: "Sayak Biswas",
      img: img6,
      rank: "AIR 44",
      info: "Sayak Biswas secured AIR 44 in the NEET Exam.",
    },
    {
      Name: "Satwik Godara",
      img: img4,
      rank: "AIR 7",
      info: "Satwik Godara achieved AIR 7 in the NEET Exam.",
    },
  ];
  

const Mentors_3d = () => {
  return (
    <>
      <div id="ourmentors" className="bg-[#040517] text-blue-50">
        <motion.div className="md:mx-20 mx-6"
              variants={fadeIn("up", 0.02)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              >
          <h1 className="text-4xl font-semibold space-y-20 py-4 text-center">
            Our Mentors
          </h1>
          <p className="text-xl text-center">
            Achieving success has never been easy, but what if we say by
            following the footprints of mentors and breaking the patterns of
            your mistakes with scientific and approved methodologies guided by
            our mentors, you can easily surpass your colleagues!
          </p>
        </motion.div>
        <div className="w-3/4 m-auto bg-[#040517] py-10">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={40}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full custom-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides:true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="slide-custom h-96 text-center bg-[#1e1f32] flex flex-col justify-center rounded-2xl items-center p-4"
          >
            <div className="flex w-full justify-center items-center">
              <img src={item.img} alt={item.Name} className="w-36 h-36 mb-4 rounded-full" />
            </div>
            <h3 className="text-lg font-bold text-white">{item.Name}</h3>
            <p className="text-sm text-gray-300">{item.rank}</p>
            <p className="text-xs text-gray-400 mt-2">{item.info}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </>
  );
};

export default Mentors_3d;
