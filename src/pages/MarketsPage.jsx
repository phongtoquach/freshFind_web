import { Link, useSearchParams } from "react-router";
import { useEffect, useContext, useState, useRef } from 'react';

import "../assets/css/markets_page.css";

//import { websiteName } from "../config/app_configs";

//import ProductContext from "../context/ProductContext";
//import CartContext from "../context/CartContext";

//import ProductsGrid from "../components/ProductsGrid";

function MarketsPage() {
    console.log("[MarketsPage] Vừa vào hàm component MarketsPage !");

    return (
        <>
            <section className="section markets-container-section">
                <div className="container">
                    <h1>This is Markets page !</h1>
                </div>
            </section>
        </>
    )
}

export default MarketsPage;