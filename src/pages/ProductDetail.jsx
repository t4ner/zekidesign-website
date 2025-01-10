import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === productId
  );
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container px-4 mx-auto mt-20">
      <div className="flex items-start gap-12">
        {/* Left Side Navigation */}
        <div className="sticky w-1/4 top-24">
          <nav className="p-6 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
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

        {/* Main Content */}
        <div className="w-3/4 p-8 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          {/* Header Section */}
          <div className="flex items-center gap-6 pb-8 border-b border-gray-100">
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
                    <div className="relative px-5 py-3 bg-white rounded-lg shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.15)]">
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
                      className="object-contain w-full h-full"
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
