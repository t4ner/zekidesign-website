import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Printmedien = () => {
  return (
    <MainLayout>
      <Hero
        title="HOCHWERTIGE DRUCKERZEUGNISSE"
        subtitle="Printmedien"
        description="Qualitätsdruck für alle Ihre Geschäftsunterlagen und Werbematerialien"
      />
      <PageContainer
        title="Printmedien"
        subtitle="Hochwertige Druckerzeugnisse"
      >
        <p className="text-gray-600">
          Von Visitenkarten bis zu Broschüren - wir drucken alle Ihre
          Printmedien in höchster Qualität und zu attraktiven Preisen.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default Printmedien;
