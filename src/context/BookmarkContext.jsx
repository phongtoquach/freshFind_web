import { createContext, useEffect, useState } from "react";

const BookmarkContext = createContext();

const STORAGE_KEY = "freshfind_bookmarks";

export function BookmarkProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = (marketId) => {
    const id = Number(marketId);
    setBookmarkedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const isBookmarked = (marketId) => {
    const id = Number(marketId);
    return bookmarkedIds.includes(id);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedIds, toggleBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;