import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const FensterWerbung = () => {
  return (
    <MainLayout>
      <Hero
        title="FENSTER-WERBUNG"
        subtitle="Schaufensterwerbung"
        description="Professionelle Fensterbeklebungen und Schaufenstergestaltung"
      />
      <PageContainer
        title="Fenster-Werbung"
        subtitle="Attraktive Schaufensterwerbung"
      >
        <p className="text-gray-600">
          Nutzen Sie Ihre Schaufenster als effektive Werbefläche. Wir gestalten
          und produzieren hochwertige Fensterbeklebungen für maximale
          Aufmerksamkeit.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default FensterWerbung;
