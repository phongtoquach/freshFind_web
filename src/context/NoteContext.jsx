import { createContext, useEffect, useState } from "react";

const NoteContext = createContext();

const STORAGE_KEY = "freshfind_notes";

export function NoteProvider({ children }) {
  const [notesData, setNotesData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
  }, [notesData]);

  const getNotesByMarketId = (marketId) => {
    const id = Number(marketId);
    return notesData[id] || [];
  };

  const addNote = (marketId, text) => {
    if (!text.trim()) return;
    
    const id = Number(marketId);
    const newNote = {
      id: Date.now().toString(), // Unique ID based on timestamp
      text: text.trim()
    };

    setNotesData((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), newNote],
    }));
  };

  const deleteNote = (marketId, noteId) => {
    const id = Number(marketId);
    setNotesData((prev) => {
      const currentNotes = prev[id] || [];
      const filteredNotes = currentNotes.filter((note) => note.id !== noteId);
      
      return {
        ...prev,
        [id]: filteredNotes,
      };
    });
  };

  return (
    <NoteContext.Provider value={{ getNotesByMarketId, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContext;