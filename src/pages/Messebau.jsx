import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Messebau = () => {
  return (
    <MainLayout>
      <Hero
        title="MESSEBAU"
        subtitle="Messestandbau"
        description="Professionelle Messeauftritte und Standkonzepte für Ihren Erfolg"
      />
      <PageContainer title="Messebau" subtitle="Professionelle Messeauftritte">
        <p className="text-gray-600">
          Präsentieren Sie sich optimal auf Messen und Events. Wir planen und
          realisieren Ihren Messestand von der Konzeption bis zum Aufbau.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default Messebau;
