import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import products from "../data";

const ProductCard = memo(
  ({ product }) => (
    <Link
      to={product.path}
      className="flex flex-col items-center justify-center p-5 transition-transform bg-white shadow-xl rounded-xl bg-opacity-40 hover:scale-105"
      role="article"
      aria-labelledby={`product-title-${product.id}`}
    >
      <img
        src={product.img}
        className="object-cover w-28 h-28 md:h-44 md:w-44"
        alt={`${product.title} ürün görseli`}
        loading="lazy"
        decoding="async"
        width="176"
        height="176"
      />
      <h2
        id={`product-title-${product.id}`}
        className="mt-5 text-base font-semibold text-center md:text-lg"
      >
        {product.title}
      </h2>
      <div
        className="mt-1 space-y-1 font-medium text-center text-zinc-500"
        role="contentinfo"
      >
        {product.description.split(",").map((desc, index) => (
          <p key={index} className="text-sm md:text-base">
            {desc.trim()}
          </p>
        ))}
      </div>
    </Link>
  ),
  (prevProps, nextProps) => prevProps.product.id === nextProps.product.id
);

const Products = () => {
  const productsList = useMemo(
    () =>
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      )),
    []
  );

  return (
    <main
      className="relative flex flex-col items-center w-full min-h-screen px-4 mb-24 md:mb-44 md:px-8"
      role="main"
    >
      <div className="flex flex-col items-center justify-center mt-16 space-y-3 md:mt-32">
        <h1
          id="main-heading"
          className="md:text-3xl text-xl text-center font-bold text-[#E40128]"
        >
          PRINT- UND WERBETECHNIK: KREATIV SEIT 2002
        </h1>
        <p className="md:w-[65%] font-medium text-center text-[#06234B]">
          „Ihr Partner für innovative Druck- und Werbelösungen."
        </p>
      </div>
      <div className="w-full mt-16 md:mt-32">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {productsList}
        </div>
      </div>
    </main>
  );
};

export default memo(Products);
