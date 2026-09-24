import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import ProductContext from "../context/ProductContext";

function HomeMarketSearchBox() {

    console.log("[HomeMarketSearchBox] Vừa vào hàm component HomeMarketSearchBox !");

    useEffect(() => {
        console.log("[HomeMarketSearchBox] đang chạy useEffect() của component HomeMarketSearchBox !");
        
        // hàm cleanup
        return () => {
            console.log("[HomeMarketSearchBox] đang chạy hàm cleanup của useEffect() !");
        };
    });

    const navigate = useNavigate();

    const [areaName, setAreaName] = useState("");
    const [produceName, setProduceName] = useState("");
    const [weekDay, setWeekDay] = useState("");

    function handleSubmitMarketSearchForm(event) {
        event.preventDefault();
        console.log("[handleSubmitMarketSearchForm] Calling function !");

        let areaNameStr = areaName.trim();
        let produceNameStr = produceName.trim();
        let weekDayStr = weekDay.trim();

        navigate("/markets?area=" + areaNameStr + "&produce=" + produceNameStr + "&weekDay=" + weekDayStr);
    }
   
    return (
        <>
            <form className="market-search home-market-search" onSubmit={handleSubmitMarketSearchForm}>
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
        </>
    )
}

export default HomeMarketSearchBox;
