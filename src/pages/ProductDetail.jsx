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
    <div className="container px-4 mx-auto mt-20">
      <div className="flex flex-col items-start gap-12 md:flex-row">
        {/* Left Side Navigation */}
        <div
          className={`sticky top-24 w-full md:w-1/4 ${
            isNavOpen ? "block" : "hidden md:block"
          }`}
        >
          <nav className="p-6 bg-white shadow-lg rounded-2xl">
            {products.map((p) => (
              <a
                key={p.id}
                href={`/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 mb-2 last:mb-0
                  ${
                    p.id === product.id
                      ? "text-[#E40128] font-semibold"
                      : "hover:bg-gray-100 text-[#06234B]"
                  }`}
              >
                <span className="font-medium">{p.title}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Button to toggle navigation on mobile */}
        <button
          className="md:hidden p-2 bg-[#E40128] text-white rounded-lg"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Main Content */}
        <div className="w-full p-8 bg-white shadow-lg md:w-3/4 rounded-2xl">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-6 pb-8 border-b border-gray-100 md:flex-row">
            <div className="">
              <img
                src={product.img}
                alt={product.title}
                className="w-24 border-8 rounded-full h-22"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-wrap gap-3">
                {product.detailDescription.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Gradient background effect */}
                    <div className="absolute -inset-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl blur-md opacity-75 transition-all duration-500" />

                    {/* Card content */}
                    <div className="relative px-5 py-3 transition-all duration-300 bg-white rounded-lg shadow-md group-hover:shadow-lg">
                      <span className="font-medium text-[#06234B]">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detail Images Section */}
          <div className="mt-8">
            {product.detailImages && product.detailImages.length > 0 && (
              <div className="space-y-6">
                {/* Main Image Container */}
                <div className="relative aspect-[16/9] group">
                  {/* Gradient Border Effect */}
                  <div className="absolute transition duration-300 bg-gray-200 opacity-25 -inset-1 rounded-2xl blur group-hover:opacity-100"></div>
                  {/* Image Container */}
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
