import ProceedToCheckoutButton from "../button/ProceedToCheckoutButton";
import PaymentSelection from "../payment/PaymentSelection";

interface OrderSummaryProps {
    estimatedTotalCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ estimatedTotalCost }) => {
    return (
        <div className="order-summary-container">
            <h3>Order Summary</h3>
            <span>Total Cost: ${estimatedTotalCost.toFixed(2)}</span>
            <ProceedToCheckoutButton />
            <PaymentSelection />
        </div>
    );
};

export default OrderSummary;
