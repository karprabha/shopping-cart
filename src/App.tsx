import { Outlet, NavLink } from "react-router-dom";

const App = () => {
    return (
        <>
            <header>
                <h1>CraftHaven</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={`/`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/products`}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/contact`}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/cart`}>Cart</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default App;
