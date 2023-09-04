import { Link } from "react-router-dom";
import { Item } from "../../types/Item";
import trimString from "../../utils/trimString";

interface SlideProps {
    slide: Item;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
    return (
        <>
            <Link to={`/products/${slide.id}`}>
                <img src={slide.image} alt={slide.title} />
                <span>{trimString(slide.title, 20)}</span>
            </Link>
        </>
    );
};

export default Slide;
