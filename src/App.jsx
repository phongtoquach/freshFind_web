import Navbar from './components/NavBar.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';
import MarketPage from './Pages/MarketPage.jsx';
import ProduceGuide from './Pages/ProduceGuide.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<MarketPage />} />
        <Route path="/produce-guide" element={<ProduceGuide />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;