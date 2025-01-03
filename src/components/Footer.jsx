import React from "react";
import telephone from "/svg/telephone.svg";
import logo from "/logo/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative mt-20 sm:mt-32 lg:mt-56">
      <div className="absolute flex flex-row items-center justify-center space-x-10 -top-[30px] lg:-top-[20px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center justify-center transition-transform bg-white rounded-lg w-14 h-14 sm:w-16 sm:h-16 lg:w-auto lg:h-auto lg:px-6 lg:py-3 shadow-top hover:scale-105">
          <img
            src={telephone}
            alt="telephone"
            className="w-6 text-red-500 sm:w-8"
          />
          <button className="hidden ml-4 text-lg font-medium lg:block lg:text-2xl whitespace-nowrap">
            0228 97 66 333
          </button>
        </div>

        <div className="flex items-center justify-center transition-transform bg-white rounded-lg w-14 h-14 sm:w-16 sm:h-16 lg:w-auto lg:h-auto lg:px-6 lg:py-3 shadow-top hover:scale-105">
          <MdOutlineEmail className="w-6 h-6 sm:w-8 sm:h-8" />
          <button className="hidden ml-4 text-lg font-medium lg:block lg:text-2xl whitespace-nowrap">
            E-Mail
          </button>
        </div>

        <div className="flex items-center justify-center transition-transform bg-white rounded-lg w-14 h-14 sm:w-16 sm:h-16 lg:w-auto lg:h-auto lg:px-6 lg:py-3 shadow-top hover:scale-105">
          <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" color="#23d366" />
          <button className="hidden lg:block text-lg lg:text-2xl font-medium whitespace-nowrap text-[#23D366] ml-4">
            WhatsApp
          </button>
        </div>
      </div>

      <div
        className="relative h-[1300px]  lg:h-[900px] flex items-center justify-center object-cover w-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/public/banner-bg/black_back.png')",
        }}
      >
        <div
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full px-4 text-center bg-left-bottom py-14 lg:py-24 clip"
          style={{
            backgroundImage: "url('/public/banner-bg/banner_red.png')",
            height: "auto",
            minHeight: "200px",
          }}
        >
          <h2 className="uppercase text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-white px-2 lg:px-4">
            Sie haben Fragen oder benötigen ein Angebot im Bereich Digitaldruck?
          </h2>
          <h2 className="uppercase text-[24px] sm:text-[40px] lg:text-[67px] font-bold text-white mt-4">
            Dann kontaktieren Sie unS!
          </h2>
        </div>

        <div className="absolute bottom-14 ml-0 lg:ml-32 flex flex-col lg:flex-row justify-between items-start w-[90%] max-w-7xl mx-auto space-y-8 lg:space-y-0">
          <div className="w-full lg:w-[30%] pb-8 border-b lg:border-b-0 lg:border-r border-gray-700 ">
            <div>
              <img src={logo} alt="logo" className="w-48 md:w-60" />
              <div className="flex items-center mt-5 space-x-3">
                <BsFillTelephoneOutboundFill color="#E40128" size={14} />
                <p className="font-medium text-white">ZEKIDESIGN</p>
              </div>
              <div className="text-sm text-gray-400 sm:text-base">
                Telephone: 0555 555 55 55
              </div>
              <div className="text-sm text-gray-400 sm:text-base">
                Fax: 0228 / 97 66 444
              </div>
              <div className="text-sm text-gray-400 break-words sm:text-base">
                E-Mail: kontakt(AT)av-printexpress.de
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-2 text-white">
                <IoLocationSharp color="#E40128" size={19} />
                <p className="text-sm font-medium uppercase sm:text-base">
                  Copyshop in Bonn-Zentrum
                </p>
              </div>
              <p className="text-sm text-gray-400 sm:text-base">
                Münsterstraße 18 53111 Bonn
              </p>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-2 text-white">
                <IoTime color="#E40128" size={18} />
                <p className="text-sm font-medium uppercase sm:text-base">
                  Öffnungszeiten
                </p>
              </div>
              <p className="text-sm text-gray-400 sm:text-base">
                Montag bis Freitag: 8:00 - 19:00 Uhr Samstag: 9:00 - 17:00 Uhr
                und nach Vereinbarung
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[30%] pb-8 border-b lg:border-b-0 lg:border-r border-gray-700 lg:px-8">
            <div>
              <h3 className="uppercase text-[#E40128] text-lg font-medium">
                Unsere Angebote
              </h3>
            </div>
            <div className="mt-8 space-y-2 text-gray-400">
              <div>
                <Link
                  to="/design"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Design
                </Link>
              </div>
              <div>
                <Link
                  to="/printmedien"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Printmedien
                </Link>
              </div>
              <div>
                <Link
                  to="/banner-&-planen"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Banner & Planen
                </Link>
              </div>
              <div>
                <Link
                  to="/kfz-werbung"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  KFZ-Werbung
                </Link>
              </div>
              <div>
                <Link
                  to="/fenster-werbung"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Fenster-Werbung
                </Link>
              </div>

              <div>
                <Link
                  to="/led-werbung"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Led-Werbung
                </Link>
              </div>

              <div>
                <Link
                  to="/schilder"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Schilder
                </Link>
              </div>
              <div>
                <Link
                  to="/textilien"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Textilien
                </Link>
              </div>
              <div>
                <Link
                  to="/werbeartikel"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Werbeartikel
                </Link>
              </div>
              <div>
                <Link
                  to="/messebau"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Messebau
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30%] lg:px-8">
            <div>
              <h3 className="uppercase text-[#E40128] text-lg font-medium">
                Informationen
              </h3>
            </div>
            <div className="mt-8 space-y-2 text-gray-400">
              <div>
                <Link
                  to="/"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Produkte
                </Link>
              </div>
              <div>
                <Link
                  to="/dienstleistungen"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Dienstleistungen
                </Link>
              </div>
              <div>
                <Link
                  to="/kontakt"
                  className="block transition-colors cursor-pointer hover:text-white"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
