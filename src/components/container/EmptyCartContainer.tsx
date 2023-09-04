import { Link } from "react-router-dom";

const EmptyCartContainer = () => {
    return (
        <div className="empty-cart-container">
            <span className="big-cart">🛒</span>
            <h1>Your cart is empty!</h1>
            <p>Add items to it now.</p>
            <button type="button">
                <Link to={"/products"}>Shop Now</Link>
            </button>
        </div>
    );
};

export default EmptyCartContainer;
