import { Routes, Route, useLocation } from "react-router-dom";

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
import Bookmarks from "./pages/BookMarks.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const location = useLocation();

  return (
    <AppProvider>
      <ProductsSeasonProvider>
        <BookmarkProvider>
          <Header />

          <div className="page-transition" key={location.pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/markets" element={<MarketsPage />} />
              <Route
                path="/markets/:marketId/:marketSlug"
                element={<MarketDetailsPage />}
              />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/produce-guide" element={<ProduceGuide />} />
              <Route path="/products-seasons" element={<ProductsSeasons />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>

          <Footer />
        </BookmarkProvider>
      </ProductsSeasonProvider>
    </AppProvider>
  );
}

export default App;
