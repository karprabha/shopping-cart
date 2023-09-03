import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { Item } from "../types/Item";
import CartItemContainer from "../components/container/CartItemContainer";

const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    const allCategoryString = localStorage.getItem("products");
    const allCategory = allCategoryString
        ? JSON.parse(allCategoryString).all || []
        : [];
    const cartItemIds = Object.keys(cartItems);

    const matchingItems = allCategory.filter((item: Item) =>
        cartItemIds.includes(String(item.id))
    );
    console.log(matchingItems);

    return (
        <>
            <h1>Cart</h1>
            <CartItemContainer items={matchingItems} />
        </>
    );
};

export default Cart;
