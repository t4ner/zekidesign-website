import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col -mt-[300px] md:-mt-[450px] items-center px-4 md:px-8">
      <div className="w-full mt-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <Link
              to={p.path}
              key={p.id}
              className="flex flex-col items-center justify-center p-5 transition-transform bg-white shadow-xl rounded-xl bg-opacity-40 hover:scale-105"
            >
              <img
                src={p.img}
                className="object-cover w-36 h-36 md:h-52 md:w-52"
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

        <div className="flex flex-col justify-around w-full gap-10 mx-auto mt-20 md:flex-row md:gap-20 md:mt-52">
          <div className="flex flex-col items-center text-center">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/sktcjwhv.json"
                trigger="hover"
                stroke="40"
                colors="primary:#000000,secondary:#E40128"
                style={{ width: "150px", height: "150px" }}
              ></lord-icon>
            </div>
            <h3 className="text-[#E40128] text-lg font-medium">
              Konstante Qualität
            </h3>
            <p className="text-sm font-medium text-gray-500 md:text-base">
              Dank unabhängiger Produktion
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/gdbwtqvx.json"
                trigger="hover"
                stroke="40"
                colors="primary:#000000,secondary:#E40128"
                style={{ width: "150px", height: "150px" }}
              ></lord-icon>
            </div>
            <h3 className="text-[#E40128] text-lg font-medium">
              Vielfältiges Angebot
            </h3>
            <p className="text-sm font-medium text-gray-500 md:text-base">
              Druckerzeugnisse aller Art aus einer Hand
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/zczmziog.json"
                trigger="hover"
                stroke="40"
                colors="primary:#000000,secondary:#E40128"
                style={{ width: "150px", height: "150px" }}
              ></lord-icon>
            </div>
            <h3 className="text-[#E40128] text-lg font-medium">
              Hohe Kompetenz
            </h3>
            <p className="text-sm font-medium text-gray-500 md:text-base">
              Seit 22 Jahren international tätig
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
