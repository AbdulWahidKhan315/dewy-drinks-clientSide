import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/brands')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addProduct',
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: '/brandDetails/:name',
                element: <BrandDetails></BrandDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
            }
        ]
    }
])
export default router;