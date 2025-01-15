import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  memo,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { Link } from "react-router-dom";
import logo from "/logo/logo.webp";
import { IoMenu, IoClose } from "react-icons/io5";
import products from "../data.js";

// MenuLink bileşenini ayırıyoruz
const MenuLink = memo(({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-sm font-medium text-[#06234B] hover:text-[#E40128] transition-colors duration-200"
    onClick={onClick}
    role="menuitem"
  >
    {children}
  </Link>
));

// ProductLink bileşenini ayırıyoruz
const ProductLink = memo(({ product, onClick }) => (
  <Link
    to={`/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
    className="flex items-center gap-4 cursor-pointer text-black hover:text-[#E40128] transition-colors duration-200"
    onClick={onClick}
  >
    <div className="w-9 h-9 bg-[#E40128] rounded-lg flex items-center justify-center">
      <img
        src={product.img}
        alt={product.title}
        className="object-contain w-7 h-7"
        loading="lazy"
      />
    </div>
    <span className="text-sm font-medium">{product.title}</span>
  </Link>
));

// Mega menu için lazy loading
const MegaMenu = lazy(() => import("./MegaMenu"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const megaMenuRef = useRef(null);
  const menuItemRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (showMegaMenu) {
      setShowMegaMenu(false);
    }
  }, [showMegaMenu]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMouseEnter = useCallback(() => {
    setShowMegaMenu(true);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    const megaMenu = megaMenuRef.current;
    const menuItem = menuItemRef.current;

    if (
      !megaMenu?.contains(e.relatedTarget) &&
      !menuItem?.contains(e.relatedTarget)
    ) {
      setShowMegaMenu(false);
    }
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Memoize edilmiş menuItems
  const menuItems = useMemo(
    () => [
      { title: "Home", link: "/" },
      {
        title: "Dienstleistungen",
        link: "/dienstleistungen",
        hasMegaMenu: true,
      },
      { title: "Kontakt", link: "/kontakt" },
    ],
    []
  );

  // Event handler'ları useCallback ile optimize edelim
  const handleMobileMenuClick = useCallback(
    (item) => {
      if (item.hasMegaMenu) {
        setShowMobileProducts(!showMobileProducts);
      } else {
        setIsOpen(false);
      }
    },
    [showMobileProducts]
  );

  return (
    <nav className="z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-40 lg:w-72" />
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
                  <span className="text-[#06234B]  hover:text-[#E40128] py-10 font-semibold transition-colors duration-200 cursor-pointer">
                    {item.title}
                  </span>
                ) : (
                  <Link
                    to={item.link}
                    className="text-[#06234B] hover:text-[#E40128] py-10 font-semibold transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.hasMegaMenu && showMegaMenu && (
                  <Suspense
                    fallback={<div className="loading">Loading...</div>}
                  >
                    <MegaMenu
                      products={products}
                      onClose={() => setShowMegaMenu(false)}
                      ref={megaMenuRef}
                      showMegaMenu={showMegaMenu}
                    />
                  </Suspense>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#E40128]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
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
              <img src={logo} alt="Logo" className="w-40" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#E40128] p-2"
              >
                <IoClose size={26} color="#E40128" />
              </button>
            </div>

            {/* Menü İçeriği */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col p-6 space-y-6">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => handleMobileMenuClick(item)}
                    >
                      {item.hasMegaMenu ? (
                        <span className="hover:text-[#E40128] text-sm font-medium transition-colors duration-200">
                          {item.title}
                        </span>
                      ) : (
                        <Link
                          to={item.link}
                          className="hover:text-[#E40128] text-sm font-medium transition-colors duration-200"
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
                              <div className="w-9 h-9 bg-[#E40128] rounded-lg flex items-center justify-center">
                                <img
                                  src={product.img}
                                  alt={product.title}
                                  className="object-contain w-7 h-7"
                                />
                              </div>
                              <span className="text-sm font-medium">
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
            className="fixed inset-0 z-20 bg-black/70 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
