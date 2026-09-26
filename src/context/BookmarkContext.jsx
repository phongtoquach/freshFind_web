import { createContext, useContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

const MARKET_STORAGE_KEY = "freshfind_bookmarks";
const PRODUCT_STORAGE_KEY = "freshfind_product_bookmarks";

export function BookmarkProvider({ children }) {
  const [marketBookmarks, setMarketBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem(MARKET_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [productBookmarks, setProductBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem(PRODUCT_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(MARKET_STORAGE_KEY, JSON.stringify(marketBookmarks));
  }, [marketBookmarks]);

  useEffect(() => {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(productBookmarks));
  }, [productBookmarks]);

  // Market methods
  const toggleMarketBookmark = (marketId) => {
    const id = Number(marketId);
    setMarketBookmarks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const isMarketBookmarked = (marketId) => {
    const id = Number(marketId);
    return marketBookmarks.includes(id);
  };

  // Product methods
  const toggleProductBookmark = (productId) => {
    const id = Number(productId);
    setProductBookmarks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const isProductBookmarked = (productId) => {
    const id = Number(productId);
    return productBookmarks.includes(id);
  };

  return (
    <BookmarkContext.Provider
      value={{
        // Market
        marketBookmarks,
        toggleMarketBookmark,
        isMarketBookmarked,
        // Product
        productBookmarks,
        toggleProductBookmark,
        isProductBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmark must be used within a BookmarkProvider');
  }
  return context;
};

export default BookmarkContext;
