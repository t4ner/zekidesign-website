import React, { useEffect } from "react";

const Agb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto mb-10 md:mb-20 md:mt-16">
      <h1 className="text-xl md:text-4xl font-semibold text-[#E40128] mb-8 md:mb-20 ">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <h2 className="text-base md:text-xl font-semibold text-[#06234B] mb-2">
        1. Geltungsbereich
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        1.1. Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
        Verträge, Lieferungen und Leistungen zwischen ZekiMedia Print &
        Werbetechnik (im Folgenden „ZekiMedia“) und ihren Kunden, sofern nicht
        ausdrücklich schriftlich etwas anderes vereinbart wurde.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        1.2. Abweichende Geschäftsbedingungen des Kunden werden nur dann
        Bestandteil des Vertrages, wenn ZekiMedia deren Geltung ausdrücklich
        schriftlich zustimmt.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        2. Vertragsabschluss
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        2.1. Ein Vertrag kommt zustande, sobald der Kunde ein Angebot von
        ZekiMedia schriftlich oder elektronisch annimmt.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        2.2. Angebote von ZekiMedia sind freibleibend und unverbindlich, sofern
        nicht ausdrücklich schriftlich anders angegeben.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        3. Preise und Zahlungsbedingungen
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        3.1. Alle angegebenen Preise verstehen sich als Endpreise in Euro,
        zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht ausdrücklich
        anders angegeben.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        3.2. Die Zahlung ist innerhalb von 14 Tagen nach Rechnungsstellung ohne
        Abzug fällig, sofern keine abweichende Zahlungsfrist schriftlich
        vereinbart wurde.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        3.3. Bei Zahlungsverzug ist ZekiMedia berechtigt, Verzugszinsen in Höhe
        von 5 % über dem jeweiligen Basiszinssatz gemäß § 288 BGB zu berechnen.
        Weitergehende Schadensersatzansprüche bleiben unberührt.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        4. Lieferung und Abnahme
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        4.1. Liefertermine und Fristen sind nur dann verbindlich, wenn sie
        schriftlich vereinbart wurden.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        4.2. Der Kunde ist verpflichtet, die gelieferten Produkte unverzüglich
        nach Erhalt auf Mängel zu überprüfen und etwaige Beanstandungen
        innerhalb von 7 Tagen schriftlich mitzuteilen.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        4.3. Im Falle eines Annahmeverzugs des Kunden ist ZekiMedia berechtigt,
        die Produkte auf Kosten des Kunden einzulagern und eine angemessene
        Lagergebühr zu berechnen.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        5. Gewährleistung und Haftung
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        5.1. Offensichtliche Mängel sind innerhalb von 7 Tagen nach Erhalt der
        Ware schriftlich anzuzeigen. Nach Ablauf dieser Frist gilt die Ware als
        genehmigt.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        5.2. ZekiMedia haftet ausschließlich für Vorsatz und grobe
        Fahrlässigkeit. Eine Haftung für leichte Fahrlässigkeit ist
        ausgeschlossen, es sei denn, es handelt sich um die Verletzung
        wesentlicher Vertragspflichten (Kardinalpflichten).
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        5.3. Für Schäden, die durch unsachgemäße Nutzung oder Behandlung der
        Produkte entstehen, übernimmt ZekiMedia keine Haftung.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        6. Eigentumsvorbehalt
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        6.1. Die gelieferten Produkte bleiben bis zur vollständigen Zahlung des
        Kaufpreises Eigentum von ZekiMedia.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        6.2. Der Kunde verpflichtet sich, die Produkte während des
        Eigentumsvorbehalts pfleglich zu behandeln und sie weder zu veräußern
        noch zu belasten.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        7. Prüfungspflicht des Kunden
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        7.1. Der Kunde ist verpflichtet, alle von ZekiMedia bereitgestellten
        Inhalte (z. B. Texte, Grafiken, Designs) vor der Freigabe sorgfältig zu
        prüfen.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        7.2. Mit der Freigabe bestätigt der Kunde die Richtigkeit der Inhalte
        und übernimmt die Verantwortung für etwaige Fehler. Nach der Freigabe
        übernimmt ZekiMedia keine Haftung für Rechtschreib-, inhaltliche oder
        sonstige Fehler.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        8. Urheberrechte und Nutzungsrechte
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        8.1. Alle von ZekiMedia erstellten Entwürfe, Designs und Produkte
        unterliegen dem Urheberrecht und bleiben geistiges Eigentum von
        ZekiMedia.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        8.2. Ohne vorherige schriftliche Zustimmung von ZekiMedia dürfen diese
        Werke weder vervielfältigt, verändert, veröffentlicht noch an Dritte
        weitergegeben werden.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        8.3. Nutzungsrechte werden ausschließlich im Rahmen einer schriftlichen
        Vereinbarung eingeräumt und treten erst nach vollständiger Bezahlung der
        vereinbarten Vergütung in Kraft. Der Umfang der Nutzungsrechte ist auf
        den vertraglich festgelegten Zweck beschränkt.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        9. Widerrufsrecht
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        9.1. Kunden, die Verbraucher im Sinne des § 13 BGB sind, steht ein
        Widerrufsrecht nach den gesetzlichen Bestimmungen zu.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        9.2. Das Widerrufsrecht erlischt vorzeitig, wenn ZekiMedia mit
        ausdrücklicher Zustimmung des Kunden vor Ablauf der Widerrufsfrist mit
        der Ausführung der Leistung begonnen hat.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        10. Datenschutz
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        10.1. ZekiMedia verpflichtet sich, sämtliche personenbezogenen Daten
        gemäß den geltenden Datenschutzvorschriften vertraulich zu behandeln.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        10.2. Weitere Informationen zum Datenschutz können der
        Datenschutzerklärung von ZekiMedia entnommen werden.
      </p>

      <h2 className="mt-6 text-base md:text-xl font-semibold text-[#06234B] mb-2">
        11. Schlussbestimmungen
      </h2>
      <p className="text-xs text-zinc-500 md:text-base">
        11.1. Gerichtsstand für alle Streitigkeiten aus diesem
        Vertragsverhältnis ist der Sitz von ZekiMedia, sofern der Kunde
        Kaufmann, eine juristische Person des öffentlichen Rechts oder ein
        öffentlich-rechtliches Sondervermögen ist.
      </p>
      <p className="text-xs text-zinc-500 md:text-base">
        11.2. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
        werden, bleibt die Gültigkeit der übrigen Bestimmungen unberührt. Die
        unwirksame Bestimmung wird durch eine Regelung ersetzt, die dem
        wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
      </p>
    </div>
  );
};

export default Agb;
