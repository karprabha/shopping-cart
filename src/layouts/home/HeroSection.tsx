import { Link } from "react-router-dom";
import shoppingGirlImgURL from "../../assets/images/shopping-girl.png";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-motto">
                <h1>
                    Shop. <br /> Save. <br /> Smile.
                </h1>
                <p>
                    Experience hassle-free shopping with us. Find incredible
                    deals on a diverse range of products. Start saving and
                    smiling today!
                </p>

                <Link to={"/products"}>
                    <button type="button">Shop Now</button>
                </Link>
            </div>
            <div className="hero-img-container">
                <img src={shoppingGirlImgURL} alt="hero-img" />
            </div>
        </div>
    );
};

export default HeroSection;
