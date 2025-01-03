import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Dienstleistungen = () => {
  return (
    <MainLayout>
      <Hero
        title="DIENSTLEISTUNGEN"
        subtitle="Service & Support"
        description="Umfassende Dienstleistungen für Ihre Werbe- und Druckprojekte"
      />
      <PageContainer
        title="Dienstleistungen"
        subtitle="Unsere Dienstleistungen"
      >
        <p className="text-gray-600">
          Wir bieten Ihnen ein umfangreiches Portfolio an professionellen
          Dienstleistungen. Von der Beratung über die Gestaltung bis hin zur
          Produktion - alles aus einer Hand.
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>Individuelle Beratung</li>
          <li>Professionelles Design</li>
          <li>Druck und Produktion</li>
          <li>Montage und Installation</li>
          <li>Express-Service</li>
          <li>Qualitätskontrolle</li>
        </ul>
      </PageContainer>
    </MainLayout>
  );
};

export default Dienstleistungen;
