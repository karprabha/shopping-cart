import { Item } from "../../types/Item";
import CartItem from "../card/CartItem";
import SkeletonCardItem from "../skeleton/SkeletonCardItem";

interface CartItemContainerProps {
    items: Item[];
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({ items }) => {
    const loadingSkeletons = Array.from({ length: items.length });

    return (
        <div className="cart-item-container">
            {items.length > 0
                ? items.map((item) => <CartItem key={item.id} item={item} />)
                : loadingSkeletons.map((_, index) => (
                      <SkeletonCardItem key={index} />
                  ))}
        </div>
    );
};

export default CartItemContainer;
