import React from "react";

const PageContainer = ({ title, subtitle, children }) => {
  return (
    <div className="relative w-full flex flex-col -mt-[300px] md:-mt-[450px] items-center">
      <div className="w-full px-4 mx-auto max-w-7xl md:px-8">
        <div className="p-8 shadow-xl bg-white/90 rounded-xl md:p-12">
          <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
            {title}
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#E40128]">
                {subtitle}
              </h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
