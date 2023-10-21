import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const addToCartData = useLoaderData();
    const [cardData,setCardData]=useState(addToCartData)


    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://dewy-drinks-server.vercel.app/addToCart/myCart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = cardData.filter(cData => cData._id !== _id);
                            setCardData(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-[800px] lg:w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-200 text-black">
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>Brand Name</th>
                            <th>Product Type</th>
                            <th>Product Price</th>
                            <th>Your Email</th>
                            <th>Product Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cardData.map((data,index) => <tr className="bg-base-200 text-orange-500"
                             key={data._id}>
                                <th>{index + 1}</th>
                                <th>{data.productName}</th>
                                <th>{data.brandName}</th>
                                <th>{data.type}</th>
                                <th>{data.price}</th>
                                <th>{data.email}</th>
                                <th>
                                    <img className="w-16 h-16 rounded-full" src={data.image} alt="" />
                                </th>
                                <th>
                                    <button
                                    onClick={() => handleDelete(data._id)}
                                     className="btn bg-orange-600 text-white font-bold hover:bg-orange-800">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;