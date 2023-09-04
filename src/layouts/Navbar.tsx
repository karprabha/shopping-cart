import { NavLink } from "react-router-dom";

const Navbar = () => {
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
                    <NavLink to={`/cart`}>Cart</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
