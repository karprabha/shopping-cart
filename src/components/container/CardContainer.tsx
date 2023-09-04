import { useState } from "react";
import { Link } from "react-router-dom";
import { CategorizedItems } from "../../types/CategorizedItems";
import Card from "../card/Card";
import SkeletonCard from "../skeleton/SkeletonCard";

interface CardContainerProps {
    categorizedItems: CategorizedItems;
}

const CardContainer: React.FC<CardContainerProps> = ({ categorizedItems }) => {
    const loadingSkeletons = Array.from({ length: 14 });

    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedCategory(event.target.value);
    };

    console.log(categorizedItems);

    return (
        <>
            <div className="breadcrumb-navigation">
                <Link to={"/"} className="breadcrumb-link">
                    Home
                </Link>
                <span className="breadcrumb-separator">
                    {" "}
                    &gt; Products &gt;{" "}
                </span>
                <select
                    name="select-category"
                    id="select-category-dropdown"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="category-dropdown"
                >
                    <option value="all">All</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>

            <div className="card-container">
                {categorizedItems[selectedCategory].length > 0
                    ? categorizedItems[selectedCategory].map((item) => (
                          <Card key={item.id} item={item} />
                      ))
                    : loadingSkeletons.map((_, index) => (
                          <SkeletonCard key={index} />
                      ))}
            </div>
        </>
    );
};

export default CardContainer;
