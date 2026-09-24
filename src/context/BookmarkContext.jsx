import { createContext,  useEffect, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {

    console.log("[BookmarkProvider] Vừa vào hàm provider : BookmarkProvider !");
    

    useEffect(() => {
        console.log("[BookmarkProvider] đang chạy useEffect() test !");
            
        // hàm cleanup
        return () => {
            console.log("[BookmarkProvider] đang chạy hàm cleanup của useEffect() test !");
        };
    });

    console.log("[BookmarkProvider] BookmarkProvider được render !");

    return (
        <BookmarkContext.Provider value={{ }}>
            {children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkContext;