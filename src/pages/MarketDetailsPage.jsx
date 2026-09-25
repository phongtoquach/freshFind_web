import "../assets/css/market_details_page.css";
import MapLocation from "../components/MapLocation";
function MarketDetailsPage() {
  return (
    <>
      <section className="section markets-container-section">
        <div className="container">
          <div className="container_market_detail">
            <div className="main_container">
              <div className="left_container">
                <img className="left_img" src="/images/test123.avif" alt="" />
              </div>
              <div className="right_container">
                <h1 className="right_header">Downtown Farmers Market</h1>
                <p className="right_address">
                  <span className="right_icons">
                    <img className="icons" src="/images/location.png" alt="" />
                  </span>
                  Downtown - 123 Market Street
                </p>
                <p className="right_time_open">
                  <span className="status_badge">Closed</span> Opens Saturday at
                  07:00
                </p>
                <h2 className="right_desc_header">About This Market</h2>
                <p className="right_desc_content">
                  The city's largest weekly farmers market, featuring over 50
                  local vendors offering fresh produce, artisanal goods, and
                  prepared foods. A vibrant community gathering every weekend.
                </p>
                <h3 className="product_available">Available Produce</h3>
                <ul className="products_list">
                  <li className="product_item">Apples</li>
                  <li className="product_item">Tomatoes</li>
                  <li className="product_item">Strawberries</li>
                  <li className="product_item">Carrots</li>
                  <li className="product_item">Basil</li>
                  <li className="product_item">Spinach</li>
                </ul>
              </div>
            </div>
            <div className="time_open_week_container">
              <div className="time_open_week">
                <h4>Opening Hours</h4>
                <ul className="open_in_week_list">
                  <li className="open_in_week_item">
                    <span className="open_in_week_item_header">Monday</span>
                    <span className="open_in_week_item_status closed">
                      Closed
                    </span>
                  </li>
                  <li className="open_in_week_item">
                    <span className="open_in_week_item_header">Tuesday</span>
                    <span className="open_in_week_item_status closed">
                      Closed
                    </span>
                  </li>
                  <li className="open_in_week_item">
                    <span className="open_in_week_item_header">Webnesday</span>
                    <span className="open_in_week_item_status closed">
                      Closed
                    </span>
                  </li>
                  <li className="open_in_week_item">
                    <span className="open_in_week_item_header">Thurday</span>
                    <span className="open_in_week_item_status closed">
                      Closed
                    </span>
                  </li>
                  <li className="open_in_week_item">
                    <span className="open_in_week_item_header">Friday</span>
                    <span className="open_in_week_item_status closed">
                      Closed
                    </span>
                  </li>
                  <li className="open_in_week_item">
                    <span className="open_in_week_item_header">Saturday</span>
                    <span className="open_in_week_item_status closed">
                      Closed
                    </span>
                  </li>
                  <li className="open_in_week_item actived">
                    <span className="open_in_week_item_header">Sunday</span>
                    <span className="open_in_week_item_status open">
                      07:00 - 14:00
                    </span>
                  </li>
                </ul>
              </div>

              <div className="maps_container">
                <MapLocation
                  position={[10.765, 106.695]}
                  zoom={15}
                  height="400px"
                  popupText="Downtown Farmers Market"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MarketDetailsPage;
