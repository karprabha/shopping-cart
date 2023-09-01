import { Item } from "../../types/Item";
import Card from "../card/Card";

interface CardContainerProps {
    items: Item[];
}

const CardContainer: React.FC<CardContainerProps> = ({ items }) => {
    return (
        <div className="card-container">
            {items.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CardContainer;
