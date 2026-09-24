import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";


function Header() {

    const activeClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

    // useEffect(() => {
    //     console.log("[Header] đang chạy useEffect() của component Header !");
        
    //     // hàm cleanup
    //     return () => {
    //         console.log("[Header] đang chạy hàm cleanup của useEffect() !");
    //     };
    // });

   
    return (
        <>
            <header className="site-header">
                <nav className="navbar container" aria-label="Main navigation">
                    <Link className="brand" to="/"><span>Fresh</span>Find</Link>
                    <div className="nav-links">
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/markets" end>Markets</NavLink>
                        <NavLink to="/produce-guide" end>Produce</NavLink>
                        <NavLink to="/products-seasons" end>Seasonal</NavLink>
                        <NavLink to="/about" end>About Us</NavLink>
                        <NavLink to="/contact" end>Contact</NavLink>
                    </div>
                    <div className="nav-actions">
                        <button className="login-button" type="button">Login / Sign Up</button>
                        <button className="bookmark-nav" type="button">Bookmarks <span>3</span></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
