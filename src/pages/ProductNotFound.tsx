import noProductFoundImgURL from "../assets/images/no-products-found.png";

const ProductNotFound = () => {
    return (
        <div className="product-not-found">
            <img src={noProductFoundImgURL} alt="no-product-found" />
            <h2>Product Not Found</h2>
            <p>The product you are looking for does not exist.</p>
        </div>
    );
};

export default ProductNotFound;
