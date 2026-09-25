import "../assets/css/ProductsSeasons.css";

function MarketList() {
  return (
    <li className="li_market_item">
      <button className="market_button">
        <div className="rigtside_name">
          <span className="name_market">Chợ Đà Lạt</span>
          <span className="statusBadge">Opening</span>
        </div>
        <div className="time_container">
          <span>05:00 - 20:00</span>
        </div>
        <div className="descrip_container">
          <p className="descrip_text">Trái cây Miền Nam, đặc sản</p>
        </div>
      </button>
    </li>
  );
}

export default MarketList;
