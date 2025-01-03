import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const KfzWerbung = () => {
  return (
    <MainLayout>
      <Hero
        title="MOBILE WERBUNG"
        subtitle="KFZ-Werbung"
        description="Professionelle Fahrzeugbeschriftung und Folierung für maximale Aufmerksamkeit"
      />
      <PageContainer
        title="KFZ-Werbung"
        subtitle="Professionelle Fahrzeugbeschriftung"
      >
        <p className="text-gray-600">
          Wir bieten hochwertige Fahrzeugbeschriftungen für Ihren Fuhrpark. Von
          einzelnen Firmenwagen bis hin zu ganzen Flotten - wir setzen Ihre
          Marke perfekt in Szene.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default KfzWerbung;
