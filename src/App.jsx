import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';
import MarketPage from './Pages/MarketPage.jsx';
import ProduceGuide from './Pages/ProduceGuide.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<MarketPage />} />
        <Route path="/produce-guide" element={<ProduceGuide />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;