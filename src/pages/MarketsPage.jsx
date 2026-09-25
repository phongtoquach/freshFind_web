import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';

//import "../assets/css/markets_page.css";

//import { websiteName } from "../config/app_configs";

import AppContext from "../context/AppContext";

import { getAllCategories } from "../services/categoryService";

import MarketsGrid from "../components/MarketsGrid";

function MarketsPage() {
    const { userLocation, refreshUserCurrentLocation } = useContext(AppContext);

    console.log("[MarketsPage] Vừa vào hàm component MarketsPage !");

    // check URL params
    const [searchParams] = useSearchParams();
    // get productCateId param
    const productCateIdVal = searchParams.get("productCateId");
    console.log("[MarketsPage] Original URL param productCateId : " + productCateIdVal);
    // get daysOfWeek param
    const daysOfWeekParamVal = searchParams.get("daysOfWeek");
    console.log("[MarketsPage] Original URL param daysOfWeek: " + daysOfWeekParamVal);

    // hanlde URL param productCateId
    let productCateIdParam = 0;
    if (productCateIdVal !== null) {
        if (Number(productCateIdVal) > 0) {
            console.log("[MarketsPage] productCateIdVal > 0 !");
            productCateIdParam = Number(productCateIdVal);
        }
    }
    console.log("[MarketsPage] Final productCateId param : " + productCateIdParam);

    // hanlde URL param daysOfWeek
    let daysOfWeekParam = "";
    if (daysOfWeekParamVal !== null) {
        daysOfWeekParam = daysOfWeekParamVal.trim();
    }
    console.log("[MarketsPage] Final daysOfWeekParam param : " + daysOfWeekParam);
    // convert daysOfWeekParam str to array
    let daysOfWeekArr = [];
    if (daysOfWeekParam !== "") {
        daysOfWeekArr = daysOfWeekParam.split(",");
    }

    const defaultFiltersFormData = {
        areaName: "",
        productCateId: productCateIdParam,
        daysOfWeek: daysOfWeekArr
    };

    //console.log("[MarketsPage] Data của defaultFiltersFormData : ");
    //console.log(defaultFiltersFormData);

    console.log("[MarketsPage] Here is before the line declaring useState filtersFormData !");
    const [filtersFormData, setFiltersFormData] = useState(defaultFiltersFormData);

    console.log("[MarketsPage] Here is before the line declaring useState sortOption !");
    const [sortOption, setSortOption] = useState("nearest_first");

    console.log("[MarketsPage] Value hien tai cua bien useState filtersFormData : ");
    console.log(filtersFormData);

    // copy value hiện tại của biến useState filtersFormData ra 1 object moi
    const filtersData = {...filtersFormData};
    console.log("[MarketsPage] value của biến filtersData (copy từ biến useState filtersFormData) :");
    console.log(filtersData);

    console.log("[MarketsPage] Value hien tai cua bien useState sortOption : " + sortOption);
    const sortTypeStr = sortOption;

    const productCatesData = getAllCategories();

    useEffect(() => {
        console.log("[MarketsPage] đang chạy useEffect() của component MarketsPage !");
        
        // hàm cleanup
        return () => {
            console.log("[MarketsPage] đang chạy hàm cleanup của useEffect() !");
        };
    });

    useEffect(() => {
        console.log("[MarketsPage] đang chạy useEffect() gọi refreshUserCurrentLocation !");

        refreshUserCurrentLocation();
    }, []);

    console.log("[MarketsPage] Value hien tai cua bien useState userLocation : ");
    console.log(userLocation);

    if (userLocation === undefined) {
        console.log("[MarketsPage] Đang lấy user current location ! Only show Loading text !");
        return (
            <div style={{ textAlign: "center" }}>Loading...</div>
        )
    }

    function handleChangeFilterInput(attrKey, e) {
        console.log("[handleChangeFilterInput] Calling handleChangeFilterInput() ! attrKey : " + attrKey);

        console.log("[handleChangeFilterInput] Đặt lịch set value của biến useState filtersFormData !");
        setFiltersFormData(currentFiltersFormData => {
            console.log("[handleChangeFilterInput - setFiltersFormData] attrKey : " + attrKey);
            console.log("[handleChangeFilterInput - setFiltersFormData] Data cua currentFiltersFormData :");
			console.log(currentFiltersFormData);

            let inputVal = "";
            if (attrKey === "daysOfWeek") {
                inputVal = Array.from(e.target.selectedOptions).map(option => option.value);

                console.log("[handleChangeFilterInput - setFiltersFormData] Data cua daysOfWeek da duoc chon : ", inputVal);
            }
            else {
                inputVal = e.target.value;
                console.log("[handleChangeFilterInput - setFiltersFormData] inputVal cua input binh thuong : ", inputVal);
            }
            
			let newFiltersFormData = { ...currentFiltersFormData, [attrKey]: inputVal };
			
			console.log("[handleChangeFilterInput - setFiltersFormData] Data cua newFiltersFormData :");
			console.log(newFiltersFormData);

			return newFiltersFormData;
		});
    }

    const userCurrentLocationObj = {...userLocation};
    
    return (
        <>
            <main id="home">
                <section className="market-section section" id="markets">
                    <div className="container">
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <span aria-hidden="true"> / </span>
                            <span aria-current="page">Markets</span>
                        </nav>
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
                                            <input id="txtAreName" type="text" value={filtersFormData.areaName} onChange={(event) => handleChangeFilterInput("areaName", event)} placeholder="Downtown"/>
                                        </div>

                                        <div className="market-field">
                                            <label htmlFor="ddlProduceType">Produce Type</label>
                                            <select id="ddlProduceType" value={filtersFormData.productCateId} onChange={(event) => handleChangeFilterInput("productCateId", event)}>
                                                <option value="">All produce types</option>
                                                {productCatesData.map((cateItem) => (
                                                    <option key={cateItem.id} value={cateItem.id}>
                                                        {cateItem.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="market-field">
                                            <label htmlFor="ddlWeekDays">Days of week</label>
                                            <select id="ddlWeekDays" className="multiple-selectbox" value={filtersFormData.daysOfWeek}
                                            onChange={(event) => handleChangeFilterInput("daysOfWeek", event)}
                                            multiple={true} size="7">
                                                {/* <option value="">Any day</option> */}
                                                <option value="mon">Monday</option>
                                                <option value="tue">Tuesday</option>
                                                <option value="wed">Wednesday</option>
                                                <option value="thu">Thursday</option>
                                                <option value="fri">Friday</option>
                                                <option value="sat">Saturday</option>
                                                <option value="sun">Sunday</option>
                                            </select>
                                        </div>

                                        <div className="market-field">
                                            <label htmlFor="ddlSortOption">Sort by</label>
                                            <select id="ddlSortOption" value={sortTypeStr} onChange={(event) => setSortOption(event.target.value)}>
                                                <option value="nearest_first">Nearest First</option>
                                                <option value="name_asc">Name A-Z</option>
                                                <option value="name_desc">Name Z-A</option>
                                                <option value="open_next_day">Open next day</option>
                                            </select>
                                        </div>

                                        <button className="market-submit" type="submit">
                                            Search Markets
                                        </button>
                                    </div>
                                </form>
                            </aside>
                            <div className="directory-results">
                                <MarketsGrid filters={filtersData} sortType={sortTypeStr} userCurrentLocation={userCurrentLocationObj} showMarketsCount={1} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MarketsPage;