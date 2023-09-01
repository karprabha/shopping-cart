interface CardProps {
    data: any;
}

const Card: React.FC<CardProps> = ({ data }) => {
    return <h1>{data.category}</h1>;
};

export default Card;
