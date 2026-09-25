import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { getMarketsByFilters } from "../services/marketService";


function MarketsGrid({ filters, sortType, limit, showMarketsCount }) {

    console.log("[MarketsGrid] Vừa vào hàm component ProductsGrid !");

    useEffect(() => {
        console.log("[MarketsGrid] đang chạy useEffect() của component ProductsGrid !");
            
        // hàm cleanup
        return () => {
            console.log("[MarketsGrid] đang chạy hàm cleanup của useEffect() !");
        };
    });

    console.log("[MarketsGrid] component MarketsGrid render !");

    console.log("[MarketsGrid] filters vua truyen vao :");
    console.log(filters);

    // check filters
    let filtersData = {
        areaName: "",
        productCateId: 0,
        daysOfWeek: []
    };
    if (filters && typeof filters === "object" && filters !== null && !Array.isArray(filters)) {
        console.log("[MarketsGrid] filters la object");
        filtersData = filters;
    }
    else {
        console.log("[MarketsGrid] filters khong phai la object ! Su dung filtersData goc !");
    }

    console.log("[MarketsGrid] filtersData cuoi cung :");
    console.log(filtersData);

    // THUC HIEN SEARCH
    let filteredMarketsList = getMarketsByFilters(filtersData);

    // check sortType
    // let finalSortType = "";
    // if (sortType) {
    //     console.log("[ProductsGrid] co truyen vao sortType : " + sortType);
    //     finalSortType = sortType.trim();
    // }
    // console.log("[ProductsGrid] finalSortType : " + finalSortType);
    
    // THUC HIEN SORT
    // let sortedFilteredProductsList = sortProductsByType(filteredProductsList, finalSortType); 
    // console.log("[ProductsGrid] Data cua sortedFilteredProductsList :");
    // console.log(sortedFilteredProductsList);

    // check prop limit
    // console.log("[ProductsGrid] prop limit duoc truyen vao : " + limit);
    // if (limit) {
    //     let limitVal = Number(limit);
    //     if (Number.isNaN(limitVal)) {
    //         console.log("[ProductsGrid] prop limit khong phai number !");
    //         limitVal = 0;
    //     }

    //     if (limitVal > 0) {
    //         console.log("[ProductsGrid] limitVal = " + limitVal + ". chuan bi slice !");
    //         sortedFilteredProductsList = sortedFilteredProductsList.slice(0, limitVal);
    //     }
    // }

    let sortedFilteredMarketsList = filteredMarketsList;

    console.log("[MarketsGrid] Data cua sortedFilteredMarketsList : ",sortedFilteredMarketsList);

    return (
        <div className="markets-grid-section">            
            {
                sortedFilteredMarketsList.length === 0 ? (
                    <p>No any market found.</p>
                ) : (
                    <>
                        {
                            (showMarketsCount && Number(showMarketsCount) === 1) &&
                                (
                                    <div className="directory-toolbar">
                                        <p><strong>{sortedFilteredMarketsList.length}</strong> markets found</p>
                                    </div>
                                )
                        }

                        <div className="market-grid">
                            {
                                sortedFilteredMarketsList.map((market) => {
                                    return (
                                        <div className="market-card" key={market.id} data-marketid={market.id}>
                                            <div className="market-image-wrap">
                                                <img alt="Riverside Green Market fresh produce market" src="/images/fresh-produce-banner.jpg"/>
                                            </div>
                                            <div className="market-card-content">
                                                <h3>{market.name} - {market.id}</h3>
                                                <p className="market-area">
                                                    {market.location.area}
                                                </p>
                                                <p className="market-address">
                                                    {market.location.address}
                                                </p>
                                                <p>

                                                </p>
                                                <div className="badge-list">
                                                    <span>Vegetables</span><span>Fruit</span><span>Herbs</span>
                                                </div>
                                                <div className="market-card-footer">
                                                    <button type="button">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        
                    </>
                )
            }
        </div>
    )
}

export default MarketsGrid;