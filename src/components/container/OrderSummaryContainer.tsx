interface OrderSummaryProps {
    estimatedTotalCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ estimatedTotalCost }) => {
    return (
        <div className="order-summary-container">
            <h1>OrderSummary</h1>
            <p>Total Cost: ${estimatedTotalCost.toFixed(2)}</p>
            <button type="button">Proceed to checkout</button>
        </div>
    );
};

export default OrderSummary;
