import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateCoffee from "../pages/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage";
import AddCoffee from "../pages/AddCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addCoffe',
                element: <AddCoffee />
            },
            {
                path:'/updateCoffe',
                element: <UpdateCoffee />
            }
        ]
    }
])

export default router;