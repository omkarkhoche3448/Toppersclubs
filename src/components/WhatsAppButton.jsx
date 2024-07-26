import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative  flex flex-col items-center">
      {hover && (
        <div
  className="absolute bottom-full mb-2 px-6 py-2 text-white text-sm"
  style={{
    display: 'inline-block',  // Ensures the div only takes up the necessary width
    maxWidth: '100%',  // Limits the div to the width of its container
    clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 80%, 95% 85%, 85% 85%, 85% 100%, 70% 85%, 5% 85%, 0% 80%, 0% 5%)',
    // backgroundColor: '#1E1F32',
    whiteSpace: 'nowrap',  // Ensures the text stays on one line
    overflow: 'hidden'  // Hides any overflow beyond the clipped area
  }}
>
  {/* You can ask your doubts here */}
</div>


      )}
      <a
        href="https://wa.me/918434124950?text=Hello How can I help you?"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-indigo-700 text-white rounded-full shadow-lg hover:bg-green-600"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <IoLogoWhatsapp size={24} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
