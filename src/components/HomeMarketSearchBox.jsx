import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppContext from "../context/AppContext";

import { getAllCategories } from "../services/categoryService";

function HomeMarketSearchBox() {

    const { setUserLocation } = useContext(AppContext);

    console.log("[HomeMarketSearchBox] Vừa vào hàm component HomeMarketSearchBox !");

    useEffect(() => {
        console.log("[HomeMarketSearchBox] đang chạy useEffect() của component HomeMarketSearchBox !");
        
        // hàm cleanup
        return () => {
            console.log("[HomeMarketSearchBox] đang chạy hàm cleanup của useEffect() !");
        };
    });

    const navigate = useNavigate();

    const productCatesData = getAllCategories();
    console.log("Data cua productCatesData : ");
    console.log(productCatesData);

    const [productCategoryId, setProductCategoryId] = useState("");
    const [daysOfWeek, setDaysOfWeek] = useState([]);

    console.log("value hien tai cua bien useState daysOfWeek :");
    console.log(daysOfWeek);

    function handleSelectDaysOfWeek(event) {
        const selectedDaysOfWeek = Array.from(event.target.selectedOptions).map(option => option.value);

        console.log("[HomeMarketSearchBox - handleSelectDaysOfWeek] Data cua selectedDaysOfWeek :");
        console.log(selectedDaysOfWeek);
            
        setDaysOfWeek(selectedDaysOfWeek);
    }

    function handleSubmitMarketSearchForm(event) {
        event.preventDefault();
        console.log("[handleSubmitMarketSearchForm] Calling function !");

        // convert daysOfWeek to string sperated by comma
        let daysOfWeekStr = "";
        if (daysOfWeek.length > 0) {
            daysOfWeekStr = daysOfWeek.join(",");
        }

        setUserLocation(undefined);

        navigate("/markets?productCateId=" + productCategoryId + "&daysOfWeek=" + daysOfWeekStr);
    }
   
    return (
        <>
            <form className="market-search home-market-search" onSubmit={handleSubmitMarketSearchForm}>
                <div className="market-search-grid">
                    
                    <div className="market-field">
                        <label htmlFor="ddlProduceType">Produce Type</label>
                        <select id="ddlProduceType" value={productCategoryId} onChange={(event) => setProductCategoryId(event.target.value)}>
                            <option value="">All produce types</option>
                            {productCatesData.map((cateItem) => (
                                <option key={cateItem.id} value={cateItem.id}>
                                    {cateItem.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="market-field">
                        <label htmlFor="ddlWeekDays">Day</label>
                        <select id="ddlWeekDays" className="multiple-selectbox" value={daysOfWeek}
                        onChange={(event) => handleSelectDaysOfWeek(event)}
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
                    <button className="market-submit" type="submit">
                        Search Markets
                    </button>
                </div>
            </form>
        </>
    )
}

export default HomeMarketSearchBox;
