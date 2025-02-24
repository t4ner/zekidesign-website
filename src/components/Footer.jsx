import React, { memo } from "react";
import { Link } from "react-router-dom";
import Logo from "/logo/logo.webp";

const FooterLink = memo(({ to, children }) => (
  <Link to={to} className="hover:text-[#E40128] transition-colors duration-200">
    {children}
  </Link>
));

const ContactButton = memo(({ href, icon, text, target }) => (
  <a href={href} className="flex items-center gap-4" target={target}>
    <div className="p-3 bg-red-600 rounded-full">{icon}</div>
    <span className="text-sm md:text-lg font-medium text-[#06234B] hidden md:block">
      {text}
    </span>
  </a>
));

const Footer = () => {
  return (
    <footer className="py-8 mb-5 border-t border-[#06234B]  md:mx-10">
      <div className="container px-4 mx-auto">
        {/* Contact Buttons */}
        <div className="flex justify-center gap-10 mb-8 md:mb-16 md:flex-row md:gap-16">
          <ContactButton
            href="tel:+4901733123222"
            target="_blank"
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
            text="0173-31 23 222"
          />

          <ContactButton
            href="mailto:info@macaree.de"
            target="_blank"
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
            text="Anfrageformular"
          />

          <ContactButton
            href="https://wa.me/+4901733123222"
            target="_blank"
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            }
            text="WhatsApp"
          />
        </div>

        {/* Contact Title */}
        <div className="text-center md:mb-10">
          <h3 className="text-sm md:font-medium text-zinc-400 md:text-base">
            Haben Sie Fragen, benötigen Beratung oder ein Angebot rund um
            Printmedien und Werbetechnik?
          </h3>
          <h2 className="text-lg md:text-3xl font-semibold md:font-bold text-[#06234B] mt-2">
            KONTAKTIEREN SIE UNS – WIR SIND GERNE FÜR SIE DA!
          </h2>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col justify-between pt-8 md:items-center md:flex-row">
          <div className="hidden mb-4 md:block md:mb-0">
            <img src={Logo} alt="macaree Logo" className="h-16" />
          </div>
          <div className="flex flex-col gap-6 text-sm md:flex-row text-zinc-400">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/kontakt">Kontakt</FooterLink>
            <FooterLink to="/impressum">Impressum</FooterLink>
            <FooterLink to="/datenschutzerklarung">
              Datenschutzerklärung
            </FooterLink>
            <FooterLink to="/agb">AGB</FooterLink>
          </div>
          <div className="block mt-10 md:hidden">
            <img src={Logo} alt="macaree Logo" className="h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
