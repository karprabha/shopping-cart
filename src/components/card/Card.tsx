import { Item } from "../../types/Item";

interface CardProps {
    item: Item;
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            {/* <p>{item.description}</p> */}
            {/* <p>{item.category}</p> */}
            <div className="rating-container">
                <span>{item.rating.count}</span>
                <span>{item.rating.rate}</span>
            </div>

            <button type="button">Add to Cart</button>
        </div>
    );
};

export default Card;
