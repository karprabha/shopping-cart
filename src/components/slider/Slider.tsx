import { useState } from "react";
import { Item } from "../../types/Item";
import Slide from "./Slide";
import SkeletonSlide from "../skeleton/SkeletonSlide";

interface SliderProps {
    slides: Item[];
    skeletonEstimate?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, skeletonEstimate }) => {
    const [curSlide, setCurSlide] = useState(0);
    const loadingSkeletons = Array.from({ length: skeletonEstimate ?? 6 });

    const maxSlide = slides ? slides.length - 1 : loadingSkeletons.length - 1;

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

            {slides.length > 0
                ? slides.map((slide, index) => (
                      <div
                          key={index}
                          className={`slide ${
                              index === curSlide ? "active" : ""
                          }`}
                          style={{
                              transform: `translateX(${
                                  100 * (index - curSlide)
                              }%)`,
                          }}
                      >
                          <Slide slide={slide} />
                      </div>
                  ))
                : loadingSkeletons.map((_, index) => (
                      <div
                          key={index}
                          className={`slide ${
                              index === curSlide ? "active" : ""
                          }`}
                          style={{
                              transform: `translateX(${
                                  100 * (index - curSlide)
                              }%)`,
                          }}
                      >
                          <SkeletonSlide />
                      </div>
                  ))}

            <button className="btn btn-next" onClick={nextSlide}>
                {">"}
            </button>
        </div>
    );
};

export default Slider;
