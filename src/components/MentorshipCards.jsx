import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.png";

const mentorshipCards = [
  {
    img: a1,
  },
  {
    img: a2,
  },
  {
    img: a3,
  },
];

const MentorshipCards = () => (
  <section className="w-full py-16 px-4 md:px-10 ">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4">
        Mentorship <span className="text-yellow-400">Program</span>
      </h2>
      <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
        Learn from NEET toppers with proven track records and personalized guidance
      </p>
      
      {/* Mobile Slider */}
      <div className="w-full max-w-6xl mx-auto block lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mentorshipSwiper !pb-12 bg-none"
        >
          {mentorshipCards.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <div className="rounded-2xl overflow-hidden mx-2">
                <div className="w-full aspect-[16/10] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={`Mentorship Program ${idx + 1}`}
                    className="object-contain w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Desktop Static Images */}
      <div className="hidden lg:flex justify-center gap-8 mt-8">
        {mentorshipCards.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#1e1f36] to-[#252641] rounded-2xl shadow-2xl border border-[#3a3b5c] overflow-hidden hover:scale-105 hover:shadow-yellow-400/20 hover:shadow-2xl transition-all duration-300 group w-full max-w-sm"
          >
            <div className="w-full aspect-[16/10] flex items-center justify-center p-4">
              <img
                src={item.img}
                alt={`Mentorship Program ${idx + 1}`}
                className="object-contain w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MentorshipCards;
