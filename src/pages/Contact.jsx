import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

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
    <div className="mt-28">
      <ToastContainer />
      <div className="px-2 mt-12 mb-24 lg:mb-12 lg:py-12 lg:px-0">
        <div className="mx-auto">
          <div className="border border-[#E40128] shadow-3xl flex flex-col lg:flex-row lg:w-[90%] items-center space-x-10 bg-white rounded-xl mx-auto overflow-hidden transition-transform transform hover:scale-[1.02] duration-300 ease-in-out">
            <div className="w-full lg:w-1/2 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.5869033873782!2d8.52957887702854!3d49.47341967142224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cf2409cdd84f%3A0x9c05d769c7c35c69!2sHans-Thoma-Stra%C3%9Fe%2034%2C%2068163%20Mannheim%2C%20Germany!5e0!3m2!1sen!2str!4v1736519475822!5m2!1sen!2str"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full px-4 py-4 lg:w-1/2">
              <h2 className="pb-10 text-[#E40128] text-3xl font-medium">
                Kontaktieren Sie uns!
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    name="user_name"
                    placeholder="Ihr Name"
                    className="px-2 py-1 transition-all duration-300 border border-gray-400 rounded-md "
                  />
                  <input
                    type="email"
                    required
                    name="user_email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="px-2 py-1 transition-all duration-300 border border-gray-400 rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    required
                    id="name"
                    name="user_telephone"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-2 py-1 transition-all duration-300 border border-gray-400 rounded-md "
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    required
                    name="message"
                    placeholder="Ihre Nachricht..."
                    style={{ height: "200px" }}
                    className="w-full px-2 py-1 transition-all duration-300 border border-gray-400 rounded-md"
                  />
                </div>
                <div className="flex justify-end mt-5">
                  <button
                    type="submit"
                    className="px-5 py-3 text-white transition-all duration-300 bg-[#E40128] rounded-md text-end font-medium"
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
