import { useEffect } from "react";
import { Link } from "react-router-dom";

import { getProductsByFilters } from "../services/productService";
import { getMarketsByFilters, sortMarketsByType, calculateDistance } from "../services/marketService";

import { truncateDescription } from "../utils/textUtils";
import { getWeekDayDescByKey, getMonthDescByMonthNo } from "../utils/dateTimeUtils";


function ProducesGrid({ getByCurrentMonth, filters, limit }) {

    console.log("[ProducesGrid] Vừa vào hàm component ProducesGrid !");

    useEffect(() => {
        console.log("[ProducesGrid] đang chạy useEffect() của component ProducesGrid !");
            
        // hàm cleanup
        return () => {
            console.log("[ProducesGrid] đang chạy hàm cleanup của useEffect() !");
        };
    });

    console.log("[ProducesGrid] component ProducesGrid render !");

    

    console.log("[ProducesGrid] filters vua truyen vao :");
    console.log(filters);

    // check filters
    let filtersData = {
        availableMonth: 0
        //productCateId: 0
    };
    if (filters && typeof filters === "object" && filters !== null && !Array.isArray(filters)) {
        console.log("[ProducesGrid] filters la object");
        filtersData = filters;
    }
    else {
        console.log("[ProducesGrid] filters khong phai la object ! Su dung filtersData goc !");
    }

    console.log("[ProducesGrid] filtersData :");
    console.log(filtersData);

    // check attr : getByCurrentMonth
    console.log("[ProducesGrid] getByCurrentMonth attr : ", getByCurrentMonth);
    if (getByCurrentMonth && Number(getByCurrentMonth) === 1) {
        console.log("[ProducesGrid] getByCurrentMonth = 1 ! Chi lay product co available trong thang hien tai !");
        const nowObj = new Date();
        console.log("[ProducesGrid] getByCurrentMonth = 1 - month index : " + nowObj.getMonth());
        filtersData.availableMonth = nowObj.getMonth() + 1;
    }

    console.log("[ProducesGrid] filtersData sau cung :");
    console.log(filtersData);

    // THUC HIEN SEARCH
    let filteredProductsList = getProductsByFilters(filtersData);

    // return (
    //     <>
    //         <div>test produces grid</div>
    //     </>
    // );

    return (
        <div className="markets-grid-section">            
            {
                filteredProductsList.length === 0 ? (
                    <p>No any product found.</p>
                ) : (
                    <>
                        <div className="market-grid">
                            {
                                filteredProductsList.map((product) => {
                                    // get available months
                                    let avaiMonths_str = "";
                                    if (Array.isArray(product.availableMonths) && product.availableMonths.length > 0) {
                                        let productAvaiMonthsDescArr = [];
                                        product.availableMonths.forEach((avaiMonthNo) => {
                                            const avaiMonthDesc = getMonthDescByMonthNo(avaiMonthNo);
                                            productAvaiMonthsDescArr.push(avaiMonthDesc);
                                        });

                                        avaiMonths_str = productAvaiMonthsDescArr.join(", ");
                                    }
                                    else {
                                        avaiMonths_str = "Year round";
                                    }

                                    // get markets which have this product
                                    console.log("[ProducesGrid] Product " + product.id + " - category id : " + product.categoryId);
                                    const marketsListByProCateId = getMarketsByFilters({
                                        productCateId: product.categoryId
                                    });
                                    console.log("[ProducesGrid] Product " + product.id + " - Data cua marketsListByProCateId : ", marketsListByProCateId);

                                    return (
                                        <div className="market-card" key={product.id} data-marketid={product.id}>
                                            <div className="market-image-wrap">
                                                {
                                                    (product.image && product.image !== "") ? (
                                                        <img src={product.image} alt={product.name} />
                                                    ) : (
                                                        <img src="/images/market_default_image.jpg"/>
                                                    )
                                                }
                                            </div>
                                            <div className="market-card-content">
                                                <h3>{product.name} - {product.id}</h3>
                                                {/* <p className="market-desc">{ truncateDescription(product.description, 50) }</p> */}
                                                
                                                <p><b>Available Months :</b> {avaiMonths_str}</p>

                                                <div className="market-operating-schedule">
                                                    <img src="/images/market-icon.png" alt={product.name}/>
                                                    <div className="markets-list">
                                                        {
                                                            (!Array.isArray(marketsListByProCateId) || marketsListByProCateId.length == 0) ? "No any market available" : (
                                                                marketsListByProCateId.map((marketObj) => {
                                                                    return (
                                                                        <p key={product.id + "-" + marketObj.id}><Link to={ "/markets/" + marketObj.id + "/" + marketObj.slug }>{marketObj.name}</Link></p>
                                                                    )
                                                                })
                                                            )
                                                        }
                                                    </div>
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

export default ProducesGrid;