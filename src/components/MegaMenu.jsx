import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const MegaMenu = forwardRef(({ products, onClose, showMegaMenu }, ref) => {
  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-full h-screen z-[60] bg-white transform transition-transform duration-500 ease-in-out ${
        showMegaMenu
          ? "translate-y-20 pointer-events-auto"
          : "-translate-y-full pointer-events-none"
      }`}
      role="dialog"
      aria-label="Mega menü"
      aria-modal="true"
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className="container h-full px-4 mx-auto mt-20">
        <h2 className="py-12 text-3xl font-bold text-center text-black">
          Unsere Dienstleistungen
        </h2>
        <div className="grid grid-cols-2 gap-20 px-4 mx-auto mt-8 md:grid-cols-3 lg:grid-cols-5 max-w-7xl">
          {products.map((product, idx) => (
            <Link
              key={idx}
              to={`/dienstleistungen/${product.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="text-center transition-all duration-300 ease-in cursor-pointer hover:scale-110"
              onClick={onClose}
              style={{
                transitionDelay: showMegaMenu ? "200ms" : "0ms",
                transitionProperty: showMegaMenu ? "all" : "transform",
              }}
            >
              <div className="aspect-square relative bg-[#E40128] rounded-lg flex flex-col items-center justify-center transition-shadow duration-800 hover:shadow-2xl">
                <img
                  src={product.img}
                  alt={product.title}
                  className="object-contain w-20 h-20"
                  loading="lazy"
                />
                <h3 className="absolute text-lg font-medium text-white bottom-4">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
