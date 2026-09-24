import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useContext, useState, useRef } from 'react';

//import "../assets/css/markets_page.css";

//import { websiteName } from "../config/app_configs";

//import ProductContext from "../context/ProductContext";
//import CartContext from "../context/CartContext";

//import ProductsGrid from "../components/ProductsGrid";

function MarketsPage() {
    console.log("[MarketsPage] Vừa vào hàm component MarketsPage !");

    const [areaName, setAreaName] = useState("");
    const [produceName, setProduceName] = useState("");
    const [weekDay, setWeekDay] = useState("");

    return (
        <>
            <main id="home">
                <section className="market-section section" id="markets">
                    <div className="container">
                        <div className="section-heading">
                            <h2 className="section-title">Market Directory</h2>
                        </div>
                        <div className="directory-layout">
                            <aside className="filter-sidebar" aria-label="Market filters">
                                <form className="market-search">
                                    <h3>Quick Find</h3>
                                    <div className="market-search-grid">
                                        <div className="market-field">
                                            <label htmlFor="txtAreName">Area</label>
                                            <input id="txtAreName" type="text" value={areaName} onChange={(event) => setAreaName(event.target.value)} placeholder="Downtown"/>
                                        </div>

                                        <div className="market-field">
                                            <label htmlFor="txtProduceName">Produce</label>
                                            <input id="txtProduceName" type="text" value={produceName} onChange={(event) => setProduceName(event.target.value)} placeholder="Tomatoes"/>
                                            {/* <select id="home-produce">
                                                <option value="">All produce</option>
                                                <option value="Bakery">Bakery</option>
                                                <option value="Dairy">Dairy</option>
                                                <option value="Eggs">Eggs</option>
                                                <option value="Flowers">Flowers</option>
                                                <option value="Fruit">Fruit</option>
                                                <option value="Herbs">Herbs</option>
                                                <option value="Organic">Organic</option>
                                                <option value="Seafood">Seafood</option>
                                                <option value="Tropical">Tropical</option>
                                                <option value="Vegetables">Vegetables</option>
                                            </select> */}
                                        </div>

                                        <div className="market-field">
                                            <label htmlFor="ddlWeekDays">Day</label>
                                            <select id="ddlWeekDays" value={weekDay} onChange={(event) => setWeekDay(event.target.value)}>
                                                <option value="">Any day</option>
                                                <option value="mon">Monday</option>
                                                <option value="tue">Tuesday</option>
                                                <option value="wed">Wednesday</option>
                                                <option value="thu">Thursday</option>
                                                <option value="fri">Friday</option>
                                                <option value="sat">Saturday</option>
                                                <option value="sun">Sunday</option>
                                            </select>
                                        </div>
                                        <button className="market-submit" type="submit">
                                            Search Markets
                                        </button>
                                    </div>
                                </form>
                            </aside>
                            <div className="directory-results">
                                <div className="directory-toolbar">
                                    <p><strong>6</strong> markets found</p>
                                </div>

                                <div className="market-grid">
                                    <div className="market-card">
                                        <div className="market-image-wrap">
                                            <button
                                            className="card-bookmark"
                                            type="button"
                                            aria-label="Add Riverside Green Market bookmark"
                                            >
                                            </button>
                                        </div>
                                        <div className="market-card-content">
                                            <p className="market-area">
                                                Riverside
                                            </p>
                                            <h3>Riverside Green Market</h3>
                                            <p className="market-address">
                                                12 Riverside Walk, FreshFind City
                                            </p>
                                            <div className="badge-list">
                                                <span>Vegetables</span><span>Fruit</span><span>Herbs</span>
                                            </div>
                                            <div className="market-card-footer">
                                                <button type="button">View Details</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="market-card">
                                        <div className="market-image-wrap">
                                            <button
                                            className="card-bookmark"
                                            type="button"
                                            aria-label="Add Riverside Green Market bookmark"
                                            >
                                            </button>
                                        </div>
                                        <div className="market-card-content">
                                            <p className="market-area">
                                                Riverside
                                            </p>
                                            <h3>Riverside Green Market</h3>
                                            <p className="market-address">
                                                12 Riverside Walk, FreshFind City
                                            </p>
                                            <div className="badge-list">
                                                <span>Vegetables</span><span>Fruit</span><span>Herbs</span>
                                            </div>
                                            <div className="market-card-footer">
                                                <button type="button">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MarketsPage;