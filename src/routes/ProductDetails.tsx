import { useParams } from "react-router-dom";
import { Item } from "../types/Item";

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
                <h1>{product.title}</h1>
                <p className="product-details-price">${product.price}</p>
                <div className="product-details-description">
                    <p>{product.description}</p>
                </div>
                <p className="product-details-category">{product.category}</p>
                <div className="product-details-rating">
                    <span>Rating: {product.rating.rate}</span>
                    <span>({product.rating.count} reviews)</span>
                </div>
                <button className="product-details-button" type="button">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;
