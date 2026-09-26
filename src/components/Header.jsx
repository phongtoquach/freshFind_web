import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import BookmarkContext from "../context/BookmarkContext";

function Header() {
  const navigate = useNavigate();
  const { bookmarkedIds } = useContext(BookmarkContext);

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
              Farm Products
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
              Bookmarks {bookmarkedIds.length > 0 && <span>{bookmarkedIds.length}</span>}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
