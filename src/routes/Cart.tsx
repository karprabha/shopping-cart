import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { Item } from "../types/Item";
import CartItemContainer from "../components/container/CartItemContainer";
import OrderSummary from "../components/container/OrderSummaryContainer";

const Cart = () => {
    const { cartItems } = useContext(ShopContext);

    const allProductsString = localStorage.getItem("products");
    const allProducts = allProductsString
        ? JSON.parse(allProductsString).all || []
        : [];
    const cartItemIds = Object.keys(cartItems);

    const cartItemsInCart = allProducts
        .filter((product: Item) => cartItemIds.includes(String(product.id)))
        .map((product: Item) => {
            const itemId = product.id;
            const cartItem = cartItems[itemId];
            const productPrice = product.price;
            const productQuantity = cartItem ? cartItem.quantity : 0;
            const totalProductPrice = productPrice * productQuantity;

            return {
                ...product,
                totalProductPrice,
            };
        });

    const totalItemCount = cartItemIds.reduce(
        (totalCount, itemId) =>
            totalCount + cartItems[parseInt(itemId)].quantity,
        0
    );

    const estimatedTotalCost = cartItemsInCart.reduce(
        (totalCost: number, product: Item) =>
            totalCost + (product.totalProductPrice ?? 0),
        0
    );

    return (
        <>
            <h1>Cart</h1>
            <p>Total Items: {totalItemCount}</p>
            <div className="cart-container">
                <CartItemContainer items={cartItemsInCart} />
                <OrderSummary estimatedTotalCost={estimatedTotalCost} />
            </div>
        </>
    );
};

export default Cart;
