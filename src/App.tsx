import { useState, useEffect } from "react";
import Navbar from "./layouts/Navbar";
import PageContainer from "./layouts/PageContainer";
import ShopContext from "./context/ShopContext";
import { CartItems } from "./types/CartItems";
import { useLocalStorage } from "./hooks/customHooks";

const App = () => {
    const [cachedCartItems, setCachedCartItems] = useLocalStorage(
        "cartItems",
        {}
    );
    const [cartItems, setCartItems] = useState<CartItems>(cachedCartItems);

    useEffect(() => {
        setCachedCartItems(cartItems);
    }, [cartItems, setCachedCartItems]);

    const updateCartItems = (itemId: number, quantity: number) => {
        setCartItems({
            ...cartItems,
            [itemId]: {
                quantity: quantity,
            },
        });
    };

    return (
        <ShopContext.Provider value={{ cartItems, updateCartItems }}>
            <header>
                <h1>CraftHaven</h1>
                <Navbar />
            </header>

            <main>
                <PageContainer />
            </main>
        </ShopContext.Provider>
    );
};

export default App;
