import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useContext, useState, useRef } from 'react';

//import "../assets/css/market_details_page.css";

import AppContext from "../context/AppContext";
//import CartContext from "../context/CartContext";

import HomeMarketSearchBox from "../components/HomeMarketSearchBox";
import MarketsGrid from "../components/MarketsGrid";

function Home() {
    const { userLocation, refreshUserCurrentLocation } = useContext(AppContext);

    console.log("[Home] Vừa vào hàm component Home !");

    useEffect(() => {
        console.log("[Home] đang chạy useEffect() của component Home !");
        
        // hàm cleanup
        return () => {
            console.log("[Home] đang chạy hàm cleanup của useEffect() !");
        };
    });

    useEffect(() => {
        console.log("[Home] đang chạy useEffect() gọi AppProvider.refreshUserCurrentLocation !");

        refreshUserCurrentLocation();
    }, []);

    console.log("[Home] Value hien tai cua bien useState userLocation : ");
    console.log(userLocation);

    if (userLocation === undefined) {
        console.log("[Home] Đang lấy user current location ! Only show loadng text !");
        return (
            <div style={{ textAlign: "center" }}>Loading...</div>
        )
    }

    const userCurrentLocationObj = {...userLocation};
    
    return (
        <>
            <main id="home">
                <section className="home-hero" aria-label="Find fresh markets">
                    <div className="container">
                        <HomeMarketSearchBox/>
                    </div>
                </section>

                <section className="products-section section" id="produce">
                    <div className="container">
                        <div className="section-heading">
                            <h2 className="section-title">Nearby Markets</h2>
                        </div>

                        <MarketsGrid sortType="nearest_first" userCurrentLocation={userCurrentLocationObj} />

                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;