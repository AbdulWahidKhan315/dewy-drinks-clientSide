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
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://dewy-drinks-server.vercel.app/brands')
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
                loader: ({params}) => fetch(`https://dewy-drinks-server.vercel.app/products/${params.name}`)
            },
            {
                path: '/productDetails/:Pid',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://dewy-drinks-server.vercel.app/products/productName/${params.Pid}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader: ()=> fetch("https://dewy-drinks-server.vercel.app/myCart")
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params})=> fetch(`https://dewy-drinks-server.vercel.app/updateProduct/${params.id}`)
            }
        ]
    }
])
export default router;