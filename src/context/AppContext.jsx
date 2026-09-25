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

    const [userLocation, setUserLocation] = useState(undefined);

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

    // function getUserCurrentLocation() {
    //     return userLocationRef.current;
    // }

    function refreshUserCurrentLocation() {
        console.log("[AppProvider - refreshUserCurrentLocation] Dang chạy refreshUserCurrentLocation() !");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("[AppProvider - refreshUserCurrentLocation] Da lay duoc position !");
                console.log("[AppProvider - refreshUserCurrentLocation] latitude : " + position.coords.latitude);
                console.log("[AppProvider - refreshUserCurrentLocation] longitude : " + position.coords.longitude);

                setUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                console.log("[AppProvider - refreshUserCurrentLocation] Khong lay duoc position ! Dat lich set value cua bien useState userLocation thanh null !");
                console.log(error);
                setUserLocation(null);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 5000,
            }
        );
    }

    return (
        <AppContext.Provider value={{ userLocation, refreshUserCurrentLocation }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;