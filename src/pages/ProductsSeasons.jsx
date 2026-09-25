import "../assets/css/style.css";
import "../assets/css/ProductsSeasons.css";
import { useProductsSeason } from "../context/ProductsSeasonContext";
import ProductList from "../components/ProductList";
import MarketList from "../components/MarketList";

function ProductsSeasons() {
  const {
    products,
    markets,
    seasons,
    isLoading,
    activeSeasonId,
    setActiveSeasonId,
    currentSeason,
  } = useProductsSeason();

  if (isLoading) return <div>Loading...</div>;

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

  return (
    <div className="Container_Product">
      <div className="Navbar_Container">
        <div className="Navbar_Season">
          <ul className="ul_Season_list">
            {seasons.map((season) => (
              <li key={season.id} className="li_Season_item">
                <button
                  className={`btn_seansons ${activeSeasonId === season.id ? "btn_season_active" : ""}`}
                  onClick={() => setActiveSeasonId(season.id)}
                >
                  <span className="season_text">{season.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="Season_Background">
          <div className="Choice_Season_Container">
            <div className="Choice_Season_Content">
              <p className="Choice_Season_Duration">
                {currentSeason.name} lasts from{" "}
                {formatDuration(
                  currentSeason.startMonth,
                  currentSeason.endMonth,
                )}
                .
              </p>
              <h2 className="Choice_Season_Header">{currentSeason.name}</h2>
              <p className="Choice_Season_Text">{currentSeason.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Main_Container">
        <div className="Container_div">
          <div className="Primary_bar">
            <div className="Search_bar">
              <h3 className="header_text">Products:</h3>
              <input className="Input_Search" type="text" />
            </div>
            <div className="container_primary_bar">
              <ProductList items={products} />
            </div>
          </div>
          <div className="Second_bar">
            <div className="Search_bar">
              <h3 className="header_text">Markets:</h3>
              <input className="Input_Search" type="text" />
            </div>
            <div className="container_second_bar">
              <ul className="ul_market_list">
                <MarketList items={markets} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSeasons;
