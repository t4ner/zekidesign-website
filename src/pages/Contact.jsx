import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ukiun8l", "template_z809tfd", form.current, {
        publicKey: "PTCU4WX568fR4ym8L",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-Mail erfolgreich gesendet!");
        },
        (error) => {
          toast.error("Beim Senden der E-Mail ist ein Fehler aufgetreten!");
        }
      );
  };

  return (
    <div className="mt-10 md:mb-36 md:mt-28">
      <ToastContainer />
      <div className="px-4 py-8 mb-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row border border-[#E40128] shadow-3xl rounded-xl overflow-hidden bg-white transition-transform hover:scale-[1.02] duration-300 ease-in-out">
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.5869033873782!2d8.52957887702854!3d49.47341967142224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cf2409cdd84f%3A0x9c05d769c7c35c69!2sHans-Thoma-Stra%C3%9Fe%2034%2C%2068163%20Mannheim%2C%20Germany!5e0!3m2!1sen!2str!4v1736519475822!5m2!1sen!2str"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full p-6 lg:w-1/2 md:p-8">
              <h2 className="text-xl md:text-3xl font-medium text-[#E40128] mb-6 md:mb-8">
                Kontaktieren Sie uns!
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    name="user_name"
                    placeholder="Ihr Name"
                    className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#E40128] focus:ring-1 focus:ring-[#E40128] outline-none transition-all duration-300"
                  />
                  <input
                    type="email"
                    required
                    name="user_email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#E40128] focus:ring-1 focus:ring-[#E40128] outline-none transition-all duration-300"
                  />
                </div>
                <input
                  type="text"
                  required
                  name="user_telephone"
                  placeholder="Ihre Telefonnummer"
                  className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#E40128] focus:ring-1 focus:ring-[#E40128] outline-none transition-all duration-300"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Ihre Nachricht..."
                  className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#E40128] focus:ring-1 focus:ring-[#E40128] outline-none transition-all duration-300 min-h-[150px] md:min-h-[200px] resize-y"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 md:px-6 md:py-3  bg-[#E40128] text-xs md:text-base text-white rounded-md font-medium hover:bg-[#cc0124] transition-all duration-300 transform hover:scale-105"
                  >
                    Schicken
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
