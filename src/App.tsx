import { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import PageContainer from "./layouts/PageContainer";
import ShopContext from "./context/ShopContext";
import { CartItems } from "./types/CartItems";
import { useLocalStorage } from "./hooks/customHooks";
import { Link } from "react-router-dom";
import Footer from "./layouts/Footer";

const App = () => {
    const [cachedCartItems, setCachedCartItems] = useLocalStorage(
        "cartItems",
        {}
    );
    const [cartItems, setCartItems] = useState<CartItems>(cachedCartItems);

    useEffect(() => {
        setCachedCartItems(cartItems);
    }, [cartItems, setCachedCartItems]);

    const clearCart = () => {
        setCachedCartItems({});
        setCartItems({});
    };

    const updateCartItems = (itemId: number, quantity: number) => {
        const updatedCartItems = { ...cartItems };

        updatedCartItems[itemId] = {
            quantity: quantity,
        };

        if (quantity === 0) {
            delete updatedCartItems[itemId];
        }

        setCartItems(updatedCartItems);
    };

    return (
        <ShopContext.Provider value={{ cartItems, updateCartItems, clearCart }}>
            <header>
                <h1>
                    <Link to={"/"}>CraftHaven</Link>
                </h1>
                <Navbar />
            </header>

            <main>
                <PageContainer />
            </main>

            <footer>
                <Footer />
            </footer>
        </ShopContext.Provider>
    );
};

export default App;
