interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    let ratingColorClass = "";

    if (rating >= 0 && rating < 1) {
        ratingColorClass = "rating-red";
    } else if (rating >= 1 && rating < 3) {
        ratingColorClass = "rating-yellow";
    } else if (rating >= 3 && rating <= 5) {
        ratingColorClass = "rating-green";
    }

    return (
        <span className={`rating ${ratingColorClass}`}>
            {rating.toFixed(1)}★
        </span>
    );
};

export default Rating;
