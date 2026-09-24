import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="brand-link">
          <span className="brand-mark">FF</span>
          <span className="brand-text">FreshFind</span>
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/markets" className={linkClass}>Markets</NavLink>
        <NavLink to="/produce-guide" className={linkClass}>Produce Guide</NavLink>
        <NavLink to="/seasonal" className={linkClass}>Seasonal</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      <div className="navbar-actions">
        <NavLink to="/markets" className="market-button">Find a Market</NavLink>
        <NavLink to="/login" className="login-link">Login / Sign Up</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
