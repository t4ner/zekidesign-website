import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80">
      <div className="w-12 h-12 border-4 border-[#E40128] border-t-transparent rounded-full animate-spin-slow"></div>
    </div>
  );
};

export default LoadingSpinner;
