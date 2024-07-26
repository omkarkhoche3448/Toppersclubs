import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./styles2.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importing All the Images
import img1 from "../assets/mentor_img1.jpeg";
import img2 from "../assets/mentor_img2.jpeg";
import img3 from "../assets/mentor_img3.jpg";
import img4 from "../assets/mentor_img4.jpg";
import img5 from "../assets/mentor_img5.jpg";
import img6 from "../assets/mentor_img6.jpg";

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

const Mentors = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const handlePrevSlide = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  return (
    <div id="ourmentors" className=" text-blue-50">
 {/* <div className='absolute bottom-10 left-20 w-[250px] h-[250px] bg-indigo-700 bg-opacity-50 rounded-full blur-[90px]'></div> */}
      <div className="md:mx-20 mx-6">
        <h1 className="text-4xl font-semibold space-y-20 py-4 text-center">
          Our Mentors
        </h1>
        <p className="text-xl text-center">
          Achieving success has never been easy, but what if we say by following
          the footprints of mentors and breaking the patterns of your mistakes
          with scientific and approved methodologies guided by our mentors, you
          can easily surpass your colleagues!
        </p>
      </div>
      <div className="flex justify-center items-center px-4 md:px-10">
        {/* <div
          className="md:m-2 hidden md:block md:p-5 m-4 p-3 text-3xl md:text-5xl cursor-pointer text-blue-50"
          onClick={handlePrevSlide}
        >
          <FaArrowCircleLeft />
        </div> */}
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper grab-cursor"
        >
          {data.map((d, index) => (
            <SwiperSlide
              className=" bg-[#1e1f32] gap-1 flex flex-col w-[200px] h-[450px] my-3 text-black rounded-xl"
              key={index}
            >
              <div className="rounded-t-xl h-56 w-56 flex justify-center items-center">
                <img
                  className="h-36 w-36 rounded-full object-center"
                  src={d.img}
                  alt={d.Name}
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-4">
                <p className="text-lg font-bold text-white">{d.Name}</p>
                <p className="text-sm text-gray-300">{d.rank}</p>
                <p className="text-medium text-gray-400 mt-2">{d.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div
          className="md:m-2 hidden md:block md:p-5 m-1 p-2 text-3xl md:text-5xl cursor-pointer text-blue-50"
          onClick={handleNextSlide}
        >
          <FaArrowCircleRight />
        </div> */}
      </div>
    </div>
  );
};

export default Mentors;
