import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useContext, useState, useRef } from 'react';

//import "../assets/css/market_details_page.css";

//import { websiteName } from "../config/app_configs";

import AppContext from "../context/AppContext";
//import CartContext from "../context/CartContext";

import HomeMarketSearchBox from "../components/HomeMarketSearchBox";

function Home() {
    const { refreshUserLocation } = useContext(AppContext);

    console.log("[Home] Vừa vào hàm component Home !");

    useEffect(() => {
        console.log("[Home] đang chạy useEffect() của component Home !");
        
        // hàm cleanup
        return () => {
            console.log("[Home] đang chạy hàm cleanup của useEffect() !");
        };
    });

    


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
                            <h2 className="section-title">Food Products</h2>
                        </div>
                        <div className="product-grid">
                            <article className="product-card">
                                <img
                                alt="Khajur premium dry food"
                                src="https://images.unsplash.com/photo-1774334136128-bfdecc1c6446?"
                                />
                                <h3>Khajur</h3>
                                <p className="product-category">Fruit</p>
                                <p className="product-price">$15.00</p>
                                <p>
                                Naturally sweet, soft dates packed with energy and essential
                                nutrients.
                                </p>
                                <Link className="text-link">Find at a market <span aria-hidden="true">→</span></Link>
                            </article>
                            <article className="product-card">
                                <img
                                alt="Qismis premium dry food"
                                src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?"
                                />
                                <h3>Qismis</h3>
                                <p className="product-category">Fruit</p>
                                <p className="product-price">$12.00</p>
                                <p>
                                Sun-dried raisins with a rich flavor, perfect for snacking and
                                baking.
                                </p>
                                <Link className="text-link">Find at a market <span aria-hidden="true"></span></Link>
                            </article>
                            <article className="product-card">
                                <img
                                alt="Fig premium dry food"
                                src="https://images.unsplash.com/photo-1536511397145-ad62741fdf3c?"
                                />
                                <h3>Fig</h3>
                                <p className="product-category">Fruit</p>
                                <p className="product-price">$18.00</p>
                                <p>
                                Premium dried figs, naturally delicious and a wholesome source of
                                fiber.
                                </p>
                                <Link className="text-link"
                                >Find at a market <span aria-hidden="true">→</span></Link>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;