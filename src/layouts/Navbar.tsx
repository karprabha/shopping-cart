import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "../context/ShopContext";

const Navbar = () => {
    const { cartItems } = useContext(ShopContext);
    const itemCount = Object.keys(cartItems).length;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <ul className={"desktop-menu"}>
                <li>
                    <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={`/products`}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={`/cart`}>
                        🛒 Cart{" "}
                        {itemCount > 0 && (
                            <span className="item-count">{itemCount}</span>
                        )}
                    </NavLink>
                </li>
            </ul>

            <div
                className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                ☰
                {itemCount > 0 && !isMenuOpen && (
                    <span className="item-count">{itemCount}</span>
                )}
            </div>

            <div className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
                <ul className="menu-items" onClick={toggleMenu}>
                    <li>
                        <NavLink to={`/`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/products`}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/cart`}>
                            🛒 Cart{" "}
                            {itemCount > 0 && (
                                <span className="item-count">{itemCount}</span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
