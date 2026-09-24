import { useEffect } from "react";
import { NavLink } from "react-router-dom";


function Header() {

    const activeClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

    useEffect(() => {
        console.log("[Header] đang chạy useEffect() của component Header !");
        
        // hàm cleanup
        return () => {
            console.log("[Header] đang chạy hàm cleanup của useEffect() !");
        };
    });

   
    return (
        <header className="header">
            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="/" className="brand-link">
                    <span className="brand-mark">FF</span>
                    <span className="brand-text">FreshFind</span>
                    </NavLink>
                </div>

                <div className="navbar-links">
                    <NavLink to="/markets" className={activeClass}>Markets</NavLink>
                    <NavLink to="/produce-guide" className={activeClass}>Produce Guide</NavLink>
                    <NavLink to="/seasonal" className={activeClass}>Seasonal</NavLink>
                    <NavLink to="/about" className={activeClass}>About</NavLink>
                    <NavLink to="/contact" className={activeClass}>Contact</NavLink>
                </div>

                <div className="navbar-actions">
                    <NavLink to="/markets" className="market-button">Find a Market</NavLink>
                    <NavLink to="/login" className="login-link">Login / Sign Up</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;
