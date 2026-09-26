import { useNavigate } from "react-router-dom";
import "../assets/css/ProductsSeasons.css";

function MarketList({ items = [], products = [], activeMonth }) {
  const navigate = useNavigate();

  if (!items || items.length === 0) {
    return <li>Không có chợ nào.</li>;
  }

  // Lấy các sản phẩm của market có trong tháng đang chọn (availableMonths rỗng = có quanh năm)
  const getMarketProductsForMonth = (market) => {
    return products.filter(p =>
      market.productIds.includes(p.id) &&
      (
        activeMonth === null ||
        !p.availableMonths ||
        p.availableMonths.length === 0 ||
        p.availableMonths.includes(activeMonth)
      )
    );
  };

  return (
    <>
      {items.map((market) => {
        const marketProducts = getMarketProductsForMonth(market);
        return (
          <li key={market.id} className="li_market_item">
            <button
              className="market_button"
              onClick={() => navigate(`/markets/${market.id}/${market.slug}`)}
            >
              <div className="rigtside_name">
                <span className="name_market">{market.name}</span>
              </div>
              <div className="time_container">
                <span>{market.location?.area || "Local area"}</span>
              </div>
              <div className="descrip_container">
                <p className="descrip_text">{market.description}</p>
              </div>
              {marketProducts.length > 0 && (
                <div className="descrip_produtc">
                  {marketProducts.map(product => (
                    <span key={product.id} className="descrip_produtc_item">
                      {product.name}
                    </span>
                  ))}
                </div>
              )}
            </button>
          </li>
        );
      })}
    </>
  );
}

export default MarketList;
