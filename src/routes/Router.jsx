import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import UpdateCoffee from "../pages/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage";
import AddCoffee from "../pages/AddCoffee";
import DetailsProducts from "../components/DetailsProducts";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path:'/updateCoffee',
                element: <UpdateCoffee />
            }, 
            {
                path:'/detailsProducts',
                element: <DetailsProducts />
            }
        ]
    }
])

export default router;