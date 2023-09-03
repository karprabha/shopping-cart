import { Item } from "../../types/Item";
import CartItem from "../card/CartItem";
import SkeletonCardItem from "../skeleton/SkeletonCardItem";

interface CartItemContainerProps {
    items: Item[];
    totalItemCount: number;
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({
    items,
    totalItemCount,
}) => {
    const loadingSkeletons = Array.from({ length: items.length });

    return (
        <div className="cart-item-container">
            <div className="cart-info">
                <h3>Your shopping Cart</h3>
                <h3>{totalItemCount} Items</h3>
            </div>

            <div className="cart-items">
                {items.length > 0
                    ? items.map((item) => (
                          <CartItem key={item.id} item={item} />
                      ))
                    : loadingSkeletons.map((_, index) => (
                          <SkeletonCardItem key={index} />
                      ))}
            </div>
        </div>
    );
};

export default CartItemContainer;
