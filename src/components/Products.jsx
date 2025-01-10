import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mt-32 space-y-3 w-[70%]">
        <h1 className="text-3xl font-bold text-[#E40128]">
          PRINT- UND WERBETECHNIK: KREATIV SEIT 2002
        </h1>
        <p className="w-[65%]  font-medium text-center text-[#06234B]">
          „Ihr Partner für innovative Druck- und Werbelösungen.“
        </p>
      </div>
      <div className="w-full mt-32">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((p) => (
            <Link
              to={p.path}
              key={p.id}
              className="flex flex-col items-center justify-center p-5 transition-transform bg-white shadow-xl rounded-xl bg-opacity-40 hover:scale-105"
            >
              <img
                src={p.img}
                className="object-cover w-36 h-36 md:h-44 md:w-44"
                alt={p.title}
              />
              <p className="mt-5 text-lg font-semibold text-center">
                {p.title}
              </p>
              <div className="mt-1 space-y-1 font-medium text-center text-gray-500">
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
