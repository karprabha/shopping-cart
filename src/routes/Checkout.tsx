import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const rootURL = "/";

    useEffect(() => {
        const timer = setInterval(() => {
            if (countdown === 0) {
                clearInterval(timer);
                navigate(rootURL);
            } else {
                setCountdown(countdown - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [countdown, rootURL, navigate]);

    return (
        <div className="checkout">
            <h1>Payment Successful! 🎉</h1>
            <p>
                Thank you for your payment! Your order has been successfully
                processed.
            </p>
            <p>You will be automatically redirected to the homepage in</p>

            <h4>{countdown} seconds.</h4>

            <p>
                If you aren't redirected, please click the "Go Back to Home"
                button below.
            </p>
            <Link to={rootURL}>
                <button type="button">Go Back to Home</button>
            </Link>
        </div>
    );
};

export default Checkout;
