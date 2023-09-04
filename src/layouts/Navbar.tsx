import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ShopContext from "../context/ShopContext";

const Navbar = () => {
    const { cartItems } = useContext(ShopContext);
    const itemCount = Object.keys(cartItems).length;

    return (
        <nav>
            <ul>
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
        </nav>
    );
};

export default Navbar;
