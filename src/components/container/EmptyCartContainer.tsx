import { Link } from "react-router-dom";
import emptyCartImgURL from "../../assets/images/empty-cart.png";

const EmptyCartContainer = () => {
    return (
        <div className="empty-cart-container">
            <img src={emptyCartImgURL} alt="empty-cart" />
            <h1>Your cart is empty!</h1>
            <p>Add items to it now.</p>
            <button type="button">
                <Link to={"/products"}>Shop Now</Link>
            </button>
        </div>
    );
};

export default EmptyCartContainer;
