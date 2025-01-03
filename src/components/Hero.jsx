import React, { memo } from "react";

const Hero = memo(({ title, subtitle, description }) => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="flex items-center justify-center bg-cover bg-center h-[80%] w-full object-cover clip"
        style={{ backgroundImage: "url('/banner-bg/black_back.png')" }}
      >
        <div className="px-4 space-y-4 text-center text-white md:px-8">
          <div className="uppercase bg-[#E40128] bg-opacity-70 inline-block py-1 px-2 tracking-widest rounded-sm animate-fade-in">
            <p className="text-sm text-red-300 md:text-base">{subtitle}</p>
          </div>
          <h2
            className="text-3xl md:text-5xl lg:text-[67px] font-bold animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            {title}
          </h2>
          <p
            className="max-w-3xl mx-auto text-base md:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
