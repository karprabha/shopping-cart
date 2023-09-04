import { useParams } from "react-router-dom";
import { Item } from "../types/Item";
import AddToCartButton from "../components/button/AddToCartButton";
import capitalizeEachWord from "../utils/capitalizeEachWord";

const ProductDetails = () => {
    const { productId } = useParams();

    const allCategoryString = localStorage.getItem("products");
    const allCategory = allCategoryString
        ? JSON.parse(allCategoryString).all || []
        : [];
    const product = allCategory.find(
        (item: Item) => String(item.id) === productId
    );

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details">
            <div className="product-details-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details-info">
                <h3>{product.title}</h3>

                <div className="product-details-rating">
                    <span>{product.rating.rate}☆ Rating,</span>
                    <span>({product.rating.count} reviews)</span>
                </div>

                <span className="product-details-price">${product.price}</span>

                <div className="product-details-description">
                    <p>{product.description}</p>
                </div>
                <span className="product-details-category">
                    {capitalizeEachWord(product.category)}
                </span>

                <AddToCartButton key={product.id} itemId={product.id} />
            </div>
        </div>
    );
};

export default ProductDetails;
