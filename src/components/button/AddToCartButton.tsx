import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

interface AddToCartButtonProps {
    itemId: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ itemId }) => {
    const { cartItems, updateCartItems } = useContext(ShopContext);
    const quantity = cartItems[itemId] ? cartItems[itemId].quantity : 0;

    const handleAddToCart = () => {
        updateCartItems(itemId, 1);
    };

    const handleIncreaseQuantity = () => {
        updateCartItems(itemId, quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            updateCartItems(itemId, quantity - 1);
        }
    };

    return (
        <div className="add-to-cart-btn">
            {quantity === 0 ? (
                <button
                    type="button"
                    className="add-to-cart"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            ) : (
                <div className="quantity-btn">
                    <button type="button" onClick={handleDecreaseQuantity}>
                        -
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button type="button" onClick={handleIncreaseQuantity}>
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddToCartButton;
