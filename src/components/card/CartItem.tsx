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
            <div className="img-container">
                <img src={item.image} alt={item.title} />
            </div>

            <div className="item-detail">
                <Link to={`/products/${item.id}`}>
                    <h3>{item.title}</h3>
                </Link>
                <p>${item.price}</p>

                <div className="item-btn-container">
                    <AddToCartButton key={item.id} itemId={item.id} />
                    <RemoveItemButton key={item.id} itemId={item.id} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
