import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import Products from "./routes/Products.tsx";
import Cart from "./routes/Cart.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import ProductDetails from "./routes/ProductDetails.tsx";
import Checkout from "./routes/Checkout.tsx";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
                {
                    path: "/products/:productId",
                    element: <ProductDetails />,
                },
            ],
        },
        {
            path: "/checkout",
            element: <Checkout />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
