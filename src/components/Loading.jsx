import React from "react";
import logo from "/logo/logo.webp";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="ZekiMedia Logo"
          className="w-32 md:w-48 animate-pulse"
        />
        <div className="w-24 h-2 mt-4 overflow-hidden bg-gray-200 rounded-full">
          <div className="h-full bg-[#E40128] animate-progressBar" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
