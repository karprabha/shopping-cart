import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import AddToCartButton from "../button/AddToCartButton";

interface CardProps {
    item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={item.image} alt={item.title} />
            </div>
            <Link to={`/products/${item.id}`}>
                <h3>{item.title}</h3>
            </Link>
            <p>${item.price}</p>

            <div className="rating-container">
                <span>{item.rating.count}</span>
                <span>{item.rating.rate}</span>
            </div>

            <AddToCartButton key={item.id} itemId={item.id} />
        </div>
    );
};

export default Card;
