import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updateData = useLoaderData();

    const handleUpdate = (e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const product = { productName, brandName, type, price, shortDescription, rating, image }
        fetch(`http://localhost:5000/updateProduct/${updateData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-orange-100 p-2 lg:p-24">
            <h1 className="text-center text-5xl font-bold p-3">update the data of: <span className="text-orange-600">{updateData.productName}</span></h1>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className="flex gap-2 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData.productName} name="productName" placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData.brandName} name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex gap-2 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData.type} name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData.price} name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* third row */}
                    <div className="flex gap-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData.shortDescription} name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-orange-700">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={updateData.rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full mb-10">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-700">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={updateData.image} name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <button className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;