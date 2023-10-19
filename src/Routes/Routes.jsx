import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";

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
            },
            {
                path: '/productDetails/:Pname',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/products/productName/${params.Pname}`)
            },
            {
                path: '/addToCart/:id',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/addToCart/myCart/${params.id}`)
            }
        ]
    }
])
export default router;