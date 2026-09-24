// Import Modules
import { Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Import Pages
import Home from "./Pages/Home.jsx";
import MarketPage from "./Pages/MarketPage.jsx";
import ProduceGuide from "./Pages/ProduceGuide.jsx";
import ProductsSeasons from "./Pages/ProductsSeasons";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<MarketPage />} />
        <Route path="/produce-guide" element={<ProduceGuide />} />
        <Route path="/products-seasons" element={<ProductsSeasons />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
