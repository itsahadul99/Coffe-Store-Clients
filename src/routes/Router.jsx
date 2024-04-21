import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";
import UpdateCoffe from "../pages/UpdateCoffe";
import ErrorPage from "../pages/ErrorPage";

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
                element: <AddCoffe />
            },
            {
                path:'/updateCoffe',
                element: <UpdateCoffe />
            }
        ]
    }
])

export default router;