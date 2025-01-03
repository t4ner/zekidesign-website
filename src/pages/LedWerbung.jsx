import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const LedWerbung = () => {
  return (
    <MainLayout>
      <Hero
        title="LED-WERBUNG"
        subtitle="Leuchtende Werbung"
        description="Innovative LED-Lösungen für eine auffällige Präsentation Ihrer Marke"
      />
      <PageContainer title="Led Werbung" subtitle="Professionelle LED-Lösungen">
        <p className="text-gray-600">
          Präsentieren Sie sich optimal auf Messen und Events. Wir planen und
          realisieren Ihren Messestand von der Konzeption bis zum Aufbau.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default LedWerbung;
