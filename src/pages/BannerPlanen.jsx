import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const BannerPlanen = () => {
  return (
    <MainLayout>
      <Hero
        title="BANNER & PLANEN"
        subtitle="Großformatdruck"
        description="Hochwertige Banner und Planen für Ihre Außenwerbung und Events"
      />
      <PageContainer
        title="Banner & Planen"
        subtitle="Großformatdruck für Ihre Werbung"
      >
        <p className="text-gray-600">
          Wir produzieren Banner und Planen in allen Größen und Formaten. Ideal
          für Messen, Events und Außenwerbung.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default BannerPlanen;
