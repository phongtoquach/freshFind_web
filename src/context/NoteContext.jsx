import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

const MARKET_STORAGE_KEY = "freshfind_notes";
const PRODUCT_STORAGE_KEY = "freshfind_product_notes";

export function NoteProvider({ children }) {
  const [marketNotes, setMarketNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(MARKET_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [productNotes, setProductNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(PRODUCT_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(MARKET_STORAGE_KEY, JSON.stringify(marketNotes));
  }, [marketNotes]);

  useEffect(() => {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(productNotes));
  }, [productNotes]);

  // Market methods
  const getNotesByMarketId = (marketId) => {
    const id = Number(marketId);
    return marketNotes[id] || [];
  };

  const addMarketNote = (marketId, text) => {
    if (!text.trim()) return;
    const id = Number(marketId);
    const newNote = {
      id: Date.now().toString(),
      text: text.trim(),
    };
    setMarketNotes((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newNote],
    }));
  };

  const deleteMarketNote = (marketId, noteId) => {
    const id = Number(marketId);
    setMarketNotes((prev) => {
      const currentNotes = prev[id] || [];
      const filteredNotes = currentNotes.filter((note) => note.id !== noteId);
      return {
        ...prev,
        [id]: filteredNotes,
      };
    });
  };

  // Product methods
  const getNotesByProductId = (productId) => {
    const id = Number(productId);
    return productNotes[id] || [];
  };

  const addProductNote = (productId, text) => {
    if (!text.trim()) return;
    const id = Number(productId);
    const newNote = {
      id: Date.now().toString(),
      text: text.trim(),
    };
    setProductNotes((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newNote],
    }));
  };

  const deleteProductNote = (productId, noteId) => {
    const id = Number(productId);
    setProductNotes((prev) => {
      const currentNotes = prev[id] || [];
      const filteredNotes = currentNotes.filter((note) => note.id !== noteId);
      return {
        ...prev,
        [id]: filteredNotes,
      };
    });
  };

  return (
    <NoteContext.Provider
      value={{
        // Market
        getNotesByMarketId,
        addMarketNote,
        deleteMarketNote,
        // Product
        getNotesByProductId,
        addProductNote,
        deleteProductNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNote must be used within a NoteProvider');
  }
  return context;
};

export default NoteContext;
