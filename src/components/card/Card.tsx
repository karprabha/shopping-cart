import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import AddToCartButton from "../button/AddToCartButton";
import Rating from "../label/Rating";
import BestSellerLabel from "../label/BestSeller";

interface CardProps {
    item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="card">
            <Link to={`/products/${item.id}`}>
                <div className="img-container">
                    <BestSellerLabel rating={item.rating} />
                    <img src={item.image} alt={item.title} />
                </div>
                <span className="item-title">{item.title}</span>
            </Link>

            <div className="rating-container">
                <Rating rating={item.rating.rate} />
                <span>({item.rating.count})</span>
            </div>

            <span className="item-price">${item.price}</span>

            <AddToCartButton key={item.id} itemId={item.id} />
        </div>
    );
};

export default Card;
