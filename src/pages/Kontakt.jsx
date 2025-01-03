import React from "react";
import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";

const Kontakt = () => {
  return (
    <MainLayout>
      <Hero
        title="KONTAKT"
        subtitle="Sprechen Sie uns an"
        description="Wir beraten Sie gerne bei allen Fragen rund um Ihre Projekte"
      />
      <div className="relative w-full  flex flex-col -mt-[300px] md:-mt-[450px] items-center">
        <div className="w-full px-4 mx-auto max-w-7xl md:px-8">
          <div className="p-8 shadow-xl bg-white/90 rounded-xl md:p-12">
            <h1 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
              Kontakt
            </h1>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Kontakt Bilgileri */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#E40128]">
                    Kontaktieren Sie uns
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BsFillTelephoneOutboundFill
                        className="text-[#E40128]"
                        size={20}
                      />
                      <div>
                        <p className="font-medium">Telefon</p>
                        <p className="text-gray-600">0228 97 66 333</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MdOutlineEmail className="text-[#E40128]" size={20} />
                      <div>
                        <p className="font-medium">E-Mail</p>
                        <p className="text-gray-600">
                          kontakt(AT)av-printexpress.de
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <IoLocationSharp className="text-[#E40128]" size={20} />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-gray-600">Münsterstraße 18</p>
                        <p className="text-gray-600">53111 Bonn</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <IoTime className="text-[#E40128]" size={20} />
                      <div>
                        <p className="font-medium">Öffnungszeiten</p>
                        <p className="text-gray-600">
                          Montag bis Freitag: 8:00 - 19:00 Uhr
                        </p>
                        <p className="text-gray-600">
                          Samstag: 9:00 - 17:00 Uhr
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontakt Formu */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#E40128]">
                  Schreiben Sie uns
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-[#E40128] focus:border-[#E40128]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-[#E40128] focus:border-[#E40128]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nachricht
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-[#E40128] focus:border-[#E40128]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 text-white bg-[#E40128] rounded-md hover:bg-[#c40122] transition-colors duration-200"
                  >
                    Senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Kontakt;
