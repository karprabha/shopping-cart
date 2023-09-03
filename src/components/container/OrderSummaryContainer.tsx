interface OrderSummaryProps {
    estimatedTotalCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ estimatedTotalCost }) => {
    return (
        <div className="order-summary-container">
            <h1>OrderSummary</h1>
            <p>Estimated TotalCost: {estimatedTotalCost}</p>
        </div>
    );
};

export default OrderSummary;
