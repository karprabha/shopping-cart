import { useState } from "react";

const PaymentSelection = () => {
    const [selectedPayment, setSelectedPayment] = useState("credit-card");

    const handlePaymentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <div className="payment-selection-container">
            <h3>Select Payment Method</h3>
            <div className="payment-method">
                <input
                    type="radio"
                    id="cash"
                    name="payment-method"
                    value="cash"
                    checked={selectedPayment === "cash"}
                    onChange={handlePaymentChange}
                />
                <label htmlFor="cash">Cash 💵 </label>
            </div>
            <div className="payment-method">
                <input
                    type="radio"
                    id="credit-card"
                    name="payment-method"
                    value="credit-card"
                    checked={selectedPayment === "credit-card"}
                    onChange={handlePaymentChange}
                />
                <label htmlFor="credit-card">Credit Card 💳</label>
            </div>
            <div className="payment-method">
                <input
                    type="radio"
                    id="bank-transfer"
                    name="payment-method"
                    value="bank-transfer"
                    checked={selectedPayment === "bank-transfer"}
                    onChange={handlePaymentChange}
                />
                <label htmlFor="bank-transfer">Bank Transfer 🏦</label>
            </div>
        </div>
    );
};

export default PaymentSelection;
