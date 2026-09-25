import { Link } from "react-router-dom";
import { useContext } from "react";
import "../assets/css/BookMarks.css";
import BookmarkContext from "../context/BookmarkContext";
import { getMarketById } from "../services/marketService";

function Bookmarks() {
  const { bookmarkedIds, toggleBookmark } = useContext(BookmarkContext);

  const bookmarkedMarkets = bookmarkedIds
    .map((id) => getMarketById(id))
    .filter(Boolean);

  return (
    <div className="section bookmarks-container-section">
      <div className="container">
        <div className="header_container">
          <h1 className="header_title">My Bookmarks</h1>
          <p className="header_desc">
            Your saved markets, produce, and personal notes.
          </p>
        </div>
        <div className="container_main">
          {bookmarkedMarkets.length === 0 ? (
            <div className="no_saved_container">
              <h2 className="no_saved_header">No saved markets</h2>
              <p className="no_saved_desc">
                Browse the Market Directory and bookmark your favorite markets.
              </p>

              <Link className="markets_link" to="/markets">
                Browse Markets
              </Link>
            </div>
          ) : (
            bookmarkedMarkets.map((market) => (
              <div className="saved_container" key={market.id}>
                <div className="saved_content">
                  <Link
                    to={`/markets/${market.id}/${market.slug}`}
                    className="saved_header"
                  >
                    {market.name}
                  </Link>
                  <p className="saved_location">{market.location?.area}</p>
                </div>

                <button
                  className="saved_delete_btn"
                  onClick={() => toggleBookmark(market.id)}
                >
                  <img
                    className="saved_delete_img"
                    src="/images/delete.png"
                    alt=""
                  />
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Bookmarks;
