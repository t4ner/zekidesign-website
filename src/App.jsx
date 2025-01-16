import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschut = lazy(() => import("./pages/Datenschut"));
const Agb = lazy(() => import("./pages/Agb"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading" />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId/*" element={<ProductDetail />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutzerklarung" element={<Datenschut />} />
          <Route path="/agb" element={<Agb />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
