import { Link, useSearchParams } from "react-router";
import { useEffect, useContext, useState, useRef } from 'react';

import "../assets/css/market_details_page.css";

//import { websiteName } from "../config/app_configs";

//import ProductContext from "../context/ProductContext";
//import CartContext from "../context/CartContext";

//import ProductsGrid from "../components/ProductsGrid";

function MarketDetailsPage() {
    console.log("[MarketDetailsPage] Vừa vào hàm component MarketDetailsPage !");

    return (
        <>
            <section className="section markets-container-section">
                <div className="container">
                    <h1>This is Market Details page !</h1>
                </div>
            </section>
        </>
    )
}

export default MarketDetailsPage;