import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import BookmarkContext from "../context/BookmarkContext";

import { getFormattedCurrentHourMinute } from "../utils/dateTimeUtils";

function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
  const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navigate = useNavigate();
  const { marketBookmarks } = useContext(BookmarkContext);

  const clickToBookmark = () => {
    navigate("/bookmarks");
  };

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <Link className="brand" to="/">
            <span>Fresh</span>Find
          </Link>
          <div className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/markets" end>
              Markets
            </NavLink>
            <NavLink to="/produce-guide" end>
              Produce Guide
            </NavLink>
            <NavLink to="/products-seasons" end>
              Seasonal
            </NavLink>
            <NavLink to="/about" end>
              About Us
            </NavLink>
            <NavLink to="/contact" end>
              Contact
            </NavLink>
          </div>
          <div className="nav-actions">
            <Link className="login-button" to="/login">
              Login / Sign Up
            </Link>
            <button
              onClick={clickToBookmark}
              className="bookmark-nav"
              type="button"
            >
              Bookmarks {marketBookmarks.length > 0 && <span>{marketBookmarks.length}</span>}
            </button>

            <div style={{ paddingLeft: "10px" }}><img src="/images/clock.png" alt="clock" /></div>
            <span>{time}</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
