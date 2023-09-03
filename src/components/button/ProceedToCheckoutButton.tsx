import { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context/ShopContext";

const ProceedToCheckoutButton = () => {
    const { clearCart } = useContext(ShopContext);

    return (
        <div>
            <Link to={"/checkout"}>
                <button type="button" onClick={() => clearCart()}>
                    Proceed to checkout
                </button>
            </Link>
        </div>
    );
};

export default ProceedToCheckoutButton;
