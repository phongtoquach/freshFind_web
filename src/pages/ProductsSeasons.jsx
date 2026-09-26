import "../assets/css/style.css";
import "../assets/css/ProductsSeasons.css";
import { useProductsSeason } from "../context/ProductsSeasonContext";
import ProductList from "../components/ProductList";
import MarketList from "../components/MarketList";
import { useState, useMemo } from "react";

function ProductsSeasons() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    products,
    markets,
    seasons,
    isLoading,
    activeSeasonId,
    setActiveSeasonId,
    currentSeason,
    activeMonth,
    setActiveMonth,
  } = useProductsSeason();

  if (isLoading) return <div>Loading...</div>;

  // Handler khi click vào tháng
  const handleMonthClick = (month) => {
    setActiveMonth(activeMonth === month ? null : month);
  };

  // Handler khi click vào All
  const handleAllClick = () => {
    setActiveMonth(null);
  };

  const formatDuration = (startMonth, endMonth) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!startMonth || !endMonth) return "";
    return `${months[startMonth - 1]} to ${months[endMonth - 1]}`;
  };

  // Logic lọc sản phẩm theo tháng và từ khóa tìm kiếm
  const filteredProducts = useMemo(() => {
    const lowerTerm = searchTerm.toLowerCase().trim();

    return products.filter((product) => {
      // Điều kiện 1: Lọc theo tháng (nếu activeMonth === null thì hiển thị tất cả)
      const matchesMonth =
        activeMonth === null ||
        product.availableMonths.includes(activeMonth);

      // Điều kiện 2: Khớp từ khóa (tìm trong tên hoặc mô tả)
      const matchesSearch =
        !lowerTerm ||
        product.name.toLowerCase().includes(lowerTerm) ||
        product.description.toLowerCase().includes(lowerTerm);

      return matchesMonth && matchesSearch;
    });
  }, [products, activeMonth, searchTerm]);

  // Logic lọc chợ liên quan đến các sản phẩm đã được lọc ở trên
  const relatedMarkets = useMemo(() => {
    // Lấy tập hợp ID của các sản phẩm đang hiển thị
    const validProductIds = new Set(filteredProducts.map((p) => p.id));

    // Chỉ giữ lại những chợ có bán ít nhất 1 sản phẩm trong danh sách trên
    return markets.filter((market) =>
      market.productIds.some((id) => validProductIds.has(id)),
    );
  }, [markets, filteredProducts]);

  return (
    <div className="Container_Product">
      <div className="Navbar_Container">
        <div className="Navbar_Season">
          <h1 className="header_season">Seasonal produce</h1>
          <ul className="ul_Season_list">
            <li className={`li_season_item ${activeMonth === null ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={handleAllClick}>All</button>
            </li>
            <li className={`li_season_item ${activeMonth === 1 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(1)}>Jan</button>
            </li>
            <li className={`li_season_item ${activeMonth === 2 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(2)}>Feb</button>
            </li>
            <li className={`li_season_item ${activeMonth === 3 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(3)}>Mar</button>
            </li>
            <li className={`li_season_item ${activeMonth === 4 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(4)}>Apr</button>
            </li>
            <li className={`li_season_item ${activeMonth === 5 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(5)}>May</button>
            </li>
            <li className={`li_season_item ${activeMonth === 6 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(6)}>Jun</button>
            </li>
            <li className={`li_season_item ${activeMonth === 7 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(7)}>Jul</button>
            </li>
            <li className={`li_season_item ${activeMonth === 8 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(8)}>Aug</button>
            </li>
            <li className={`li_season_item ${activeMonth === 9 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(9)}>Sep</button>
            </li>
            <li className={`li_season_item ${activeMonth === 10 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(10)}>Oct</button>
            </li>
            <li className={`li_season_item ${activeMonth === 11 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(11)}>Nov</button>
            </li>
            <li className={`li_season_item ${activeMonth === 12 ? 'active' : ''}`}>
              <button className="btn_moth_seasons" onClick={() => handleMonthClick(12)}>Dec</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="Main_Container">
        <div className="Container_div">
          <div className="Primary_bar">
            <div className="Search_bar">
              <h3 className="header_text">Products:</h3>
              <input
                className="Input_Search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
              />
            </div>
            <div className="container_primary_bar">
              {/* Truyền danh sách đã lọc xuống */}
              <ProductList items={filteredProducts} />
            </div>
          </div>
          <div className="Second_bar">
            <div className="Search_bar">
              <h3 className="header_text">Markets</h3>
            </div>
            <div className="container_second_bar">
              <ul className="ul_market_list">
                {/* Truyền danh sách chợ đã lọc xuống */}
                <MarketList items={relatedMarkets} products={products} activeMonth={activeMonth} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSeasons;
