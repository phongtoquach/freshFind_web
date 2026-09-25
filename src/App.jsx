import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext.jsx";
import { BookmarkProvider } from "./context/BookmarkContext.jsx";
import { ProductsSeasonProvider } from "./context/ProductsSeasonContext.jsx";

import Home from "./pages/Home.jsx";
import MarketsPage from "./pages/MarketsPage.jsx";
import MarketDetailsPage from "./pages/MarketDetailsPage.jsx";
import ProduceGuide from "./pages/ProduceGuide.jsx";
import ProductsSeasons from "./pages/ProductsSeasons";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ProductsSeasonProvider>
      <AppProvider>
        <BookmarkProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route
              path="/markets/:marketId/:marketSlug"
              element={<MarketDetailsPage />}
            />
            <Route path="/produce-guide" element={<ProduceGuide />} />
            <Route path="/products-seasons" element={<ProductsSeasons />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer />
        </BookmarkProvider>
      </AppProvider>
    </ProductsSeasonProvider>
  );
}

export default App;
