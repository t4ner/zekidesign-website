import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Werbeartikel = () => {
  return (
    <MainLayout>
      <Hero
        title="WERBEARTIKEL"
        subtitle="Promotion Artikel"
        description="Individuelle Werbeartikel für effektives Marketing"
      />
      <PageContainer title="Werbeartikel" subtitle="Individuelle Werbemittel">
        <p className="text-gray-600">
          Steigern Sie Ihre Markenbekanntheit mit personalisierten
          Werbeartikeln. Wir bieten eine große Auswahl an hochwertigen Produkten
          für Ihre Marketingzwecke.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default Werbeartikel;
