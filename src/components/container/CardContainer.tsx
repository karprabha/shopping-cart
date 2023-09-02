import { CategorizedItems } from "../../types/CategorizedItems";
import Card from "../card/Card";
import SkeletonCard from "../card/SkeletonCard";

interface CardContainerProps {
    categorizedItems: CategorizedItems;
}

const CardContainer: React.FC<CardContainerProps> = ({ categorizedItems }) => {
    const loadingSkeletons = Array.from({ length: 14 });

    return (
        <div className="card-container">
            {categorizedItems["all"].length > 0
                ? categorizedItems["all"].map((item) => (
                      <Card key={item.id} item={item} />
                  ))
                : loadingSkeletons.map((_, index) => (
                      <SkeletonCard key={index} />
                  ))}
        </div>
    );
};

export default CardContainer;
