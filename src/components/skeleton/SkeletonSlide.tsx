const SkeletonSlide: React.FC = () => {
    return (
        <div className="skeleton-slide">
            <div className="skeleton-img"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-rating">
                <span></span>
                <span></span>
            </div>
            <div className="skeleton-price"></div>
        </div>
    );
};

export default SkeletonSlide;
