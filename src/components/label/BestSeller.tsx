interface Rating {
    rate: number;
    count: number;
}

interface BestSellerLabelProps {
    rating: Rating;
}

const BestSellerLabel: React.FC<BestSellerLabelProps> = ({ rating }) => {
    const isBestSeller =
        (rating.rate >= 4 && rating.count >= 400) ||
        (rating.rate >= 3.8 && rating.count >= 600);

    if (isBestSeller) {
        return <span className="best-seller-label">BESTSELLER</span>;
    } else {
        return null;
    }
};

export default BestSellerLabel;
