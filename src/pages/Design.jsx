import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Design = () => {
  return (
    <MainLayout>
      <Hero
        title="PROFESSIONELLES DESIGN"
        subtitle="Design Services"
        description="Wir gestalten Ihre Markenidentität mit kreativen und individuellen Designlösungen"
      />
      <PageContainer
        title="Design Services"
        subtitle="Professionelles Design für Ihr Unternehmen"
      >
        <p className="text-gray-600">
          Wir bieten maßgeschneiderte Designlösungen für Ihr Unternehmen. Von
          Logos bis hin zu kompletten Corporate Designs - wir setzen Ihre Vision
          kreativ um.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default Design;
