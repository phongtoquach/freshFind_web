import Home from './pages/Home.jsx';
import MarketsPage from './pages/MarketsPage.jsx';
import MarketDetailsPage from './pages/MarketDetailsPage.jsx';
import ProduceGuide from './pages/ProduceGuide.jsx';
import ProductsSeasons from "./pages/ProductsSeasons";
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/markets/:marketId/:marketSlug" element={<MarketDetailsPage />} />
        <Route path="/produce-guide" element={<ProduceGuide />} />
        <Route path="/products-seasons" element={<ProductsSeasons />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;