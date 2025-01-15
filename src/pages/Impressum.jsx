import React from "react";

const Impressum = () => {
  return (
    <div className="container px-4 py-8 mx-auto mb-10 md:mb-20 md:mt-16">
      <h1 className="text-xl md:text-4xl font-semibold text-[#E40128] mb-8 md:mb-20 ">
        Impressum
      </h1>
      <h2 className="text-base md:text-xl font-semibold text-[#06234B] mb-2">
        ZekiMedia Print & Werbetechnik
      </h2>
      <p className="text-xs text-zinc-500 md:text-base ">Inhaber: Zeki Aktas</p>
      <p className="text-xs text-zinc-500 md:text-base ">Hans-Thoma-Str. 34</p>
      <p className="text-xs text-zinc-500 md:text-base ">68163 Mannheim</p>
      <p className="text-xs text-zinc-500 md:text-base ">
        Telefon: <span>0173-31 23 222</span>
      </p>
      <p className="text-xs text-zinc-500 md:text-base ">
        E-Mail:{" "}
        <a
          href="mailto:info@zekimedia.de"
          className="text-xs hover:underline text-zinc-500 md:text-base"
        >
          info@zekimedia.de
        </a>
      </p>
      <p className="text-xs text-zinc-500 md:text-base ">
        Ust-ID: <span>DE328720158</span>
      </p>

      <h2 className="mt-6 text-base md:text-xl mb-2 font-semibold text-[#06234B]">
        Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
      </h2>
      <p className="text-xs text-zinc-500 md:text-base ">Zeki Aktas</p>

      <h2 className="mt-6 mb-2 text-base md:text-xl font-semibold text-[#06234B]">
        Rechtliche Hinweise:
      </h2>
      <p className="text-xs text-zinc-500 md:text-base ">
        ZekiMedia Print & Werbetechnik prüft und aktualisiert die Informationen
        auf dieser Webseite regelmäßig. Trotz aller Sorgfalt können sich Daten
        und Informationen zwischenzeitlich geändert haben. Eine Haftung,
        Garantie oder sonstiges Einstehen für die Aktualität, Richtigkeit und
        Vollständigkeit der zur Verfügung gestellten Informationen wird daher
        nicht übernommen.
      </p>
      <p className="mt-2 text-xs text-zinc-500 md:text-base ">
        Gleiches gilt auch für alle anderen Webseiten, auf die direkt mittels
        Hyperlink oder in sonstiger Weise verwiesen wird. ZekiMedia Print &
        Werbetechnik ist für den Inhalt der Webseiten, die aufgrund einer
        solchen Verbindung oder eines Hinweises erreicht werden, nicht
        verantwortlich.
      </p>
      <p className="mt-2 text-xs text-zinc-500 md:text-base ">
        ZekiMedia Print & Werbetechnik lehnt ausdrücklich jegliche Form der
        Haftung – ob Vertragshaftung, Deliktshaftung, Gefährdungshaftung oder
        sonstiger Haftung – für direkten oder indirekten Schadensersatz, Ersatz
        des beiläufig entstandenen Schadens, Strafe einschließlich
        Schadensersatz oder konkrete Schäden, die daraus resultieren oder in
        Zusammenhang damit stehen, dass die Webseite von ZekiMedia Print &
        Werbetechnik aufgerufen, benutzt oder nicht benutzt werden kann, oder
        mit einem Leistungsausfall, einer Unterbrechung, einem Defekt, einer
        Übertragungsverzögerung, einem Computervirus oder sonstigen schädlichen
        Elementen oder einem Leitungs- und Systemausfall in Zusammenhang mit der
        Webseite steht, unabhängig davon, ob ZekiMedia Print & Werbetechnik sich
        der Möglichkeit solcher Schäden bewusst ist oder nicht, ab.
      </p>
      <p className="mt-2 text-xs text-zinc-500 md:text-base ">
        Darüber hinaus behält sich ZekiMedia Print & Werbetechnik das Recht vor,
        Änderungen oder Ergänzungen der bereitgestellten Informationen
        vorzunehmen.
      </p>
    </div>
  );
};

export default Impressum;
