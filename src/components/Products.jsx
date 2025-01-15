import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen px-4 mb-24 md:mb-44 md:px-8">
      <div className="flex flex-col items-center justify-center mt-16 space-y-3 md:mt-32 ">
        <h1 className="md:text-3xl text-xl text-center font-bold text-[#E40128]">
          PRINT- UND WERBETECHNIK: KREATIV SEIT 2002
        </h1>
        <p className="md:w-[65%]  font-medium text-center text-[#06234B]">
          „Ihr Partner für innovative Druck- und Werbelösungen.“
        </p>
      </div>
      <div className="w-full mt-16 md:mt-32">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((p) => (
            <Link
              to={p.path}
              key={p.id}
              className="flex flex-col items-center justify-center p-5 transition-transform bg-white shadow-xl rounded-xl bg-opacity-40 hover:scale-105"
            >
              <img
                src={p.img}
                className="object-cover w-28 h-28 md:h-44 md:w-44"
                alt={p.title}
              />
              <p className="mt-5 text-base font-semibold text-center md:text-lg">
                {p.title}
              </p>
              <div className="mt-1 space-y-1 font-medium text-center text-zinc-500">
                {p.description.split(",").map((desc, index) => (
                  <p key={index} className="text-sm md:text-base">
                    {desc.trim()}
                  </p>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
