import React, { useState, useMemo, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import products from "../data";
import { IoIosArrowBack } from "react-icons/io";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useMemo(
    () =>
      products.find(
        (p) => p.title.toLowerCase().replace(/\s+/g, "-") === productId
      ),
    [productId]
  );

  useEffect(() => {
    if (product?.detailImages) {
      product.detailImages.forEach((img) => {
        const image = new Image();
        image.src = img;
      });
    }
  }, [product]);

  const imageRef = useRef(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [selectedImage, setSelectedImage] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main
      className="container px-4 mx-auto mt-8 mb-20 md:mb-40 sm:mt-12 md:mt-20"
      role="main"
    >
      <div className="flex flex-col items-start gap-6 md:gap-12 md:flex-row">
        <div
          className={`fixed inset-y-0 left-0 w-full md:w-1/4 md:static md:block transform transition-transform duration-300 ease-in-out ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-50 bg-white`}
        >
          <nav
            className="h-full p-4 bg-white shadow-lg md:h-auto md:p-6 rounded-2xl"
            aria-label="Ürün navigasyonu"
          >
            <button
              className="flex text-sm md:text-base font-medium items-center w-full p-2 mb-4 text-[#E40128] md:hidden"
              onClick={() => setIsNavOpen(false)}
              aria-label="Navigasyonu kapat"
            >
              <IoIosArrowBack aria-hidden="true" className="mr-2" />
              <span>Zurück</span>
            </button>

            <ul role="list" className="space-y-2">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href={`/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', `/${p.title.toLowerCase().replace(/\s+/g, "-")}`);
                      setIsNavOpen(false);
                      window.location.reload();
                    }}
                    className={`flex items-center gap-3 p-2 md:p-3 rounded-xl transition-all duration-300 ${
                      p.id === product.id
                        ? "text-[#E40128] font-semibold"
                        : "hover:bg-gray-100 text-[#06234B]"
                    }`}
                    aria-current={p.id === product.id ? "page" : undefined}
                  >
                    <span className="text-sm font-medium md:text-base">
                      {p.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Overlay for mobile menu */}
        {isNavOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        )}

        {/* Button to toggle navigation on mobile */}
        <button
          className="fixed bottom-4 text-sm md:text-base right-4 z-10 md:hidden px-4 py-2 bg-[#E40128] text-white rounded-lg shadow-lg"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? "Menu" : "Menu"}
        </button>

        {/* Main Content */}
        <div className="w-full p-4 bg-white shadow-lg sm:p-6 md:p-8 md:w-3/4 rounded-2xl">
          {/* Header Section */}
          <div className="flex flex-col gap-4 pb-6 border-b border-gray-100 md:gap-6 sm:pb-8">
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
                <div className="flex flex-col md:flex-row md:flex-wrap md:gap-3">
                  {product.detailDescription.map((item, index) => (
                    <div
                      key={index}
                      className="relative w-full mb-2 md:w-auto group md:mb-0"
                    >
                      <div className="absolute -inset-[3px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl blur-md opacity-75 transition-all duration-500" />
                      <div className="relative px-3 py-2 transition-all duration-300 bg-white rounded-lg shadow-md sm:px-5 sm:py-3 group-hover:shadow-lg">
                        <span className="font-medium text-[#06234B] text-sm md:text-base">
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
                  <div
                    ref={imageRef}
                    className="relative h-full overflow-hidden bg-gray-100 rounded-xl"
                  >
                    {isImageVisible && (
                      <img
                        src={product.detailImages[0] || product.img}
                        alt={`${product.title} - Image 1`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
