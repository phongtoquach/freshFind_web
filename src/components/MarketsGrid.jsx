import { useEffect } from "react";
import { Link } from "react-router-dom";

import { getMarketsByFilters, sortMarketsByType } from "../services/marketService";


function MarketsGrid({ filters, sortType, userCurrentLocation, limit, showMarketsCount }) {

    console.log("[MarketsGrid] Vừa vào hàm component ProductsGrid !");

    useEffect(() => {
        console.log("[MarketsGrid] đang chạy useEffect() của component ProductsGrid !");
            
        // hàm cleanup
        return () => {
            console.log("[MarketsGrid] đang chạy hàm cleanup của useEffect() !");
        };
    });

    console.log("[MarketsGrid] component MarketsGrid render !");

    console.log("[MarketsGrid] userCurrentLocation vua truyen vao : ", userCurrentLocation);

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
    let finalSortType = "nearest_first";
    if (sortType) {
        console.log("[MarketsGrid] co truyen vao sortType : " + sortType);
        finalSortType = sortType.trim();
    }
    console.log("[MarketsGrid] finalSortType : " + finalSortType);
    
    // THUC HIEN SORT
    let sortedFilteredMarketsList = sortMarketsByType(filteredMarketsList, finalSortType, userCurrentLocation); 
    console.log("[MarketsGrid] Data cua sortedFilteredMarketsList :");
    console.log(sortedFilteredMarketsList);

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
                                                    <img src="/images/location-mark.png" alt={market.location.area}/>
                                                    {market.location.area}
                                                </p>
                                                <p className="market-address">
                                                    <img src="/images/gps-icon.png" alt={market.location.address}/>
                                                    <span>{market.location.address}</span>
                                                </p>
                                                <div className="market-operating-schedule">
                                                    <img src="/images/schedule-icon.png" alt="schedule"/>
                                                    <div>
                                                        {
                                                            (!Array.isArray(market.schedule) || market.schedule.length == 0) ? "No schedule" : (
                                                                market.schedule.map((weekDayItem) => {
                                                                    if (weekDayItem.open === true) {
                                                                        return (
                                                                            <p key={market.id + "-" + weekDayItem.day}>{weekDayItem.day} ({weekDayItem.hours.start} - {weekDayItem.hours.end})</p>
                                                                        )
                                                                    }
                                                                })
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="badge-list">
                                                    <span>Vegetables</span><span>Fruit</span><span>Herbs</span>
                                                </div>
                                                <div className="market-card-footer">
                                                    <Link to={`/markets/${market.id}/${market.slug}`}>
                                                        View Details
                                                    </Link>
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