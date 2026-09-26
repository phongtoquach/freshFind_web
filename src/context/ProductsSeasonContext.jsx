import { createContext, useContext, useState, useEffect } from 'react';
import seasonsData from '../data/seasons.js';
import productsData from '../data/products.json';
import marketsData from '../data/markets.json';

const ProductsSeasonContext = createContext();

// Helper kiểm tra sản phẩm có sẵn trong tháng (mảng rỗng hoặc không có nghĩa là có quanh năm)
const isProductAvailableInMonth = (product, month) => {
  if (month === null || month === undefined) return true;
  if (!product || !Array.isArray(product.availableMonths) || product.availableMonths.length === 0) {
    return true;
  }
  return product.availableMonths.includes(month);
};

export const ProductsSeasonProvider = ({ children }) => {
  const [seasons, setSeasons] = useState([]);
  const [products, setProducts] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State mới: Lưu ID của mùa đang được chọn (Mặc định là Spring - ID 1)
  const [activeSeasonId, setActiveSeasonId] = useState(1);

  // State cho lọc theo tháng (null = hiển thị tất cả)
  const [activeMonth, setActiveMonth] = useState(null);

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
      getMarketByProductId,
      activeMonth,
      setActiveMonth,
      isProductAvailableInMonth
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
