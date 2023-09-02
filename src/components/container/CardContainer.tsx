import { CategorizedItems } from "../../types/CategorizedItems";
import Card from "../card/Card";

interface CardContainerProps {
    categorizedItems: CategorizedItems;
}

const CardContainer: React.FC<CardContainerProps> = ({ categorizedItems }) => {
    return (
        <div className="card-container">
            {categorizedItems["all"] &&
                categorizedItems["all"].map((item) => (
                    <Card key={item.id} item={item} />
                ))}
        </div>
    );
};

export default CardContainer;
