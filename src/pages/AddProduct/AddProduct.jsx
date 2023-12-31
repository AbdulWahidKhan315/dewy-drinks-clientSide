import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.select.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const product = { productName, brandName, type, price, shortDescription, rating, image }
        fetch('https://dewy-drinks-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-orange-100 p-2 lg:p-24 md:pt-7 lg:pt-0">
            <h1 className="text-5xl text-orange-500 text-center font-bold mb-6 italic">Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="flex gap-2 ">
                    <div className="form-control md:w-1/2 mt-6">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-700">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mt-6">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-700">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select name="select" id="" className="input input-bordered w-full" >
                                <option value="Coca-Cola">Coca-Cola</option>
                                <option value="Diet-Coke">Diet-Coke</option>
                                <option value="sprite">sprite</option>
                                <option value="fanta">fanta</option>
                                <option value="barqs">barqs</option>
                                <option value="fresca">fresca</option>
                            </select>
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
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-700">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-orange-700">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full mb-10">
                    <label className="label">
                        <span className="label-text font-semibold text-orange-700">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                    </label>
                </div>
                <button className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;