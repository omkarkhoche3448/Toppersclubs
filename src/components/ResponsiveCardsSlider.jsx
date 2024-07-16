import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Importing All the Images

import Slider_1 from "../assets/Slider_1.jpg";
import Slider_2 from "../assets/Slider_2.jpg";
import Slider_3 from "../assets/Slider_3.jpg";
import Slider_4 from "../assets/Slider_4.jpg";

const ResponsiveCardsSlider = () => {
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

  const Swiperlist = [
    {
      slide_img: Slider_1,
      heading: "Personal Mentorship",
      Slide_points: [
        "Common Whatsapp Group",
        "Telegram Group for Doubt Discussions",
        "Live Sessions Via Zoom 1:1 Once a week",
      ],
    },
    {
      slide_img: Slider_2,
      heading: "Live Sessions and calls",
      Slide_points: [
        "On Call Availability",
        "Once a week mega discussion & Planning with all mentees, mentors.",
        "Discuss with Career Toppers",
      ],
    },
    {
      slide_img: Slider_3,
      heading: "Smooth functioning as well as Affordable",
      Slide_points: [
        "Option to extend subscription duration based on budget.",
        "Assured to be the most affordable option available.",
        "Flexibility in subscription terms to suit your needs.",
      ],
    },
    {
      slide_img: Slider_4,
      heading: "Track Progress",
      Slide_points: [
        "Personalized progress tracking to monitor your development.",
        "Dedicated mentorship for guidance and support.",
        "Regular feedback sessions to optimize your learning journey.",
      ],
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center px-4 md:px-10"
      >

        <div
          className="md:m-2 hidden md:block md:p-5 m-4 p-3 text-3xl md:text-5xl cursor-pointer text-blue-50"
          onClick={handlePrevSlide}
        >
          <FaArrowCircleLeft />
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
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
            768: { slidesPerView: 2 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper grab-cursor"
        >
          {Swiperlist.map((slide, index) => (
            <SwiperSlide key={index} className="rounded-lg p-6 h-[450px] flex justify-center items-center flex-col">
              <img
                // className=" w-[450px] h-44 object-contain p-5 rounded-md"
                className="p-5"

                src={slide.slide_img}
                alt={`Slide ${index + 1}`}
              />
              <h2 className="font-bold py-3">{slide.heading}</h2>
              <ul className="list-disc px-5 py-5 md:px-4 flex flex-col items-start justify-start text-start">
                {slide.Slide_points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="md:m-2 hidden md:block md:p-5 m-1 p-2 text-3xl md:text-5xl cursor-pointer text-blue-50"
          onClick={handleNextSlide}
        >
          <FaArrowCircleRight />
        </div>
      </div>
    </>
  );
};

export default ResponsiveCardsSlider;
