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
                path:'/updateCoffee/:id',
                element: <UpdateCoffee />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }, 
            {
                path:'/detailsProducts/:id',
                element: <DetailsProducts />,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
])

export default router;