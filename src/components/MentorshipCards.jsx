import React from "react";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";

const mentorshipCards = [
  {
    img: a1,
  },
  {
    img: a2,
  },
];

const MentorshipCards = () => (
  <section className="w-full py-20 px-4 md:px-10 ">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Mentorship</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Learn directly from NEET toppers who achieved AIR 1 and AIR 5. Get personalized guidance, 
          proven strategies, and 1:1 mentorship to ace your NEET journey.
        </p>
      </div>

      {/* Images Grid - Mobile Stack, Desktop Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        {mentorshipCards.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={`Mentorship Program ${idx + 1}`}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Program {idx + 1}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-black">1:1</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Personal Mentorship</h4>
          <p className="text-gray-300 text-sm">Direct guidance from NEET toppers</p>
        </div>
        
        <div className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-black">24/7</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Support Available</h4>
          <p className="text-gray-300 text-sm">Round the clock assistance</p>
        </div>
        
        <div className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-black">✓</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Proven Results</h4>
          <p className="text-gray-300 text-sm">Success stories of our students</p>
        </div>
      </div>
    </div>
  </section>
);

export default MentorshipCards;
