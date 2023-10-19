import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {user}=useContext(AuthContext)
    const email =  user.email
    const { productName,brandName,type, price, rating, image, Ingredients, availableSize, avialableFlavors, bigDescription } = productDetails;
    const handleAddToCart = (e) =>{
        e.preventDefault();
        const cart = {productName,brandName,type,price,image,Ingredients,rating,email}
        fetch('http://localhost:5000/addToCart',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <div className="bg-orange-100">
            <div className="flex flex-col lg:flex-row gap-8">
                <div>
                    <img className="max-w-sm mx-auto md:max-w-3xl" src={image} alt="" />
                </div>
                <div className="w-full text-center lg:text-left lg:space-y-4">
                    <div className="flex justify-between">
                        <h1 className="text-3xl underline underline-offset-8 font-bold italic">Name: {productName}</h1>
                        <button onClick={handleAddToCart} className="btn bg-orange-500 hover:bg-orange-600 text-white px-10 rounded-full">Add To Cart</button>
                    </div>
                    <h3 className="text-xl">Brand Name:{brandName}</h3>
                    <h3 className="text-xl flex items-center ">Price: {price} <FaDollarSign></FaDollarSign></h3>
                    <p>{bigDescription}</p>
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
                        <div>
                            <h1 className="text-3xl font-senibold">Available Flavors</h1>
                            <h1 className="text-xl bg-gray-400 p-4 rounded-lg w-96 lg:w-52 h-72 mx-auto">{avialableFlavors || "No data available"}</h1>
                        </div>
                        <div>
                            <h1 className="text-3xl font-senibold">Available Size</h1>
                            <h1 className="text-xl bg-gray-400 p-4 rounded-lg w-96 lg:w-52 h-72 mx-auto">{availableSize || "No data available"}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-center text-4xl font-extrabold underline underline-offset-4">Ingredients</h1>
            <h1 className="text-center text-xl py-8">{Ingredients}</h1>
        </div>
    );
};

export default ProductDetails;