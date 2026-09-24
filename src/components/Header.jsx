import { useEffect } from "react";
import { NavLink } from "react-router-dom";


function Header() {

    const activeClass = ({ isActive }) => (isActive ? "link active" : "link");

    useEffect(() => {
        console.log("[Header] đang chạy useEffect() của component Header !");
        
        // hàm cleanup
        return () => {
            console.log("[Header] đang chạy hàm cleanup của useEffect() !");
        };
    });

   
    return (
        <header className="header">
            <div className="box">
                <div className="brand">
                    <NavLink to="/" className="brandlink">
                    <span className="mark">FF</span>
                    <span className="text">FreshFind</span>
                    </NavLink>
                </div>

                <div className="links">
                    <NavLink to="/markets" className={activeClass}>Markets</NavLink>
                    <NavLink to="/produce-guide" className={activeClass}>Produce Guide</NavLink>
                    <NavLink to="/seasonal" className={activeClass}>Seasonal</NavLink>
                    <NavLink to="/about" className={activeClass}>About</NavLink>
                    <NavLink to="/contact" className={activeClass}>Contact</NavLink>
                </div>

                <div className="actions">
                    <NavLink to="/markets" className="market">Find a Market</NavLink>
                    <NavLink to="/login" className="login">Login / Sign Up</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;
