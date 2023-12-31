import { createContext } from "react";
import { CartItems } from "../types/CartItems";

type ShopContextType = {
    cartItems: CartItems;
    updateCartItems: (itemId: number, quantity: number) => void;
    clearCart: () => void;
};

const ShopContext = createContext<ShopContextType>({
    cartItems: {},

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateCartItems: (_itemId: number, _quantity: number) => {},
    clearCart: () => {},
});

export default ShopContext;
