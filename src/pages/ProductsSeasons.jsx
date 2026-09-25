import "../assets/css/style.css";
import "../assets/css/ProductsSeasons.css";
import ProductList from "../components/ProductList";
import MarketList from "../components/MarketList";
function ProductsSeasons() {
  return (
    <div className="Container_Product">
      <div className="Navbar_Container">
        <div className="Navbar_Season">
          <ul className="ul_Season_list">
            <li className="li_Season_item">
              <button className="btn_seansons Spring">
                <span className="season_text">Spring</span>
              </button>
            </li>
            <li className="li_Season_item">
              <button className="btn_seansons ">
                <span className="season_text">Summer</span>
              </button>
            </li>
            <li className="li_Season_item">
              <button className="btn_seansons ">
                <span className="season_text">Autumn</span>
              </button>
            </li>
            <li className="li_Season_item">
              <button className="btn_seansons ">
                <span className="season_text">Winter</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="Season_Background">
          <div className="Choice_Season_Container">
            <div className="Choice_Season_Content">
              <p className="Choice_Season_Duration">
                Spring lasts from January to March.
              </p>
              <h2 className="Choice_Season_Header">Spring</h2>
              <p className="Choice_Season_Text">
                6 types of fruits and vegetables currently at peak harvest—the
                freshest, cheapest, and tastiest of the year.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Main_Container">
        <div className="Container_div">
          <div className="Primary_bar">
            <div className="Search_bar">
              <h3 className="header_text">Summer products:</h3>
              <input className="Input_Search" type="text" />
            </div>
            <div className="container_primary_bar">
              <ProductList />
            </div>
          </div>
          <div className="Second_bar">
            <div className="Search_bar">
              <h3 className="header_text">Market Active:</h3>
              <input className="Input_Search" type="text" />
            </div>
            <div className="container_second_bar">
              <ul className="ul_market_list">
                <MarketList />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSeasons;
