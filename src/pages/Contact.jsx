import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { APP_CONSTANTS } from "../constants/appConstants";

const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-[#1E1F32] text-blue-50">
        <footer className="text-white py-8 md:py-10 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* About Company */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparentbg-clip-text text-transparent">
                  ToppersClubs
                </span>
              </h2>
              <p className="text-sm md:text-base">
                We are dedicated to providing the best educational resources and
                support to help students achieve their academic and professional
                goals. Our team is passionate about empowering learners
                worldwide.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 underline underline-offset-8" style={{ textDecorationColor: '#2bc0c5' }}>Links</h2>
              <ul className="space-y-1">
                <li>
                  <a href="#ourmentors" className="hover:text-indigo-500 text-base md:text-lg">
                    Our Mentors
                  </a>
                </li>
                <li>
                  <a href="#batches" className="hover:text-indigo-500 text-base md:text-lg">
                    Batches
                  </a>
                </li>
                <li>
                  <a href="#home" className="hover:text-indigo-500 text-base md:text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-indigo-500 text-base md:text-lg">
                    Features
                  </a>
                </li>
              </ul>
              <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-700">
                <h3 className="text-sm md:text-base font-semibold mb-2">Legal</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="/privacy-policy" className="hover:text-indigo-500 text-xs md:text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-conditions" className="hover:text-indigo-500 text-xs md:text-sm">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/refund-policy" className="hover:text-indigo-500 text-xs md:text-sm">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-1">
              <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 underline underline-offset-8" style={{ textDecorationColor: '#2bc0c5' }}>Contact Info</h2>
              <p className="text-sm md:text-lg break-all">
                {" "}
                <span className="font-semibold">Email:</span>{" "}
                {APP_CONSTANTS.contact.email}
              </p>
              <p className="text-sm md:text-lg">
                {" "}
                <span className="font-semibold">Phone No:</span>{" "}74520 78988
              </p>
              {/* <p className="text-lg">
                {" "}
                <span className="font-semibold">Address:</span> AIIMS Delhi
                Hostel no. 1 , <br /> East New , Delhi - 110029
              </p> */}
            </div>
          </div>
          <div className="text-center mt-6 md:mt-8">
            <p className="text-xs md:text-sm">© 2025 Toppers Clubs. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
