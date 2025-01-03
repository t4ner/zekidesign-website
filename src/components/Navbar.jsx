import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/logo/logo.png";
import logo2 from "/logo/logo2.png";
import { IoMenu, IoClose } from "react-icons/io5";
import products from "../data.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const megaMenuRef = useRef(null);
  const menuItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (showMegaMenu) {
        setShowMegaMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMegaMenu]);

  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = (e) => {
    const megaMenu = megaMenuRef.current;
    const menuItem = menuItemRef.current;

    if (
      !megaMenu?.contains(e.relatedTarget) &&
      !menuItem?.contains(e.relatedTarget)
    ) {
      setShowMegaMenu(false);
    }
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Produkte", link: "#", hasMegaMenu: true },
    { title: "Dienstleistungen", link: "/dienstleistungen" },
    { title: "Kontakt", link: "/kontakt" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-40 lg:w-60" />
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 lg:flex">
            {menuItems.map((item, index) => (
              <div
                key={index}
                ref={item.hasMegaMenu ? menuItemRef : null}
                className="relative group"
                onMouseEnter={item.hasMegaMenu ? handleMouseEnter : undefined}
                onMouseLeave={item.hasMegaMenu ? handleMouseLeave : undefined}
              >
                {item.hasMegaMenu ? (
                  <span className="text-white hover:text-[#E40128] py-10 font-medium transition-colors duration-200 cursor-pointer">
                    {item.title}
                  </span>
                ) : (
                  <Link
                    to={item.link}
                    className="text-white hover:text-[#E40128] py-10 font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.hasMegaMenu && (
                  <div
                    ref={megaMenuRef}
                    className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-500 ease-in-out ${
                      showMegaMenu
                        ? "translate-y-20 pointer-events-auto"
                        : "-translate-y-full pointer-events-none"
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="container h-full px-4 mx-auto">
                      <h2 className="pt-12 text-3xl font-bold text-center text-black">
                        Unsere Produkte
                      </h2>
                      <div className="grid grid-cols-2 gap-20 px-4 mx-auto mt-8 md:grid-cols-3 lg:grid-cols-5 max-w-7xl">
                        {products.map((product, idx) => (
                          <Link
                            key={idx}
                            to={`/${product.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-center transition-all duration-300 ease-in cursor-pointer hover:scale-110 hover:text-[#E40128]"
                            onClick={() => setShowMegaMenu(false)}
                            style={{
                              transitionDelay: showMegaMenu
                                ? `${idx * 100}ms`
                                : "0ms",
                              transitionProperty: showMegaMenu
                                ? "all"
                                : "transform",
                            }}
                          >
                            <div className="aspect-square mb-4 bg-[#E40128] rounded-lg flex items-center justify-center transition-shadow duration-800 hover:shadow-2xl">
                              <img
                                src={product.img}
                                alt={product.title}
                                className="object-contain w-20 h-20"
                              />
                            </div>
                            <div>
                              <h3 className="mb-2 text-lg font-medium transition-colors duration-900">
                                {product.title}
                              </h3>
                              <p className="text-sm text-gray-400">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#E40128]"
            >
              {isOpen ? <IoClose size={24} /> : <IoMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-[80%] bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } shadow-xl z-50`}
        >
          <div className="flex flex-col h-full">
            {/* Logo ve Kapatma Butonu */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <img src={logo2} alt="Logo" className="w-40" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#E40128] p-2"
              >
                <IoClose size={28} color="black" />
              </button>
            </div>

            {/* Menü İçeriği */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col p-6 space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        if (item.hasMegaMenu) {
                          setShowMobileProducts(!showMobileProducts);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {item.hasMegaMenu ? (
                        <span className="hover:text-[#E40128] font-medium transition-colors duration-200">
                          {item.title}
                        </span>
                      ) : (
                        <Link
                          to={item.link}
                          className="hover:text-[#E40128] font-medium transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                      {item.hasMegaMenu && (
                        <IoClose
                          size={17}
                          className={`text-black transition-transform duration-300 ${
                            showMobileProducts ? "rotate-0" : "rotate-45"
                          }`}
                        />
                      )}
                    </div>
                    {item.hasMegaMenu && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          showMobileProducts ? "max-h-[1000px] mt-6" : "max-h-0"
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-4">
                          {products.map((product, idx) => (
                            <Link
                              key={idx}
                              to={`/${product.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="flex items-center gap-4 cursor-pointer text-black hover:text-[#E40128] transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-10 h-10 bg-[#E40128] rounded-lg flex items-center justify-center">
                                <img
                                  src={product.img}
                                  alt={product.title}
                                  className="object-contain w-7 h-7"
                                />
                              </div>
                              <span className="text-base font-medium">
                                {product.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
