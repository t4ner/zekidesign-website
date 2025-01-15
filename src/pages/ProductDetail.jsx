import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === productId
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container px-4 mx-auto mt-8 sm:mt-12 md:mt-20">
      <div className="flex flex-col items-start gap-6 md:gap-12 md:flex-row">
        {/* Left Side Navigation */}
        <div
          className={`w-full md:w-1/4 ${
            isNavOpen
              ? "fixed inset-0 z-50 bg-white overflow-y-auto md:static md:block"
              : "hidden md:block"
          }`}
        >
          <nav className="p-4 bg-white shadow-lg  md:p-6 rounded-2xl">
            {/* Close button for mobile */}
            <button
              className="mb-4 p-2 text-[#E40128] md:hidden w-full text-left"
              onClick={() => setIsNavOpen(false)}
            >
              ← Close Menu
            </button>
            {products.map((p) => (
              <a
                key={p.id}
                href={`/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center gap-3 p-2 sm:p-3 rounded-xl transition-all duration-300 mb-2 last:mb-0
                  ${
                    p.id === product.id
                      ? "text-[#E40128] font-semibold"
                      : "hover:bg-gray-100 text-[#06234B]"
                  }`}
                onClick={() => setIsNavOpen(false)}
              >
                <span className="text-sm font-medium sm:text-base">
                  {p.title}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Button to toggle navigation on mobile */}
        <button
          className="fixed bottom-4 right-4 z-10 md:hidden px-4 py-2 bg-[#E40128] text-white rounded-lg shadow-lg"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Main Content */}
        <div className="w-full p-4 bg-white shadow-lg sm:p-6 md:p-8 md:w-3/4 rounded-2xl">
          {/* Header Section */}
          <div className="flex flex-col gap-4 pb-6 border-b border-gray-100 sm:gap-6 sm:pb-8">
            {/* Title and Logo Section */}
            <div className="flex flex-col items-center gap-4 md:items-start md:flex-row md:gap-6">
              <div className="shrink-0">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-cover w-20 rounded-full sm:w-24 border-6 sm:border-8 aspect-square"
                />
              </div>
              <div className="w-full">
                <h1 className="text-xl font-semibold text-center text-[#06234B] sm:text-2xl md:text-left mb-4">
                  {product.title}
                </h1>
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-3">
                  {product.detailDescription.map((item, index) => (
                    <div key={index} className="relative w-full mb-2 md:w-auto group md:mb-0">
                      <div className="absolute -inset-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl blur-md opacity-75 transition-all duration-500" />
                      <div className="relative px-3 py-2 transition-all duration-300 bg-white rounded-lg shadow-md sm:px-5 sm:py-3 group-hover:shadow-lg">
                        <span className="font-medium text-[#06234B] text-sm sm:text-base">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detail Images Section */}
          <div className="mt-6 sm:mt-8">
            {product.detailImages && product.detailImages.length > 0 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="relative aspect-[16/9] group">
                  <div className="absolute transition duration-300 bg-gray-200 opacity-25 -inset-1 rounded-2xl blur group-hover:opacity-100"></div>
                  <div className="relative h-full overflow-hidden bg-gray-100 rounded-xl">
                    <img
                      src={product.detailImages[0] || product.img}
                      alt={`${product.title} - Image 1`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
