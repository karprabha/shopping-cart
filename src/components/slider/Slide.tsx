import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import trimString from "../../utils/trimString";
import Rating from "../label/Rating";
import BestSellerLabel from "../label/BestSeller";

interface SlideProps {
    slide: Item;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
    return (
        <>
            <Link to={`/products/${slide.id}`}>
                <div className="img-container">
                    <BestSellerLabel rating={slide.rating} />
                    <img src={slide.image} alt={slide.title} />
                </div>
                <span>{trimString(slide.title, 20)}</span>
                <div className="rating-container">
                    <Rating rating={slide.rating.rate} />
                    <span>({slide.rating.count})</span>
                </div>

                <span className="item-price">${slide.price}</span>
            </Link>
        </>
    );
};

export default Slide;
