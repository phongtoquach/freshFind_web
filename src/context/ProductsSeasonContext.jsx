import { createContext, useContext, useState, useEffect } from 'react';
import seasonsData from '../data/seasons.js';
import productsData from '../data/products.json';
import marketsData from '../data/markets.json';

const ProductsSeasonContext = createContext();

export const ProductsSeasonProvider = ({ children }) => {
  const [seasons, setSeasons] = useState([]);
  const [products, setProducts] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State mới: Lưu ID của mùa đang được chọn (Mặc định là Spring - ID 1)
  const [activeSeasonId, setActiveSeasonId] = useState(1);

  useEffect(() => {
    try {
      setSeasons(seasonsData);
      setProducts(productsData);
      setMarkets(marketsData);
    } catch (error) {
      console.error("Error loading initial data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getProductById = (id) => products.find(p => p.id === id);
  const getMarketByProductId = (productId) => markets.find(m => m.productIds.includes(productId));

  // Tìm object dữ liệu đầy đủ của mùa đang active
  const currentSeason = seasons.find(s => s.id === activeSeasonId) || {};

  return (
    <ProductsSeasonContext.Provider value={{
      seasons,
      products,
      markets,
      isLoading,
      activeSeasonId,
      setActiveSeasonId,
      currentSeason,
      getProductById,
      getMarketByProductId
    }}>
      {children}
    </ProductsSeasonContext.Provider>
  );
};

export const useProductsSeason = () => {
  const context = useContext(ProductsSeasonContext);
  if (!context) {
    throw new Error('useProductsSeason must be used within a ProductsSeasonProvider');
  }
  return context;
};
