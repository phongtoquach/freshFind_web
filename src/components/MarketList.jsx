import { useState } from "react";
import "../assets/css/ProductsSeasons.css";

function MarketList({ items = [] }) {
  const [activeMarketId, setActiveMarketId] = useState(null);

  if (!items || items.length === 0) {
    return <li>Không có chợ nào.</li>;
  }

  return (
    <>
      {items.map((market) => (
        <li key={market.id} className="li_market_item">
          <button
            className={`market_button ${activeMarketId === market.id ? "market_button_active" : ""}`}
            onClick={() => setActiveMarketId(market.id)}
          >
            <div className="rigtside_name">
              <span className="name_market">{market.name}</span>
              <span className="statusBadge">Opening</span>
            </div>
            <div className="time_container">
              <span>{market.location?.area || "Local area"}</span>
            </div>
            <div className="descrip_container">
              <p className="descrip_text">{market.description}</p>
            </div>
          </button>
        </li>
      ))}
    </>
  );
}

export default MarketList;
