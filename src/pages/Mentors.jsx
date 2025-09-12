import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./styles2.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importing All the Images
// import img1 from "../assets/mentor_img1.jpeg";
import img1 from "../assets/mentor_img1.jpg";
import img2 from "../assets/mentor_img2.jpeg";
import img3 from "../assets/mentor_img3.jpg";
// import img4 from "../assets/mentor_img4.jpg";
// import img5 from "../assets/mentor_img5.jpg";
// import img6 from "../assets/mentor_img6.jpg";

const data = [
  {
    Name: "Divyansh Sangwar",
    img: img1,
    rank: "AIR 1",
    info: "Divyansh secured AIR 1 in the NEET Exam.",
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
  // {
  //   Name: "Raj Gajera",
  //   img: img5,
  //   rank: "AIR 33",
  //   info: "Raj Gajera achieved AIR 33 in the NEET Exam.",
  // },
  // {
  //   Name: "Sayak Biswas",
  //   img: img6,
  //   rank: "AIR 44",
  //   info: "Sayak Biswas secured AIR 44 in the NEET Exam.",
  // },
  // {
  //   Name: "Satwik Godara",
  //   img: img4,
  //   rank: "AIR 7",
  //   info: "Satwik Godara achieved AIR 7 in the NEET Exam.",
  // },
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
    <div id="ourmentors" className="text-blue-50">
      <div className="md:mx-20 mx-6">
        <h1 className="text-4xl font-extrabold py-6 text-center tracking-tight">Our Mentors</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8">
          Achieving success has never been easy, but what if we say by following the footprints of mentors and breaking the patterns of your mistakes with scientific and approved methodologies guided by our mentors, you can easily surpass your colleagues!
        </p>
      </div>
      <div className="flex justify-center items-center px-4 md:px-10">
        <div className="w-full">
          {/* Mobile/Tablet Swiper */}
          <div className="block lg:hidden">
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
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper grab-cursor"
            >
              {data.map((d, index) => (
                <SwiperSlide
                  className="bg-[#23243a] flex flex-col w-[90vw] max-w-[340px] h-[480px] my-6 rounded-3xl shadow-xl mx-auto border border-[#2d2e4a]"
                  key={index}
                >
                  <div className="flex justify-center items-center mt-8 mb-4">
                    <img
                      className="h-40 w-40 rounded-full object-cover border-4 border-[#35365a] shadow-lg"
                      src={d.img}
                      alt={d.Name}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-6">
                    <p className="text-2xl font-extrabold text-white text-center mb-1">{d.Name}</p>
                    <p className="text-lg text-blue-300 font-semibold">{d.rank}</p>
                    <p className="text-base text-gray-300 mt-2 text-center">{d.info}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Desktop Static Cards */}
          <div className="hidden lg:flex justify-center gap-12 mt-12">
            {data.map((d, index) => (
              <div
                className="bg-[#23243a] flex flex-col w-[340px] h-[480px] rounded-3xl shadow-2xl border border-[#2d2e4a] hover:scale-105 transition-transform duration-300 mx-2"
                key={index}
              >
                <div className="flex justify-center items-center mt-10 mb-6">
                  <img
                    className="h-40 w-40 rounded-full object-cover border-4 border-[#35365a] shadow-lg"
                    src={d.img}
                    alt={d.Name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 px-8">
                  <p className="text-2xl font-extrabold text-white text-center mb-1">{d.Name}</p>
                  <p className="text-lg text-blue-300 font-semibold">{d.rank}</p>
                  <p className="text-base text-gray-300 mt-2 text-center">{d.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
