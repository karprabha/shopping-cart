import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import AddToCartButton from "../button/AddToCartButton";
import RemoveItemButton from "../button/RemoveItemButton";

interface CartItemProps {
    item: Item;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    return (
        <div className="cart-item">
            <Link to={`/products/${item.id}`}>
                <div className="img-container">
                    <img src={item.image} alt={item.title} />
                </div>
            </Link>

            <div className="item-detail">
                <Link to={`/products/${item.id}`}>
                    <span className="cart-item-title">{item.title}</span>
                </Link>
                <span>${item.totalProductPrice?.toFixed(2)}</span>

                <div className="item-btn-container">
                    <AddToCartButton key={item.id} itemId={item.id} />
                    <RemoveItemButton itemId={item.id} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
