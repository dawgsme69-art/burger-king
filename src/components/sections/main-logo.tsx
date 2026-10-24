"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=1234&aff_id=44723&source=BrandMel" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/c9olsPO.png" 
        alt="mcdo Logo" 
        className="h-5 sm:h-20 w-20 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
