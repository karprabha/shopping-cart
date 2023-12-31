import { Link, useParams } from "react-router-dom";
import { Item } from "../types/Item";
import AddToCartButton from "../components/button/AddToCartButton";
import capitalizeEachWord from "../utils/capitalizeEachWord";
import trimString from "../utils/trimString";
import Rating from "../components/label/Rating";
import BestSellerLabel from "../components/label/BestSeller";
import ProductNotFound from "../pages/ProductNotFound";
import Slider from "../components/slider/Slider";

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
        return <ProductNotFound />;
    }

    const currentProductCategory = product.category;

    const relatedItems = allCategory.filter(
        (item: Item) =>
            item.category === currentProductCategory &&
            String(item.id) !== productId
    );

    return (
        <div className="product-details-route">
            <div className="breadcrumb-navigation">
                <Link to={"/"} className="breadcrumb-link">
                    Home
                </Link>
                <span className="breadcrumb-separator">&gt; </span>
                <Link to={"/products"} className="breadcrumb-link">
                    Products
                </Link>
                <span className="breadcrumb-separator">
                    &gt; {trimString(product.title, 20)}
                </span>
            </div>
            <div className="product-details">
                <div className="product-details-image">
                    <BestSellerLabel rating={product.rating} />
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-details-info">
                    <h3>{product.title}</h3>

                    <div className="product-details-rating">
                        <Rating rating={product.rating.rate} />
                        <span>Rating, ({product.rating.count} reviews)</span>
                    </div>

                    <span className="product-details-price">
                        ${product.price}
                    </span>

                    <div className="product-details-description">
                        <p>{product.description}</p>
                    </div>
                    <span className="product-details-category">
                        {capitalizeEachWord(product.category)}
                    </span>

                    <AddToCartButton key={product.id} itemId={product.id} />
                </div>
            </div>

            <div className="related-items">
                <h3>You might be interested in</h3>
                <Slider slides={relatedItems} />
            </div>
        </div>
    );
};

export default ProductDetails;
