import React from "react";
import Hero from "../components/Hero";
import PageContainer from "../components/PageContainer";
import MainLayout from "../layouts/MainLayout";

const Textilien = () => {
  return (
    <MainLayout>
      <Hero
        title="TEXTILIEN"
        subtitle="Textildruck"
        description="Hochwertige Textilveredelung für Ihre Unternehmenskleidung"
      />
      <PageContainer title="Textilien" subtitle="Textile Werbemittel">
        <p className="text-gray-600">
          Personalisieren Sie Ihre Textilien mit Ihrem Firmenlogo. Von T-Shirts
          über Poloshirts bis hin zu Arbeitsbekleidung - wir veredeln Ihre
          Textilien professionell.
        </p>
      </PageContainer>
    </MainLayout>
  );
};

export default Textilien;
