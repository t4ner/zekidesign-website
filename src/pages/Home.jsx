import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero
        title="LASSEN SIE SICH BEEINDRUCKEN"
        subtitle="Digitaldruck in Bonn"
        description="Seit 1999 haben wir Kunden aus den unterschiedlichsten Bereichen Druck, Kopie, Repro und Medienservice mit unserer Qualität und unserem Service überzeugt."
      />
      <Products />
    </MainLayout>
  );
};

export default Home;
