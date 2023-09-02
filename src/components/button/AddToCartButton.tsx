import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/customHooks";

interface CartItem {
    quantity: number;
}

interface AddToCartButtonProps {
    itemId: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ itemId }) => {
    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useLocalStorage<{
        [key: string]: CartItem;
    }>("cartItems", {});

    useEffect(() => {
        if (cartItems[itemId] && cartItems[itemId].quantity) {
            setQuantity(cartItems[itemId].quantity);
        }
    }, [itemId, cartItems]);

    const handleAddToCart = () => {
        setQuantity(1);

        if (itemId) console.log(itemId);

        setCartItems({
            ...cartItems,
            [itemId]: {
                quantity: 1,
            },
        });
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);

        setCartItems({
            ...cartItems,
            [itemId]: {
                quantity: quantity + 1,
            },
        });
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);

            setCartItems({
                ...cartItems,
                [itemId]: {
                    quantity: quantity - 1,
                },
            });
        }
    };

    return (
        <div>
            {quantity === 0 ? (
                <button type="button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            ) : (
                <div>
                    <button type="button" onClick={handleDecreaseQuantity}>
                        -
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={handleIncreaseQuantity}>
                        +
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddToCartButton;
