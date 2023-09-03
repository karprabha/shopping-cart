import { useContext } from "react";
import ShopContext from "../../context/ShopContext";

interface RemoveItemButtonProps {
    itemId: number;
}

const RemoveItemButton: React.FC<RemoveItemButtonProps> = ({ itemId }) => {
    const { updateCartItems } = useContext(ShopContext);

    return (
        <div>
            <button type="button" onClick={() => updateCartItems(itemId, 0)}>
                Remove
            </button>
        </div>
    );
};

export default RemoveItemButton;
