import React from "react";
import { refundPolicyData } from "../data/refundPolicyData";
import Contact from "./Contact";

const RefundPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-[#040517] pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
          {refundPolicyData.title}
        </h1>

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-gray-300 leading-relaxed">
            {refundPolicyData.introduction}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {refundPolicyData.sections.map((section, index) => (
            <div key={section.id} className="border-l-2 border-yellow-400/20 pl-4 md:pl-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                {index + 1}. {section.title}
              </h2>

              {section.content && (
                <p className="text-gray-300 mb-4">
                  {section.content}
                </p>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-3 md:space-y-4 ml-2 md:ml-4">
                  {section.subsections.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <p className="text-yellow-400 font-medium mb-1">{sub.title}</p>
                      <p className="text-gray-300 text-sm">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Points */}
              {section.points && (
                <ul className="space-y-2">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-300">
                      • {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Steps */}
              {section.steps && (
                <ol className="space-y-2">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-gray-300">
                      {stepIndex + 1}. {step}
                    </li>
                  ))}
                </ol>
              )}

              {/* Contact Info */}
              {section.contactInfo && (
                <div className="mt-4">
                  <p className="text-gray-300">
                    📧 Email: <a
                      href={`mailto:${section.contactInfo.email}`}
                      className="text-yellow-400 hover:underline"
                    >
                      {section.contactInfo.email}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-yellow-400 text-black px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-sm md:text-base"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
    <Contact />
    </>
  );
};

export default RefundPolicy;