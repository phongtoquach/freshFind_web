import { createContext,  useEffect, useState, useRef } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

    console.log("[AppProvider] Vừa vào hàm provider : AppProvider !");
    

    useEffect(() => {
        console.log("[AppProvider] đang chạy useEffect() test !");
            
        // hàm cleanup
        return () => {
            console.log("[AppProvider] đang chạy hàm cleanup của useEffect() test !");
        };
    });

    console.log("[AppProvider] AppProvider được render !");

    const userLocationRef = useRef(null);

    function refreshUserLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error("Geolocation is not supported."));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };

                    userLocationRef.current = location;

                    resolve(location);
                },
                (error) => {
                    reject(error);
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 60000,
                    timeout: 5000,
                }
            );
        });
    }

    function getUserCurrentLocation() {
        return userLocationRef.current;
    }

    return (
        <AppContext.Provider value={{ }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;