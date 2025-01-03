import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Schilder = () => {
  return (
    <MainLayout>
      <Hero
        title="SCHILDER"
        subtitle="Beschilderung"
        description="Individuelle Schilder und Wegeleitsysteme für jeden Einsatzbereich"
      />
      <PageContainer title="Schilder" subtitle="Individuelle Beschilderung">
        <p className="text-gray-600">
          Von Firmenschildern bis hin zu Wegweisern - wir produzieren Schilder
          in allen Größen und Materialien für Ihren individuellen Bedarf.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default Schilder;
