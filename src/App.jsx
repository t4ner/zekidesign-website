import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

// Ana sayfa bileşenini doğrudan import edelim (lazy loading yapmadan)
import Home from "./pages/Home";

// Diğer sayfalar için lazy loading kullanalım
const Design = React.lazy(() => import("./pages/Design"));
const Printmedien = React.lazy(() => import("./pages/Printmedien"));
const BannerPlanen = React.lazy(() => import("./pages/BannerPlanen"));
const KfzWerbung = React.lazy(() => import("./pages/KfzWerbung"));
const FensterWerbung = React.lazy(() => import("./pages/FensterWerbung"));
const LedWerbung = React.lazy(() => import("./pages/LedWerbung"));
const Schilder = React.lazy(() => import("./pages/Schilder"));
const Textilien = React.lazy(() => import("./pages/Textilien"));
const Werbeartikel = React.lazy(() => import("./pages/Werbeartikel"));
const Messebau = React.lazy(() => import("./pages/Messebau"));
const Dienstleistungen = React.lazy(() => import("./pages/Dienstleistungen"));
const Kontakt = React.lazy(() => import("./pages/Kontakt"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/printmedien" element={<Printmedien />} />
          <Route path="/banner-&-planen" element={<BannerPlanen />} />
          <Route path="/kfz-werbung" element={<KfzWerbung />} />
          <Route path="/fenster-werbung" element={<FensterWerbung />} />
          <Route path="/led-werbung" element={<LedWerbung />} />
          <Route path="/schilder" element={<Schilder />} />
          <Route path="/textilien" element={<Textilien />} />
          <Route path="/werbeartikel" element={<Werbeartikel />} />
          <Route path="/messebau" element={<Messebau />} />
          <Route path="/dienstleistungen" element={<Dienstleistungen />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
