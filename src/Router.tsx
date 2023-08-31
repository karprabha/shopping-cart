import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import Products from "./routes/Products.tsx";
import Contact from "./routes/Contact.tsx";
import Cart from "./routes/Cart.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";

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
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
