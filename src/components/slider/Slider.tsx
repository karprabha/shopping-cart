import { useState } from "react";
import { Item } from "../../types/Item";
import Slide from "./Slide";

interface SliderProps {
    slides: Item[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [curSlide, setCurSlide] = useState(0);
    const maxSlide = slides ? slides.length - 1 : 0;

    if (maxSlide === 0) return;

    const nextSlide = () => {
        setCurSlide((prevSlide) =>
            prevSlide === maxSlide ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurSlide((prevSlide) =>
            prevSlide === 0 ? maxSlide : prevSlide - 1
        );
    };

    return (
        <div className="slider">
            <button className="btn btn-prev" onClick={prevSlide}>
                {"<"}
            </button>

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === curSlide ? "active" : ""}`}
                    style={{
                        transform: `translateX(${100 * (index - curSlide)}%)`,
                    }}
                >
                    <Slide slide={slide} />
                </div>
            ))}

            <button className="btn btn-next" onClick={nextSlide}>
                {">"}
            </button>
        </div>
    );
};

export default Slider;
