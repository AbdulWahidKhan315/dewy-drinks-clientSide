import { Link, useLoaderData } from "react-router-dom";
import { FaDollarSign, FaStar } from 'react-icons/fa';

const BrandDetails = () => {
    const brandDetaile = useLoaderData();
    // const [productName,brandName,type,price,shortDescription,rating,image]=brandDetaile;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gradient-to-r from-orange-400 to-amber-200">
            {
                brandDetaile.length > 0 ? brandDetaile.map(detail => <div key={detail._id} className="card lg:card-side bg-black text-white shadow-xl">
                    <figure><img className="w-96" src={detail.image} alt="Album" /></figure>
                    <div className="card-body font-semibold">
                        <h2 className="card-title text-3xl">Name: {detail.productName}</h2>
                        <h3 className="text-xl">Brand-Name: {detail.brandName}</h3>
                        <h3 className="text-xl">Type: {detail.type}</h3>
                        <div className="flex justify-evenly bg-gray-800 rounded-lg p-2">
                            <h4 className=" flex items-center">Price: {detail.price} <FaDollarSign></FaDollarSign></h4>
                            <h4 className="flex items-center gap-1">rating: {detail.rating} <FaStar className="text-orange-400"></FaStar></h4>
                        </div>
                        <p className="font-normal text-gray-400">{detail.shortDescription}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/productDetails/${detail.productName}`}>
                                <button className="btn rounded-full bg-orange-700 border-none hover:bg-orange-900 text-white font-bold">Details</button>
                            </Link>
                            <Link to={`/updateProduct/${detail._id}`}>
                                <button className="btn rounded-full bg-orange-700 border-none hover:bg-orange-900 text-white font-bold">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>) : <h1 className="text-5xl col-span-2 text-center font-extrabold italic">There is no Product available</h1>
            }
        </div>
    );
};

export default BrandDetails;