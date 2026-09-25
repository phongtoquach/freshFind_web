import { Link } from "react-router-dom";
import "../assets/css/BookMarks.css";

function BookMarks() {
  return (
    <div className="section bookmarks-container-section">
      <div className="container">
        <div className="header_container">
          <h1 className="header_title">My Bookmarks</h1>
          <p className="header_desc">
            Your saved markets, produce, and personal notes.
          </p>
        </div>

        <div className="no_saved_container none">
          <h2 className="no_saved_header">No saved markets</h2>
          <p className="no_saved_desc">
            Browse the Market Directory and bookmark your favorite markets.
          </p>

          <Link className="markets_link" to="/markets">
            Browse Markets
          </Link>
        </div>

        <div className="saved_container">
          <div className="saved_content">
            <Link to="/" className="saved_header">
              Downtown Farmers Market
            </Link>
            <p className="saved_location">Downtown</p>
          </div>

          <button className="">
            <img className="saved_delete_img" src="/images/delete.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookMarks;
